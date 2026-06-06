<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <div class="hero-copy">
                <span class="hero-eyebrow">中档信息 · 数字档案综合服务</span>
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
                <button class="hero-action" @click="navToContactPage">获取解决方案</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!-- WAMS档案综合管理系统 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <!-- <img class="img-responsive" src="@/assets/img/img1.png" alt="WAMS档案综合管理系统"> -->
          <img class="img-responsive product-visual" src="@/assets/img/bg_all_procduct.png" alt="全部产品">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 bigData-copy">
          <span class="section-eyebrow">核心产品</span>
          <h2 class="bigData-title">
            档案管理系统
            <!-- <small>/ WAMS Management System</small> -->
          </h2>
          <p>依据最新的《数字档案室建设指南》、《电子文件管理系统建设指南》、《党政机关电子公文归档规范》等标准进行设计研发，产品吻合行业相关标准规范。涵盖收集、管理、保存、利用、设置模块，实现电子文件的全生命周期安全管理，满足立档单位对档案管理的要求，是各立档单位的综合档案管理解决方案。</p>
          <h2 class="bigData-device">主流国产OS、Linux、Windows系统支持</h2>
          <button
            class="product-action"
            @click="navToContactPage"
          >联系我们</button>
        </div>
      </div>
    </div>
    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>您身边的IT专家</h1>
        <h3>7x24小时提供用心的IT服务</h3>

        <button
          class="contact-action"
          @click="navToContactPage"
        >联系我们</button>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">友情链接</p>
        <!-- 电脑端客户评价 -->
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item,index) in customerList"
              :key="index"
            >
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao_left.png" alt="引号">
              </div>
              <div class="customer-content1">
                <small>{{item.content}}</small>
              </div>
              <div class="customer-content2"><a :href="item.href" target="_blank">{{item.title}}</a></div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- 手机端客户评价 -->
        <div class="row visible-xs customer-block">
          <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo">
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao_left.png" alt="引号">
            </div>
            <div class="customer-content1">
              <small>{{item.content}}</small>
            </div>
            <div class="customer-content2">
              <small><a :href="item.href" target="_blank">{{item.title}}</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们的服务</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div
                class="text-center"
                v-html="item.content"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/img/banner0.jpg"),
          path: "",
          title: '践行文化传承与发展',
          content: '不忘初心，运用信息技术，推动中华文化继承与发展',
        },
        {
          img: require("@/assets/img/banner4.jpg"),
          path: "",
          title: '丰富的行业经验',
          content: '专业强大的研发团队，丰富的行业系统研发经验',
        },
        {
          img: require("@/assets/img/banner5.jpg"),
          path: "",
          title: '吻合最新的标准规范',
          content: '产品紧扣国家和行业最新标准规范，最大程度吻合最新标准规范',
        },
        {
          img: require("@/assets/img/banner6.jpg"),
          path: "",
          title: '专业的档案产品',
          content: '产品适应性极强，满足大中小档案室单位应用',
        },
        {
          img: require("@/assets/img/banner3.jpg"),
          path: "",
          title: '强大的技术团队',
          content: '过硬的技术实施团队，提供问题解答，需求受理及故障受理服务',
        }
      ],
      customerList: [
        {
          logo: require("@/assets/img/logo_saac.png"),
          title:
            "国家档案局",
          content:
            "中华人民共和国国家档案局",
          href: "https://www.saac.gov.cn/daj/hybz/dabz_list_5.shtml"
        },
        {
          logo: require("@/assets/img/logo_dawindow.jpg"),
          title:
            "档案之窗",
          content:
            "资讯频道提供最新档案资讯,档案新闻,档案行业资讯",
          href: "http://www.dawindow.com/"
        },
        {
          logo: require("@/assets/img/logo_beijing.png"),
          title:
            "北京市档案信息网",
          content:
            "北京市档案信息网",
          href: "http://www.bjma.gov.cn/"
        },
        {
          logo: require("@/assets/img/logo_dagd.png"),
          title:
            "广东省档案馆",
          content:
            "广东省档案馆",
          href: "https://www.da.gd.gov.cn/"
        },
        {
          logo: require("@/assets/img/logo_zjda.png"),
          title:
            "浙江档案网",
          content:
            "浙江省档案网",
          href: "http://www.zjda.gov.cn/"
        },
        {
          logo: require("@/assets/img/logo_gxda.png"),
          title:
            "广西档案信息网",
          content:
            "广西档案信息网",
          href: "https://www.gxdag.org.cn/"
        }
      ],
      serverList: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "专业团队",
          content: "<p>专业强大的研发团队，丰富的行业系统研发经验"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "标准吻合",
          content: "<p>产品紧扣国家和行业最新标准规范，最大程度吻合最新标准规范"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "广泛应用",
          content: "<p>产品适应性极强，满足大中小档案室单位应用"
        },
        {
          logo: require("@/assets/img/qq.png"),
          title: "优质服务",
          content: "<p>过硬的技术实施团队，提供问题解答，需求受理及故障受理服务"
        }
      ]
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  },
  methods: {
    /** 前往联系我们页面 */
    navToContactPage() {
      this.$router.push({ path: '/contactus' })
    }
  }
};
</script>
<style scoped>
#HomePage {
  width: 100%;
  overflow: hidden;
  background: #fff;
}

#swiper {
  height: 620px;
  background: #071d36;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
}
#swiper .banner-swiper .swiper-slide{
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(5, 20, 40, 0.88) 0%, rgba(7, 39, 76, 0.72) 46%, rgba(17, 123, 199, 0.24) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.42));
  text-align: left;
  line-height: 1.5;
  display: flex;
  align-items: center;
}
#swiper .hero-copy {
  width: 1170px;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding-bottom: 24px;
}
#swiper .hero-eyebrow,
.section-eyebrow {
  display: inline-block;
  color: #80d8ff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  padding: 7px 14px;
  border: 1px solid rgba(128, 216, 255, 0.34);
  border-radius: 4px;
  background: rgba(11, 104, 179, 0.18);
}
#swiper .hero-copy h1{
  font-size: 56px;
  line-height: 1.15;
  max-width: 760px;
  margin: 24px 0 18px;
  font-weight: 700;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}
#swiper .hero-copy p{
  font-size: 20px;
  line-height: 1.8;
  max-width: 680px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-weight: 400;
}
#swiper .hero-action,
#bigData .product-action,
#contactUs .contact-action {
  min-width: 156px;
  height: 46px;
  margin-top: 32px;
  padding: 0 28px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  background: linear-gradient(90deg, #1e73be, #24b7f2);
  box-shadow: 0 12px 28px rgba(30, 115, 190, 0.3);
  transition: all 0.25s ease;
}
#swiper .hero-action:hover,
#bigData .product-action:hover,
#contactUs .contact-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 34px rgba(30, 115, 190, 0.36);
}
#swiper .swiper-pagination-bullet {
  width: 26px;
  height: 4px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.75);
  opacity: 1;
}
#swiper .swiper-pagination-bullet-active {
  background: #24b7f2;
}
#swiper .swiper-button-prev,
#swiper .swiper-button-next {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  background-size: 18px 18px;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
}
#swiper .swiper-button-prev:hover,
#swiper .swiper-button-next:hover {
  background-color: rgba(36, 183, 242, 0.65);
}

#bigData {
  padding: 96px 0;
  transition: all ease 0.6s;
  box-sizing: border-box;
  background:
    linear-gradient(180deg, #f7fbff 0%, #fff 72%),
    radial-gradient(circle at 8% 10%, rgba(36, 183, 242, 0.12), transparent 32%);
}
#bigData .bigData-container {
  width: 1170px;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  display: flex;
  align-items: center;
}
#bigData .product-visual {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  filter: drop-shadow(0 22px 36px rgba(15, 76, 145, 0.16));
}
#bigData .bigData-copy {
  padding-left: 42px;
}
#bigData .section-eyebrow {
  color: #1e73be;
  border-color: rgba(30, 115, 190, 0.18);
  background: #edf7ff;
}
#bigData .bigData-title {
  color: #13263d;
  font-size: 36px;
  line-height: 1.25;
  font-weight: 700;
  margin: 20px 0 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(30, 115, 190, 0.16);
}
#bigData p {
  font-size: 15px;
  color: #536173;
  line-height: 2;
}
#bigData .bigData-device {
  color: #0f65b8;
  font-size: 22px;
  line-height: 1.4;
  margin: 34px 0 0;
}
#bigData .product-action {
  margin-top: 26px;
}

#contactUs {
  color: #fff;
  min-height: 360px;
  background:
    linear-gradient(90deg, rgba(5, 20, 40, 0.88), rgba(15, 76, 145, 0.76)),
    url("../assets/img/contact_us_bg.jpg") center center no-repeat;
  background-size: cover;
  transition: all ease 0.6s;
  display: flex;
  align-items: center;
}
#contactUs .contactUs-container {
  padding-top: 0;
}
#contactUs .contactUs-container h1 {
  font-size: 40px;
  line-height: 1.3;
  font-weight: 700;
  margin: 0 0 14px;
}
#contactUs .contactUs-container h3 {
  color: rgba(255, 255, 255, 0.82);
  font-size: 22px;
  font-weight: 400;
  margin: 0;
}
#contactUs .contact-action {
  color: #0f4c91;
  background: #fff;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 46px;
  height: 46px;
  margin: 28px 16px 0;
  border-radius: 50%;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease;
}
#contactUs .contactUs-container .contactUs-contactWay span:hover {
  transform: translateY(-3px);
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/xhs.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/douyin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#customer {
  padding: 76px 0;
  box-sizing: border-box;
  background: #f5f8fc;
  transition: all ease 0.6s;
}
#customer .customer-title {
  font-size: 32px;
  color: #13263d;
  font-weight: 700;
  margin: 0 0 36px;
}
#customer .customer-block {
  background: #fff;
  padding: 28px;
  border-radius: 6px;
  border: 1px solid rgba(30, 115, 190, 0.08);
  box-shadow: 0 16px 32px rgba(15, 76, 145, 0.08);
}
#customer .customer-logo img {
  width: 92px;
  height: 92px;
  object-fit: contain;
  border: 1px solid #e2ebf5;
  border-radius: 6px;
}
#customer .customer-yh img {
  width: 28px;
  height: 28px;
  opacity: 0.45;
  margin-top: 12px;
}
#customer .customer-content1 {
  min-height: 56px;
  color: #536173;
  line-height: 1.7;
  padding-bottom: 18px;
  border-bottom: 1px solid #dceefa;
}
#customer .customer-content2 {
  padding-top: 18px;
  font-weight: 700;
}
#customer .customer-content2 a {
  color: #0f65b8;
}
#customer .swiper-button-prev,
#customer .swiper-button-next {
  width: 34px;
  height: 34px;
  background-size: 15px 15px;
}

#whyChooseUs {
  padding: 92px 0;
  background: #fff;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  color: #13263d;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  color: #7b8da3;
  font-size: 14px;
  letter-spacing: 0;
  margin: 0;
}
#whyChooseUs .server-wrapper {
  margin-bottom: 24px;
}
#whyChooseUs .server-block {
  min-height: 258px;
  padding: 42px 22px;
  color: #536173;
  border: 1px solid #e2ebf5;
  border-bottom: 4px solid #d9edfb;
  border-radius: 6px;
  background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
  box-shadow: 0 16px 34px rgba(15, 76, 145, 0.07);
  transition: all 0.25s ease;
}
#whyChooseUs .server-block:hover {
  color: #1e73be;
  border-color: rgba(30, 115, 190, 0.36);
  border-bottom-color: #24b7f2;
  transform: translateY(-5px);
  box-shadow: 0 22px 40px rgba(15, 76, 145, 0.14);
}
#whyChooseUs .server-block img {
  width: 54px;
  height: 54px;
  object-fit: contain;
}
#whyChooseUs .server-block > p {
  color: #13263d;
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 16px;
}
#whyChooseUs .server-block > div {
  color: #6f7f91;
  line-height: 1.8;
}

@media screen and (max-width: 768px) {
  #swiper {
    height: 430px;
  }
  #swiper .hero-copy {
    max-width: calc(100% - 32px);
  }
  #swiper .hero-eyebrow {
    font-size: 12px;
    padding: 5px 10px;
  }
  #swiper .hero-copy h1 {
    font-size: 32px;
    margin: 18px 0 12px;
  }
  #swiper .hero-copy p {
    font-size: 15px;
    line-height: 1.7;
  }
  #swiper .hero-action {
    height: 42px;
    margin-top: 22px;
    padding: 0 22px;
  }
  #swiper .swiper-button-prev,
  #swiper .swiper-button-next {
    display: none;
  }
  #bigData {
    padding: 54px 0;
  }
  #bigData .bigData-container {
    display: block;
    max-width: calc(100% - 30px);
  }
  #bigData .bigData-copy {
    padding: 28px 0 0;
  }
  #bigData .bigData-title {
    font-size: 26px;
    margin: 16px 0 18px;
  }
  #bigData p {
    font-size: 14px;
  }
  #bigData .bigData-device {
    font-size: 18px;
    margin: 22px 0 0;
  }
  #contactUs {
    min-height: 280px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container h1 {
    font-size: 28px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 16px;
  }
  #contactUs .contact-action {
    min-width: 132px;
    height: 40px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    width: 34px;
    height: 34px;
    margin: 18px 8px 0;
  }
  #customer {
    padding: 48px 0;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #customer .customer-logo img {
    width: 64px;
    height: 64px;
  }
  #customer .customer-block {
    padding: 20px;
  }
  #customer .customer-block > div {
    padding: 18px 0;
  }
  #whyChooseUs {
    padding: 52px 0 36px;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 24px;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    min-height: auto;
    padding: 34px 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 520px;
  }
  #swiper .hero-copy h1 {
    font-size: 44px;
  }
  #bigData {
    padding: 70px 0;
  }
  #bigData .bigData-container {
    display: block;
    max-width: calc(100% - 48px);
  }
  #bigData .bigData-copy {
    padding: 34px 0 0;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 22px;
    margin: 28px 0 0;
  }
  #contactUs {
    min-height: 320px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 34px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    width: 38px;
    height: 38px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 28px;
  }
  #whyChooseUs {
    padding: 64px 0 44px;
  }
}
</style>
