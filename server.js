// 1. 引入 Express 框架，用来搭建 Node.js 后端服务
const express = require('express')
// 2. 引入 axios 库，用来发送网络请求（调用飞书开放平台接口）
const axios = require('axios')
// 3. 创建 Express 服务实例，后续所有接口、配置都基于这个 app
const app = express()
// 4. 定义服务运行的端口号，前端/浏览器通过 3000 端口访问接口
const port = 3000

// ===================== 全局配置：设置 axios 请求超时时间 =====================
// 防止网络卡顿、接口无响应导致程序卡死，超过 10 秒自动终止请求
axios.defaults.timeout = 10000

// ===================== 全局配置：跨域处理 =====================
// 前端网页和后端端口不同会产生跨域报错，这里统一开启跨域允许
app.use((req, res, next) => {
  // 允许所有域名访问本接口（* 代表全部）
  res.header('Access-Control-Allow-Origin', '*')
  // 允许前端传递 Content-Type 请求头
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  // 执行下一个中间件/逻辑，必须写，否则程序卡住
  next()
})

// ===================== 【重要】飞书多维表格账号配置信息 =====================
// 飞书开放平台 -> 你的应用 -> 凭证与基础信息 里获取
const FEISHU_APP_ID = "cli_aa8582caf8b85cbd"       // 飞书应用ID
const FEISHU_APP_SECRET = "jPzyRShmEgcWalUZVnsQ6b5GxHhwmtzR" // 飞书应用密钥
// 飞书多维表格 ID（表格首页网址里可以找到）
const APP_TOKEN = "CB6cboltBaH3gMsCBmecQ0LFn8b"
// 多维表格里 数据表 ID（表格内具体工作表标识）
const TABLE_ID = "tbllXsLE9l59R9CJ"

// ===================== 飞书 Token 全局缓存变量（核心） =====================
// 缓存从飞书获取的访问令牌 Token
let cacheToken = ''
// 记录当前 Token 的过期时间（时间戳，单位：秒）
let tokenExpireTime = 0
// 解决多请求同时刷新 Token 造成冲突：共享异步请求对象
let refreshPromise = null
// 飞书 Token 默认有效期 7200 秒（2小时），这里提前60秒自动续期，避免刚过期就使用
const TOKEN_EXPIRE_SEC = 7200 - 60

/**
 * 【核心函数】获取飞书访问令牌 Token
 * 作用：统一管理 Token 获取、缓存、自动续期、防并发冲突
 * @returns {string} 有效的飞书 Token
 */
async function getToken() {
  // 获取当前系统时间，转为 秒级时间戳（飞书时间单位为秒）
  const now = Math.floor(Date.now() / 1000)

  // ========== 第一步：判断缓存里的 Token 是否有效 ==========
  // 条件依次判断：
  // 1. cacheToken 不为空
  // 2. 确保是字符串类型
  // 3. 长度大于20（飞书Token固定很长，过滤空/无效值）
  // 4. 当前时间 < Token 过期时间（未到期）
  if (
    cacheToken &&
    typeof cacheToken === 'string' &&
    cacheToken.length > 20 &&
    now < tokenExpireTime
  ) {
    console.log("🔑 使用缓存的飞书 Token")
    // 缓存有效，直接返回旧Token，不用重新请求飞书
    return cacheToken
  }

  // ========== 第二步：防止多个请求同时刷新Token ==========
  // 如果已经有请求正在刷新Token，后面的请求直接等待这个结果，不重复请求飞书
  if (refreshPromise) {
    console.log("⏳ 复用正在刷新的 Token 请求")
    return refreshPromise
  }

  // ========== 第三步：开始全新刷新 Token ==========
  console.log("🔑 开始刷新飞书 Token...")
  // 把刷新Token的异步逻辑赋值给 refreshPromise，实现请求共享
  refreshPromise = (async () => {
    try {
      // 调用飞书【获取企业应用令牌】接口
      const resp = await axios.post(
        "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal",
        {
          // 向飞书传递当前应用的ID和密钥
          app_id: FEISHU_APP_ID,
          app_secret: FEISHU_APP_SECRET
        }
      )

      // 校验飞书返回结果：code !== 0 代表接口请求失败
      // 同时判断是否真正拿到了 tenant_access_token
      if (resp.data.code !== 0 || !resp.data.tenant_access_token) {
        throw new Error(`飞书接口返回异常: ${JSON.stringify(resp.data)}`)
      }

      // 刷新成功：把新Token存入全局缓存
      cacheToken = resp.data.tenant_access_token
      // 计算新Token的过期时间：当前时间 + 有效时长
      tokenExpireTime = now + TOKEN_EXPIRE_SEC

      // 打印日志，方便排查问题
      console.log("✅ 飞书 Token 刷新成功，值:", cacheToken)
      console.log("✅ Token 有效期至:", new Date(tokenExpireTime * 1000).toLocaleString())
      // 返回新的Token给调用方
      return cacheToken

    } catch (err) {
      // 捕获异常：Token 获取失败（密钥错误、网络问题、飞书限流等）
      console.error("❌ 刷新 Token 失败:", err.response?.data || err.message)
      // 清空无效Token，避免后续继续使用错误令牌
      cacheToken = ''
      // 把错误向外抛出，让上层接口处理
      throw err
    } finally {
      // 无论成功/失败，都清空共享请求对象，允许下一次正常刷新
      refreshPromise = null
    }
  })()

  // 返回本次刷新Token的异步结果
  return refreshPromise
}

// ===================== 工具函数 1：格式化飞书原始数据 =====================
/**
 * 把飞书多维表格返回的原始数据，转换成前端好使用的格式
 * @param {object} item 飞书返回的单条原始数据
 * @returns {object} 格式化后的新闻对象
 */
function formatFeishuItem(item) {
  // 取出【发布日期】字段的值
  const fullDate = item.fields?.['发布日期']?.[0]?.text || ''
  // 截取日期部分（去掉时分秒，只保留 年-月-日）
  const datePart = fullDate.split(' ')[0]
  // 把日期字符串按 "-" 拆分，得到 [年,月,日] 数组
  const dateArr = datePart.split('-')

  // 取出【文章】字段（包含正文和跳转链接）
  const article = item.fields?.['文章'] || {}

  // 返回整理好的数据结构，前端直接使用
  return {
    title: item.fields?.['标题']?.[0]?.text || '',    // 新闻标题
    introduce: article.text || '',                    // 新闻简介/正文
    link: article.link || '',                        // 新闻跳转链接
    logo: item.fields?.['标识']?.[0]?.text || '',     // 分类标识（#公司新闻# / #行业动态# 等）
    tag: item.fields?.['标签']?.[0]?.text || '',      // 新闻标签（用于去重、筛选）
    // 拼接 月-日 展示格式，兼容日期格式异常
    date: dateArr.length >= 3 ? `${dateArr[1]}-${dateArr[2]}` : datePart,
    year: dateArr[0] || new Date().getFullYear()      // 年份，用于日期排序
  }
}

// ===================== 工具函数 2：数据去重 =====================
/**
 * 新闻数据去重：根据 标题 + 标签 判断是否为重复内容
 * @param {Array} list 格式化后的新闻数组
 * @returns {Array} 去重后的新闻数组
 */
function deduplicateList(list) {
  // Set 集合：专门用来判断重复值，自动去重
  const seenKeys = new Set()
  // 存放最终去重完成的数据
  const uniqueList = []

  // 遍历每一条新闻
  for (const item of list) {
    // 拼接唯一标识：标题_标签，作为判断重复的依据
    const key = `${item.title}_${item.tag}`
    // 如果这个标识不存在，说明不是重复数据
    if (!seenKeys.has(key)) {
      seenKeys.add(key)    // 把标识加入集合，标记已存在
      uniqueList.push(item)// 把本条新闻加入结果数组
    }
  }
  // 返回去重后的数组
  return uniqueList
}

// ===================== 工具函数 3：按日期倒序排序（最新的放前面） =====================
/**
 * 按 年-月-日 从新到旧排序
 * @param {Array} arr 新闻数组
 * @returns {Array} 排序后的数组
 */
function sortByDateDesc(arr) {
  // 数组排序方法，return 负数/正数/0 决定顺序
  return arr.sort((a, b) => {
    // 拼接成完整日期字符串：年-月-日
    const dateA = `${a.year}-${a.date}`
    const dateB = `${b.year}-${b.date}`
    // 日期倒序：新日期在前，旧日期在后
    return new Date(dateB) - new Date(dateA)
  })
}

// ===================== 工具函数 4：根据【标识】分组 =====================
/**
 * 按照 标识字段 把新闻分成三大类：公司新闻、行业动态、其他
 * @param {Array} list 新闻数组
 * @returns {object} 分组后的三组数据
 */
function groupByLogo(list) {
  const group1 = [] // 存放 #公司新闻#
  const group2 = [] // 存放 #行业动态#
  const group3 = [] // 存放 #其他#

  // 遍历所有新闻，判断分类并放入对应数组
  list.forEach(item => {
    switch (item.logo) {
      case "#公司新闻#":
        group1.push(item)
        break
      case "#行业动态#":
        group2.push(item)
        break
      case "#其他#":
        group3.push(item)
        break
    }
  })
  // 返回三组分类数据
  return { group1, group2, group3 }
}

// ===================== 工具函数 5：提取所有不重复的标签 =====================
/**
 * 提取全部新闻里的标签，自动去重，供前端标签筛选使用
 * @param {Array} list 新闻数组
 * @returns {Array} 不重复的标签数组
 */
function getUniqueTags(list) {
  // 1. 遍历所有数据取出标签  2. 去除首尾空格  3. 过滤空标签  4. Set 去重  5. 转回数组
  return [...new Set(
    list
      .map(item => (item.tag || '').trim())
      .filter(tag => tag)
  )]
}

// ===================== 路由 1：根路径跳转 =====================
// 访问 http://ip:3000 自动跳转到新闻接口 /api/news
app.get('/', (req, res) => {
  res.redirect('/api/news')
})

// ===================== 【核心接口】新闻数据接口 /api/news =====================
// 前端通过这个地址获取所有飞书表格新闻数据
app.get('/api/news', async (req, res) => {
  // 使用 try...catch 捕获整个接口的所有异常，保证服务不崩溃
  try {
    // 调用上面的函数，获取有效的飞书Token
    const token = await getToken()

    // 二次强校验Token：防止拿到空值、无效值
    if (!token || typeof token !== 'string' || token.length < 20) {
      throw new Error(`❌ 获取到的 Token 无效，值为: ${token}`)
    }

    // 打印当前正在使用的Token，方便排错
    console.log("🔑 本次请求使用的 Token:", token)

    // ========== 调用飞书【查询多维表格数据】接口 ==========
    const result = await axios({
      method: "POST", // 请求方式：POST
      // 拼接飞书表格接口完整地址
      url: `https://open.feishu.cn/open-apis/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records/search`,
      // 请求头：必须携带 Token 才能访问表格数据
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      // 请求体：指定要查询哪些字段、每页条数
      data: {
        field_names: ["标题", "文章", "标识", "发布日期", "标签"],
        page_size: 50 // 一次最多获取 50 条数据
      }
    })

    // 打印飞书返回的原始数据总条数
    console.log("📦 飞书返回数据条数:", result.data.data.items.length)

    // 1. 格式化原始数据
    const formattedList = result.data.data.items.map(formatFeishuItem)
    // 2. 数据去重（标题+标签）
    const uniqueList = deduplicateList(formattedList)
    // 3. 按标识分组
    const { group1, group2, group3 } = groupByLogo(uniqueList)
    // 4. 每组分别按日期倒序排序
    const sortedGroup1 = sortByDateDesc(group1)
    const sortedGroup2 = sortByDateDesc(group2)
    const sortedGroup3 = sortByDateDesc(group3)
    // 5. 提取所有不重复标签
    const tagList = getUniqueTags(uniqueList)

    // 最终向前端返回 JSON 格式数据
    res.json({
      companyNews: sortedGroup1,   // 公司新闻
      industryNews: sortedGroup2,  // 行业动态
      otherNews: sortedGroup3,     // 其他新闻
      tagList: tagList             // 全部标签
    })

  } catch (e) {
    // 接口执行出错时（网络、飞书报错、代码异常），返回空数据，前端不会报错
    console.error("❌ 查询飞书失败：", e.response?.data || e.message)
    res.json({
      companyNews: [],
      industryNews: [],
      otherNews: [],
      tagList: []
    })
  }
})

// ===================== 启动后端服务 =====================
// 监听 3000 端口，0.0.0.0 代表允许本机/局域网/外网访问
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 后端启动了：http://0.0.0.0:${port}`)
})