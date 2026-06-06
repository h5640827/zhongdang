// 引入express框架：用来搭建后端接口服务
const express = require('express')
// 引入axios：用来请求飞书开放平台接口
const axios = require('axios')
// 创建服务实例
const app = express()
// 后端端口固定3000，前端8888访问
const port = 3000

// 跨域配置：允许前端访问后端接口
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// ========== 飞书多维表格配置信息（不要改动） ==========
const FEISHU_APP_ID = "cli_aa8582caf8b85cbd"
const FEISHU_APP_SECRET = "jPzyRShmEgcWalUZVnsQ6b5GxHhwmtzR"
const APP_TOKEN = "CB6cboltBaH3gMsCBmecQ0LFn8b"
const TABLE_ID = "tbllXsLE9l59R9CJ"

// ========== 获取飞书访问凭证 ==========
async function getToken() {
  try {
    const resp = await axios.post(
      "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal",
      { app_id: FEISHU_APP_ID, app_secret: FEISHU_APP_SECRET }
    )
    return resp.data.tenant_access_token
  } catch (e) {
    console.error("❌ 获取Token失败：", e.response?.data || e.message)
    throw e
  }
}

// 根路径自动跳转到新闻接口
app.get('/', (req, res) => {
  res.redirect('/api/news')
})

// ========== 核心新闻接口：按标识分组 + 标签去重 ==========
app.get('/api/news', async (req, res) => {
  try {
    const token = await getToken()

    // 请求飞书表格数据
    const result = await axios({
      method: "POST",
      url: `https://open.feishu.cn/open-apis/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records/search`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      data: {
        field_names: ["标题", "文章", "标识", "发布日期", "标签"],
        page_size: 50
      }
    })

    // 1. 格式化每条数据
    const list = result.data.data.items.map(item => {
      const fullDate = item.fields?.['发布日期']?.[0]?.text || ''
      const datePart = fullDate.split(' ')[0] // 切掉时分秒，只留日期
      const dateArr = datePart.split('-')

      // 文章不是数组，直接取对象
      const article = item.fields?.['文章'] || {}

      return {
        title: item.fields?.['标题']?.[0]?.text || '',
        introduce: article.text || '',
        link: article.link || '',
        logo: item.fields?.['标识']?.[0]?.text || '', // 用来分组的标识字段
        tag: item.fields?.['标签']?.[0]?.text || '',
        date: dateArr.length >= 2 ? `${dateArr[1]}-${dateArr[2]}` : datePart,
        year: dateArr[0] || '2026'
      }
    })

    // 2. 按【标识logo】分成3组（你表格里填什么就对应什么）
    const group1 = list.filter(item => item.logo === "#公司新闻#")   // 新闻页
    const group2 = list.filter(item => item.logo === "#行业动态#")   // 行业动态页
    const group3 = list.filter(item => item.logo === "#其他#")      // 备用第三组

    // 3. 全局标签去重（所有数据里的标签只保留一份）
    const uniqueTags = [...new Set(list.map(item => item.tag).filter(Boolean))]

    // 4. 返回给前端：3个数据包 + 去重标签
    res.json({
      companyNews: group1,    // 新闻页数据
      industryNews: group2,   // 行业动态页数据
      otherNews: group3,      // 第三组备用数据
      tagList: uniqueTags     // 全局去重标签
    })

  } catch (e) {
    console.error("❌ 查询飞书失败：", e.response?.data || e.message)
    res.json({ companyNews: [], industryNews: [], otherNews: [], tagList: [] })
  }
})

// 启动服务（允许外网访问，必须写 0.0.0.0）
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 后端启动：http://0.0.0.0:${port}`)
})