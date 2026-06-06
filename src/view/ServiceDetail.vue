<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">相关服务</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>特色服务</p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              <small>/ {{item.eng_title}}</small>
            </h2>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "ServiceDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "系统定制开发"
        },
        {
          id: "section-2",
          title: "信息系统集成服务"
        },
        {
          id: "section-3",
          title: "信息技术资询服务"
        },
        {
          id: "section-4",
          title: "档案整理服务"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "系统定制开发",
          eng_title: "System customization development",
          content:
            "<h3>档案行业产品研发</h3><p>我们拥有专业的技术团队，专注档案行业产品相关产品研发。针对不同行业和不同企业，结合客户实际需求，为客户量身定制符合自身要求标准的软件系统，满足业务需求功能和逻辑扩展，赋能企业发展。</p><h3>企业数字化建设</h3><p>协助企业制定数字化转型规划，助力企业数字化转型升级。</p>"
        },
        {
          id: "section-2",
          title: "信息系统集成服务",
          eng_title: "Information systems integration services",
          content:
            "<h3>系统建设</h3><p>系统建设</p><h3>系统升级</h3><p>系统升级</p>"
        },
        {
          id: "section-3",
          title: "信息技术资询服务",
          eng_title: "Information technology information services",
          content:
            "<h3>IT信息化建设</h3><p>信息技术资询服务</p><h3>企业数字化转型</h3><p>企业数字化转型</p><h3>专业产品定制</h3><p>专业产品定制</p>"
        },
        {
          id: "section-4",
          title: "档案整理服务",
          eng_title: "Archiving services",
          content:
            "<h3>档案整理</h3><p>档案整理</p><h3>档案数字化加工</h3><p>随着信息化建设的加速和无纸化办公的要求，要把纸质的档案转化成电子化的档案以方便查询和利用，数字化加工服务（扫描服务）顺应了这一潮流，并在这几年内快速兴起，我司有专业的数字化加工工作团队。</p>"
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
      }
    });
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_service.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
</style>
