<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div class="JobChance-container wow pulse" v-for="(item,index) in jobChanceList" :key="index">
        <h2>{{item.title}}</h2>
        <p>岗位职责</p>
        <div class="zy-content" v-html="item.jobResponsibilities"></div>
        <p>任职要求</p>
        <div class="zy-content" v-html="item.jobRequirements"></div>
        <button class="center-block btn btn-warning btn-lg" @click="showModal(item)">投递简历</button>
      </div>

      <!-- <div class="JobChance-container wow pulse">
        <h2>Java开发工程师</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责执行产品或项目开发计划并实现既定目标；</li>
          <li>按照产品或项目的设计需求完成功能模块设计、开发、单元测试；</li>
          <li>负责问题分析、系统性能调优等。</li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>大专及以上学历，可接受项目练习实践经验丰富的毕业生；</li>
          <li>掌握SpringMVC、SpringBoot、SpringCloud、Mybatis；</li>
          <li>掌握JavaScript、VUE；</li>
          <li>掌握HTML5、CSS3；</li>
          <li>掌握MySql、Redis、MongDB等相关数据库。</li>
        </ol>
        <button class="center-block btn btn-warning btn-lg">投递简历</button>
      </div> -->
    </div>

    <!-- 投递简历的弹窗 -->
    <Modal v-model="modal" title="投递简历">
        <p>感谢您的投递，请将简历发送至：
          <Tooltip content="点击即可发送简历">
            <a id="sendEmailA" :href="sendEmail" rel="nofollow">{{email}}</a>
          </Tooltip>
          邮箱，我们看到后会与您联系！
        </p>
        <div slot="footer">
          <Button type="text" @click="modal = false">关闭</Button>
          <Button type="primary" @click="sendEmailBtn">发送</Button>
        </div>
    </Modal>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
import $ from 'jquery';
export default {
  name: "JobChance",
  data() {
    return {
      jobChanceList: [
        {
          title: "商务售前经理",
          jobResponsibilities: "1、负责售前方案制作，商务ppt设计和系统演示；<br/>2、具备招投标文件制作能力，熟悉公司资质发展；<br/>3、负责合同管理和项目资料管理等要求。",
          jobRequirements: "1、本科及以上学历，2年以上招投标经验；<br/>2、良好的项目管理能力，具备较好的文档写作能力，熟悉项目实施到验收整个流程；<br/>3、具备项目管理证书优先，档案专业优先。",
          email: "ljz@zdams.cn"
        },
        {
          title: "区域市场经理",
          jobResponsibilities: "1、政府机关企事业单位档案信息化市场客户开发；<br/>2、具备软硬件系统集成服务项目销售经验；<br/>3、区域团队管理岗位晋升机会。",
          jobRequirements: "1、本科及以上学历，2年以上销售经验；<br/>2、良好的销售管理能力，具备较好的文档写作能力，熟悉项目实施到验收整个流程；<br/>3、具备项目管理证书优先，市场营销和档案专业优先。",
          email: "ljz@zdams.cn"
        },
        {
          title: "开发经理",
          jobResponsibilities: "1、管理产品或项目开发团队，负责执行产品或项目开发计划并实现既定目标工作职责；<br/>2、负责产品或项目的需求分析，按照产品或项目的设计需求完成软件设计、开发、单元测试、技术文档撰写；<br/>3、负责技术难点攻关、问题分析、系统性能调优等。",
          jobRequirements: "1、大专及以上学历，计算机相关专业，2年以上工作经验；<br/>2、掌握或熟悉SpringMVC、SpringBoot、SpringCloud、SpringSecurity、Shiro、Mybatis；<br/>3、掌握或熟悉JavaScript、VUE、Node.js；<br/>4、掌握或熟悉HTML5、CSS3，跨浏览器开发；<br/>5、掌握或熟悉MySql、Redis、MongDB、相关国产数据库。",
          email: "ljz@zdams.cn"
        },
        {
          title: "JAVA开发工程师",
          jobResponsibilities: "1、负责执行产品或项目开发计划并实现既定目标；<br/>2、按照产品或项目的设计需求完成功能模块设计、开发、单元测试；<br/>3、负责问题分析、系统性能调优等。",
          jobRequirements: "1、大专及以上学历，可接受项目练习实践经验丰富的毕业生；<br/>2、掌握SpringMVC、SpringBoot、SpringCloud、Mybatis；<br/>3、掌握JavaScript、VUE；<br/>4、掌握HTML5、CSS3；<br/>5、掌握MySql、Redis、MongDB等相关数据库。",
          email: "ljz@zdams.cn"
        },
        {
          title: "WEB前端工程师",
          jobResponsibilities: "1、负责公司WEB应用系统的前端开发工作；<br/>2、视产品或项目需要负责微信公众号、小程序的页面设计开发；<br/>3、根据产品原型、UI效果图等，开发前端代码，制作或协助制作各种页面组件和页面模板；<br/>4、持续参与改善系统前端用户体验和性能。<br/>5、推进前端工程化建设，提升开发效率、代码质量、可读性，努力做到降低维护难度和成本。",
          jobRequirements: "1、大专及以上学历，一年或以上经验，责任心强，做事踏实不浮躁；<br/>2、熟练运用Vue.js进行前端开发； <br/>3、掌握或了解Vue的周边资源，例如：vuetify、vuex、vue-router、vue-form；<br/>4、有扎实的JavaScript基础，熟练掌握ES6，H5，CSS3；<br/>5、具有良好的代码风格、接口设计与程序架构，对前端工程化有实践或实战项目经历者优先。",
          email: "ljz@zdams.cn"
        },
        {
          title: "项目经理",
          jobResponsibilities: "1、负责项目过程管理，规范流程管理，编制项目计划，进行项目可行性分析；<br />2、识别和控制项目风险，管理项目二次开发进度和项目实施质量；<br />3、全面负责或参与客户项目二次定制开发设计、编码、联调、售后维护；<br />4、负责项目验收材料的规范收集、整理、编写；<br />5、善于与项目业主方、监理方或相关项目总包方的沟通协调。",
          jobRequirements: "1、大专及以上学历，1年以上项目实施或管理经验；<br />2、良好的项目管理能力，具备较好的文档写作能力，熟悉项目实施到验收整个流程；<br />3、掌握SpringMVC、SpringBoot、Mybatis、MySql、JavaScript、VUE；<br />4、具备项目管理证书优先。",
          email: "ljz@zdams.cn"
        }
      ],
      modal: false,
      email: '',
      sendEmail: ''
    };
  },
  mounted(){
    var wow = new WOW();
    wow.init();
  },
  methods: {
    /** 显示模态窗 */
    showModal(item) {
      this.email = item.email
      this.sendEmail = "mailto:"+item.email+"?subject="+item.title+"面试简历&body=您好，附件中为本人简历，请查收，希望能有机会和贵公司进一步合作!"
      this.modal = true
    },
    /** 发送邮件 */
    sendEmailBtn() {
      document.getElementById("sendEmailA").click();
    }
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_job.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2{
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p{
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.zy-content{
  padding-left: 20px;
  margin-bottom: 10px;
}
.JobChance-container ol{
  list-style-type: decimal;
  padding-left: 30px;
}
.JobChance-container ol>li{
  font-size: 14px;
  line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
.zy-email {
  color: blue;
  cursor: pointer;
}
</style>

