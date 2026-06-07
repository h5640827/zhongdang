<template>
  <div id="NewsInformation">
    <div class="container news-page">
      <div class="news-heading text-center">
        <span class="section-eyebrow">News Center</span>
        <h3>新闻动态</h3>
        <p>聚焦档案信息化建设、企业动态与行业政策趋势</p>
      </div>

      <div class="news-tabs text-center">
        <button type="button" @click="currIndex = 0" :class="currIndex === 0 ? 'active' : ''">
          公司新闻
          <span>{{newsList.length}}</span>
        </button>
        <button type="button" @click="currIndex = 1" :class="currIndex === 1 ? 'active' : ''">
          行业动态
          <span>{{industryTrendsList.length}}</span>
        </button>
      </div>

      <div class="news-layout" v-if="activeList.length">
        <div class="featured-news" @click="goLink(featuredNews.link)">
          <span class="featured-label">{{currIndex === 0 ? 'Company Focus' : 'Industry Focus'}}</span>
          <h4>{{featuredNews.introduce || featuredNews.title}}</h4>
          <p>{{featuredNews.title}}</p>
          <div class="featured-meta">
            <strong>{{featuredNews.date}}</strong>
            <span>{{featuredNews.year}}</span>
          </div>
        </div>

        <div class="news-list-panel">
          <div
            class="news-list-item"
            v-for="(item, idx) in sideList"
            :key="'side-'+idx"
            @click="goLink(item.link)"
          >
            <div class="date-block">
              <strong>{{item.date}}</strong>
              <span>{{item.year}}</span>
            </div>
            <div class="item-copy">
              <h4>{{item.introduce || item.title}}</h4>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="news-card-grid" v-if="cardList.length">
        <article
          class="news-card"
          v-for="(item, idx) in cardList"
          :key="'card-'+idx"
          @click="goLink(item.link)"
        >
          <div class="card-date">
            <strong>{{item.date}}</strong>
            <span>{{item.year}}</span>
          </div>
          <h4>{{item.introduce || item.title}}</h4>
          <p>{{item.title}}</p>
        </article>
      </div>

      <div class="empty-news text-center" v-if="!activeList.length">
        暂无新闻内容
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import axios from 'axios'

export default {
  name: 'NewsInformation',
  data() {
    return {
      currIndex: 0,
      newsList: [],
      industryTrendsList: [],
      tagList: []
    }
  },
  computed: {
    activeList() {
      return this.currIndex === 0 ? this.newsList : this.industryTrendsList
    },
    featuredNews() {
      return this.activeList[0] || {}
    },
    sideList() {
      return this.activeList.slice(1, 5)
    },
    cardList() {
      return this.activeList.slice(5)
    }
  },
  mounted() {
    new WOW().init()
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        const res = await axios.get('/api/news')
        this.newsList = res.data.companyNews || []
        this.industryTrendsList = res.data.industryNews || []
        this.tagList = res.data.tagList || []
      } catch (err) {
        const res1 = await axios.get('/static/newsList.json')
        const res2 = await axios.get('/static/industryTrendsList.json')
        this.newsList = res1.data || []
        this.industryTrendsList = res2.data || []
      }
    },
    goLink(url) {
      if (url && url.trim() !== '') {
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style scoped>
#NewsInformation {
  min-height: 500px;
  background: linear-gradient(180deg, #f7fbff 0%, #ffffff 40%);
}
.news-page {
  max-width: 1180px;
  padding: 54px 15px 72px;
}
.news-heading {
  margin-bottom: 26px;
}
.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #0f74bd;
  font-size: 13px;
  font-weight: 700;
}
.section-eyebrow:before,
.section-eyebrow:after {
  content: "";
  width: 28px;
  height: 1px;
  background: rgba(15, 116, 189, .32);
}
.news-heading h3 {
  margin: 10px 0;
  color: #173b5c;
  font-size: 34px;
  font-weight: 800;
  line-height: 1.25;
}
.news-heading p {
  max-width: 620px;
  margin: 0 auto;
  color: #62798f;
  font-size: 15px;
  line-height: 1.8;
}
.news-tabs {
  margin: 0 0 32px;
}
.news-tabs button {
  min-width: 142px;
  height: 44px;
  margin: 0 5px;
  padding: 0 18px;
  border: 1px solid rgba(34, 126, 207, .18);
  border-radius: 6px;
  color: #315f83;
  font-weight: 700;
  background: rgba(255,255,255,.82);
  transition: all .22s ease;
}
.news-tabs button span {
  margin-left: 8px;
  color: #7890a5;
  font-size: 12px;
}
.news-tabs button:hover,
.news-tabs button.active {
  color: #fff;
  border-color: transparent;
  background: linear-gradient(135deg, #0d63b5 0%, #20a7dc 100%);
  box-shadow: 0 12px 26px rgba(22, 132, 210, .2);
}
.news-tabs button.active span,
.news-tabs button:hover span {
  color: rgba(255,255,255,.76);
}
.news-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}
.featured-news {
  position: relative;
  min-height: 336px;
  padding: 34px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(8, 27, 49, .92) 0%, rgba(13, 99, 181, .86) 100%),
    radial-gradient(circle at 86% 12%, rgba(32,167,220,.42), transparent 38%);
  box-shadow: 0 22px 48px rgba(8, 45, 87, .18);
}
.featured-news:after {
  content: "";
  position: absolute;
  right: -70px;
  bottom: -90px;
  width: 260px;
  height: 260px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 50%;
}
.featured-label {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 5px;
  color: rgba(255,255,255,.86);
  font-size: 12px;
  font-weight: 700;
  background: rgba(255,255,255,.12);
}
.featured-news h4 {
  position: relative;
  z-index: 1;
  margin: 54px 0 18px;
  font-size: 27px;
  font-weight: 800;
  line-height: 1.45;
}
.featured-news p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255,255,255,.68);
  font-size: 14px;
}
.featured-meta {
  position: absolute;
  left: 34px;
  bottom: 30px;
  z-index: 1;
}
.featured-meta strong {
  display: block;
  font-size: 28px;
  line-height: 1;
}
.featured-meta span {
  display: block;
  margin-top: 6px;
  color: rgba(255,255,255,.62);
}
.news-list-panel {
  display: grid;
  gap: 12px;
}
.news-list-item,
.news-card {
  cursor: pointer;
  border: 1px solid rgba(34, 126, 207, .12);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 14px 32px rgba(8, 45, 87, .07);
  transition: all .22s ease;
}
.news-list-item {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 16px;
  min-height: 75px;
  padding: 18px;
}
.news-list-item:hover,
.news-card:hover {
  transform: translateY(-4px);
  border-color: rgba(26, 166, 201, .34);
  box-shadow: 0 22px 46px rgba(8, 45, 87, .12);
}
.date-block,
.card-date {
  color: #0f5d9e;
}
.date-block strong,
.card-date strong {
  display: block;
  font-size: 22px;
  line-height: 1;
}
.date-block span,
.card-date span {
  display: block;
  margin-top: 6px;
  color: #7890a5;
  font-size: 12px;
}
.item-copy h4,
.news-card h4 {
  margin: 0;
  color: #173b5c;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
}
.item-copy p,
.news-card p {
  margin: 8px 0 0;
  color: #7890a5;
  font-size: 13px;
  line-height: 1.5;
}
.news-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.news-card {
  min-height: 176px;
  padding: 20px;
}
.card-date {
  margin-bottom: 20px;
}
.empty-news {
  padding: 60px 0;
  color: #7890a5;
}
@media screen and (max-width: 991px) {
  .news-layout,
  .news-card-grid {
    grid-template-columns: 1fr;
  }
  .featured-news {
    min-height: 300px;
  }
}
@media screen and (max-width: 767px) {
  .news-page {
    padding: 38px 15px 50px;
  }
  .news-heading h3 {
    font-size: 28px;
  }
  .news-tabs button {
    min-width: 128px;
    margin-bottom: 8px;
  }
  .featured-news {
    padding: 24px;
  }
  .featured-news h4 {
    margin-top: 38px;
    font-size: 22px;
  }
  .featured-meta {
    left: 24px;
    bottom: 24px;
  }
  .news-list-item {
    grid-template-columns: 74px 1fr;
    gap: 12px;
    padding: 16px;
  }
}
</style>
