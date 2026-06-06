<template>
  <!-- 新闻动态页面最外层容器 -->
  <div id="NewsInformation">
    <div class="container">
      <!-- 页面标题区域：新闻动态标题 + 英文副标题 -->
      <div class="container text-center">
        <h3>新闻动态</h3>
        <p style="color:#b2b2b2">Company News</p >
      </div>

      <!-- 顶部标签切换栏：公司新闻 / 行业动态 -->
      <div class="nav container text-center">
        <!-- 切换到公司新闻 -->
        <div @click="currIndex = 0" :class="currIndex === 0 ? 'active' : ''">公司新闻</div>
        <!-- 切换到行业动态 -->
        <div @click="currIndex = 1" :class="currIndex === 1 ? 'active' : ''">行业动态</div>
      </div>

      <!-- 公司新闻列表：后端接口数据，点击整项跳转 -->
      <ul class="news-container container-fuild" v-if="currIndex === 0">
        <li v-for="(item, idx) in newsList" :key="idx" @click="goLink(item.link)">
          <!-- 新闻标题+简介区域 -->
          <div class="content">
            <p class="news-title">{{ item.title }}</p >
            <p class="news-desc">{{ item.introduce }}</p >
          </div>
          <!-- 日期区域：月日 + 年份 -->
          <div class="time">
            <p>{{ item.date }}</p >
            <span>{{ item.year }}</span>
          </div>
          <!-- 时间线圆点+竖线 -->
          <div class="circle">
            <img src="../assets/img/circle.png">
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>

      <!-- 行业动态列表：✅ 已添加点击跳转，和公司新闻逻辑一致 -->
      <ul class="news-container container-fuild" v-if="currIndex === 1">
        <li v-for="(item, idx) in industryTrendsList" :key="idx" @click="goLink(item.link)">
          <div class="content">
            <p class="news-title">{{ item.title }}</p >
            <p class="news-desc">{{ item.introduce }}</p >
          </div>
          <div class="time">
            <p>{{ item.date }}</p >
            <span>{{ item.year }}</span>
          </div>
          <div class="circle">
            <img src="../assets/img/circle.png">
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>

      <!-- 底部更多按钮 -->
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs' // 滚动动画库
import axios from 'axios'     // 网络请求库

export default {
  name: 'NewsInformation',
  data() {
    return {
      currIndex: 0, // 当前标签：0=公司新闻，1=行业动态
      newsList: [], // 公司新闻数据（来自后端分组：companyNews）
      industryTrendsList: [], // 行业动态数据（来自后端分组：industryNews）
      tagList: []   // 全局去重后的标签
    }
  },
  mounted() {
    new WOW().init() // 初始化滚动动画
    this.loadData()  // 页面加载即请求数据
  },
  methods: {
    /**
     * 加载新闻数据
     * 优先请求后端飞书分组接口，失败则走本地JSON兜底
     */
  async loadData() {
  try {
    // 改成 /api/news 走Nginx代理，不会再报跨域、SSL错误
    const res = await axios.get('/api/news')
    this.newsList = res.data.companyNews
    this.industryTrendsList = res.data.industryNews
    this.tagList = res.data.tagList
  } catch (err) {
    // 兜底本地JSON不变
    const res1 = await axios.get('/static/newsList.json')
    const res2 = await axios.get('/static/industryTrendsList.json')
    this.newsList = res1.data
    this.industryTrendsList = res2.data
  }
},
    /**
     * 跳转外部链接
     * @param {string} url 后端返回的链接
     * 只有url不为空才跳转，避免空白链接报错
     */
    goLink(url) {
      if (url && url.trim() !== '') {
        window.open(url, '_blank') // 新窗口打开
      }
    }
  }
}
</script>

<style scoped>
/* 新闻模块最小高度，防止页面塌陷 */
#NewsInformation {
  min-height: 500px;
}

/* 顶部标签栏上下间距 */
.nav {
  margin: 20px 0;
}
/* 标签按钮基础样式 */
.nav>div {
  display: inline-block;
  width: 120px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #333;
  color: #333;
  cursor: pointer;
  margin: 0 4px;
}
/* 标签选中激活样式 */
.nav>div.active {
  color: #1e73be;
  border-color: #1e73be;
}
/* 标签hover高亮 */
.nav>div:hover {
  color: #1e73be;
  border-color: #1e73be;
}

/* 新闻列表容器：清除浮动、隐藏溢出 */
.news-container {
  overflow: hidden;
  padding: 0;
  list-style: none;
}
/* 新闻项基础布局 */
.news-container>li {
  width: 55.61%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  box-sizing: border-box;
  padding: 0;
  border: 1px solid transparent;
  cursor: pointer; /* 鼠标悬浮显示手型 */
}
/* hover高亮 */
.news-container>li:hover {
  color: #1e73be;
  border-color: #1e73be;
}
/* 偶数项右浮动+文字左对齐，实现左右交替布局 */
.news-container>li:nth-of-type(2n) {
  float: right;
  text-align: left;
}

/* 新闻标题+简介容器 */
.news-container>li>.content {
  width: 60%;
  float: left;
  padding: 20px 0;
}
/* 新闻标题：加粗加大，后期改字体改这里即可 */
.news-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px;
}
/* 新闻简介：小号灰色文字 */
.news-desc {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 日期区域布局 */
.news-container>li>.time {
  width: 20%;
  float: left;
  padding: 10px 0;
}
/* 月-日大号字体 */
.news-container>li>.time>p {
  font-size: 30px;
  margin: 5px 0;
}
/* 年份字体大小 */
.news-container>li>.time>span{
  font-size: 20px;
  font-weight: 500;
}

/* 时间线圆点+竖线容器 */
.news-container>li>.circle {
  width: 20%;
  height: 120px;
  float: left;
  position: relative;
}
/* 圆点图标居中 */
.news-container>li>.circle>img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
}
/* 竖线样式 */
.news-container>li>.circle>i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
/* 第一条竖线只显示下半段 */
.news-container>li:nth-of-type(1)>.circle>i {
  height: 50%;
  top: 50%;
}

/* 偶数项布局反转 */
.news-container>li:nth-of-type(2n)>.content {
  float: right;
}
.news-container>li:nth-of-type(2n)>.time {
  float: right;
}
.news-container>li:nth-of-type(2n)>.circle {
  float: right;
}

/* 底部更多按钮 */
.more {
  font-size: 25px;
  color: #707070;
  margin-top: 20px;
}
.more>i {
  cursor: pointer;
}

/* 移动端适配：宽度100%，隐藏时间线 */
@media screen and (max-width: 767px) {
  .news-container>li {
    width: 100%;
  }
  .news-container>li>.content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container>li>.time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container>li>.circle {
    display: none;
  }
}
</style>