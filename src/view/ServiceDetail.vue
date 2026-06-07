<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">
      <span>相关服务</span>
      <p>围绕档案信息化建设提供专业服务支撑</p>
    </div>
    <div class="container service-detail-page">
      <div class="row service-detail-layout">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>
              <span class="nav-eyebrow">Service Menu</span>
              <strong>特色服务</strong>
            </p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
              @click="scrollToSection(item.id)"
            >
              <a href="javascript:;" @click.prevent>
                <span class="item-index">{{index + 1 < 10 ? '0' + (index + 1) : index + 1}}</span>
                <span class="item-name">{{item.title}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index" :id="item.id">
            <div class="content-head">
              <span class="content-eyebrow">SERVICE {{index + 1 < 10 ? '0' + (index + 1) : index + 1}}</span>
              <h2>{{item.title}}</h2>
              <p>{{item.summary}}</p>
            </div>
            <div class="service-grid">
              <div class="service-panel primary-panel">
                <h3>服务内容</h3>
                <p>{{item.description}}</p>
              </div>
              <div class="service-panel">
                <h3>核心能力</h3>
                <ul>
                  <li v-for="(point, pointIndex) in item.capabilities" :key="pointIndex">{{point}}</li>
                </ul>
              </div>
              <div class="service-panel">
                <h3>交付成果</h3>
                <ul>
                  <li v-for="(deliverable, deliverableIndex) in item.deliverables" :key="deliverableIndex">{{deliverable}}</li>
                </ul>
              </div>
              <div class="service-panel">
                <h3>适用场景</h3>
                <div class="tag-list">
                  <span v-for="(scene, sceneIndex) in item.scenes" :key="sceneIndex">{{scene}}</span>
                </div>
              </div>
            </div>
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
          title: "信息技术咨询服务"
        },
        {
          id: "section-4",
          title: "档案数字资源服务"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "系统定制开发",
          summary: "面向档案业务流程、管理规范和单位个性化要求，提供软件系统定制研发与功能扩展。",
          description: "围绕档案收集、整理、管理、保存、利用、统计、权限控制等核心环节，结合客户现有制度、组织架构和业务流程，定制符合档案行业标准与实际使用习惯的信息化系统。",
          capabilities: ["档案业务流程梳理与功能建模", "系统原型、权限体系与数据结构设计", "国产化环境与多端使用场景适配", "与现有系统的数据接口和功能扩展衔接"],
          deliverables: ["需求分析与建设方案", "定制化软件功能模块", "测试验收与部署文档", "后续迭代优化建议"],
          scenes: ["综合档案管理", "电子文件管理", "干部人事档案", "单位个性化流程"]
        },
        {
          id: "section-2",
          title: "信息系统集成服务",
          summary: "将档案业务系统、基础设施、数据资源和第三方平台有序衔接，形成稳定的一体化应用环境。",
          description: "针对已有系统分散、数据孤岛、流程割裂等问题，提供系统集成、接口联调、数据交换、权限认证和运行环境建设服务，提升档案信息系统的协同效率和稳定性。",
          capabilities: ["应用系统、数据库和存储资源集成", "统一身份、权限和组织架构对接", "数据交换、接口联调与迁移适配", "运行环境部署、调优和安全加固"],
          deliverables: ["系统集成实施方案", "接口与数据交换配置", "部署联调记录", "运行维护交接资料"],
          scenes: ["多系统互联", "档案平台升级", "数据迁移整合", "统一门户建设"]
        },
        {
          id: "section-3",
          title: "信息技术咨询服务",
          summary: "为档案数字化转型、系统建设和规范化管理提供前期规划、评估与实施路径建议。",
          description: "结合档案行业政策规范、单位信息化基础和未来建设目标，提供现状调研、需求规划、技术路线、建设预算、实施阶段划分和风险控制等咨询服务。",
          capabilities: ["档案信息化现状评估", "建设目标、范围和阶段规划", "标准规范适配与技术路线建议", "项目实施风险识别和改进建议"],
          deliverables: ["调研评估报告", "信息化建设规划", "技术路线与实施建议", "项目建设咨询材料"],
          scenes: ["数字档案室建设", "数字档案馆建设", "项目立项咨询", "企业数字化转型"]
        },
        {
          id: "section-4",
          title: "档案数字资源服务",
          summary: "提供档案整理、数字化加工、元数据著录和数字资源质量检查等服务，支撑档案资源长期利用。",
          description: "围绕纸质档案、电子文件和历史存量资源，提供整理分类、扫描加工、图像处理、目录著录、数据挂接、质量抽检和成果移交，帮助客户形成规范、可检索、可管理的档案数字资源。",
          capabilities: ["档案整理、分类与编号规范化", "扫描加工、图像处理与格式转换", "目录著录、元数据补录和数据挂接", "数字化成果质检、移交与备份"],
          deliverables: ["整理加工成果数据", "数字图像与目录数据", "质检记录与移交清单", "数字资源管理建议"],
          scenes: ["存量档案数字化", "电子文件归档", "目录数据治理", "档案资源检索利用"]
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id || "section-1";
    this.$nextTick(() => {
      this.scrollToSection(this.id, false);
    });
    var wow = new WOW();
    wow.init();
  },
  methods: {
    scrollToSection(id, smooth = true) {
      this.id = id;
      var target = document.getElementById(id);
      if (!target) return;
      var top = target.getBoundingClientRect().top + window.pageYOffset - 96;
      window.scrollTo({
        top: top,
        behavior: smooth ? "smooth" : "auto"
      });
    }
  }
};
</script>
<style scoped>
.banner {
  position: relative;
  color: #fff;
  min-height: 180px;
  padding: 48px 20px;
  background-image:
    linear-gradient(135deg, rgba(8, 27, 49, .86) 0%, rgba(13, 99, 181, .82) 100%),
    url("../assets/img/banner_service.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.banner span {
  display: block;
  font-size: 34px;
  font-weight: 800;
  line-height: 1.25;
}
.banner p {
  margin: 12px 0 0;
  color: rgba(255,255,255,.78);
  font-size: 15px;
}
.service-detail-page {
  max-width: 1180px;
  padding: 44px 15px 68px;
}
.service-detail-layout {
  display: flex;
  align-items: flex-start;
}
#myScrollspy {
  padding-right: 28px;
  position: sticky;
  top: 30px;
}
ul.nav-tabs {
  width: 100%;
  margin: 0;
  padding: 18px;
  border: 1px solid rgba(34, 126, 207, .14);
  border-radius: 8px;
  background: linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);
  z-index: 99;
  box-shadow: 0 18px 40px rgba(8, 45, 87, .1);
}
ul.nav-tabs p {
  margin: 0 0 14px;
  padding: 16px 18px;
  border-radius: 6px;
  color: #fff;
  background: linear-gradient(135deg, #0a4f98 0%, #1595dc 100%);
  box-shadow: 0 12px 24px rgba(21, 139, 214, .22);
}
ul.nav-tabs p strong {
  display: block;
  margin-top: 4px;
  font-size: 22px;
  line-height: 1.25;
}
.nav-eyebrow {
  display: block;
  color: rgba(255,255,255,.72);
  font-size: 11px;
  font-weight: 700;
}
ul.nav-tabs li {
  margin: 8px 0 0;
  border: 0;
}
ul.nav-tabs li a {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 52px;
  margin: 0;
  padding: 0 38px 0 16px;
  border: 1px solid rgba(20, 91, 160, .1);
  border-radius: 6px;
  color: #34506a;
  background: rgba(255,255,255,.78);
  text-decoration: none;
  transition: all .22s ease;
}
ul.nav-tabs li a:after {
  content: "";
  position: absolute;
  right: 16px;
  width: 7px;
  height: 7px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(45deg);
  opacity: .42;
  transition: all .22s ease;
}
ul.nav-tabs li a:hover {
  color: #0a61ad;
  border-color: rgba(21, 149, 220, .35);
  transform: translateX(3px);
  box-shadow: 0 10px 24px rgba(18, 105, 181, .1);
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  border-color: transparent;
  background: linear-gradient(135deg, #0d63b5 0%, #20a7dc 100%);
  box-shadow: 0 12px 26px rgba(22, 132, 210, .22);
}
.item-index {
  flex: 0 0 auto;
  color: inherit;
  font-size: 12px;
  font-weight: 700;
  opacity: .64;
}
.item-name {
  flex: 1;
  min-width: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
}
.content {
  padding: 0;
}
.content-block {
  margin: 0 0 28px;
  padding: 30px;
  border: 1px solid rgba(34, 126, 207, .12);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 42px rgba(8, 45, 87, .08);
}
.content-head {
  margin-bottom: 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(34, 126, 207, .12);
}
.content-eyebrow {
  display: inline-block;
  color: #0f74bd;
  font-size: 12px;
  font-weight: 700;
}
.content-head h2 {
  margin: 8px 0 10px;
  color: #173b5c;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.3;
}
.content-head p {
  max-width: 760px;
  margin: 0;
  color: #5f7183;
  font-size: 15px;
  line-height: 1.8;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.service-panel {
  padding: 18px;
  border: 1px solid rgba(34, 126, 207, .1);
  border-radius: 8px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbfe 100%);
}
.primary-panel {
  grid-column: 1 / -1;
  background:
    linear-gradient(135deg, rgba(245,250,255,.98) 0%, rgba(255,255,255,.98) 100%),
    radial-gradient(circle at 92% 10%, rgba(32,167,220,.16), transparent 34%);
}
.service-panel h3 {
  position: relative;
  margin: 0 0 12px;
  padding-left: 12px;
  color: #173b5c;
  font-size: 18px;
  font-weight: 800;
}
.service-panel h3:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 3px;
  width: 3px;
  border-radius: 3px;
  background: #1aa6c9;
}
.service-panel p {
  margin: 0;
  color: #5f7183;
  font-size: 14px;
  line-height: 1.9;
}
.service-panel ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.service-panel li {
  position: relative;
  padding: 7px 0 7px 18px;
  color: #456176;
  font-size: 14px;
  line-height: 1.6;
}
.service-panel li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 17px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #1aa6c9;
  box-shadow: 0 0 0 3px rgba(26,166,201,.12);
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag-list span {
  padding: 6px 10px;
  border-radius: 5px;
  color: #2f607f;
  font-size: 13px;
  font-weight: 700;
  background: #eef6fb;
}
@media screen and (max-width: 991px) {
  .service-detail-layout {
    display: block;
  }
  #myScrollspy {
    position: static;
    padding-right: 0;
    margin-bottom: 22px;
  }
}
@media screen and (max-width: 768px) {
  .banner {
    min-height: 150px;
    padding: 38px 18px;
  }
  .banner span {
    font-size: 28px;
  }
  .service-detail-page {
    padding: 28px 15px 46px;
  }
  ul.nav-tabs {
    padding: 12px;
  }
  .content-block {
    padding: 22px 18px;
  }
  .content-head h2 {
    font-size: 24px;
  }
  .service-grid {
    grid-template-columns: 1fr;
  }
  .primary-panel {
    grid-column: auto;
  }
}
</style>
