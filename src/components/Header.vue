<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span>15678898817
          <span class="glyphicon glyphicon-envelope"></span>{{config.email}}
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <!-- <span class="glyphicon glyphicon-hand-right"></span>赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span> -->
          <!-- <div class="glyphicon glyphicon-time"> -->
            <img class="wechat-search" src="@/assets/img/wechat_search.png" alt="微信公众号搜索">
          <!-- </div> -->
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logo_2_black323.png">
        <span>创享智慧档案</span>
      </div>

      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path">{{i.name}}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logo_2_black32.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import config from '@/config'
export default {
  name: "Header",
  data() {
    return {
      config: config,
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: []
        },
        {
          name: "软件产品",
          path: "/software",
          children: [
            // {
            //   name: "WAMS档案综合管理系统",
            //   path: "/software/smartTown"
            // },
            {
              name: "档案综合管理软件",
              path: "/software/IMSF"
            },
            {
              name: "电子档案管理软件",
              path: "/software/EFMS"
            },
            {
              name: "数字档案管理软件",
              path: "/software/DAMS"
            },
            {
              name: "干部人事档案管理软件",
              path: "/software/TCAPRMS"
            }
          ]
        },
        {
          name: "解决方案",
          path: "/solution",
          children: [
            {
              name: "数字档案室解决方案",
              path: "/solution/DAS1"
            },
            {
              name: "数字档案馆解决方案",
              path: "/solution/DAS2"
            },
            {
              name: "数字资源服务解决方案",
              path: "/solution/DRS"
            },
            {
              name: "专业类档案解决方案",
              path: "/solution/PSRS"
            },
            {
              name: "干部人事档案一体化解决方案",
              path: "/solution/TCAPAIS"
            },
            {
              name: "AI数字档案综合解决方案",
              path: "/solution/AIDA"
            }
          ]
        },
        {
          name: "相关服务",
          path: "/service",
          children: []
        },
        {
          name: "新闻动态",
          path: "/newsinformation",
          children: []
        },
        {
          name: "公司介绍",
          path: "/companyintroduction",
          children: []
        },
        {
          name: "案例展示",
          path: "/show",
          children: []
        },
        {
          name: "工作机会",
          path: "/jobchance",
          children: []
        },
        {
          name: "联系我们",
          path: "/contactus",
          children: []
        }
      ]
    };
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
#header {
  background: #fff;
  box-shadow: 0 12px 30px rgba(9, 34, 70, 0.08);
  position: relative;
  z-index: 1000;
  transition: all ease 0.4s;
}
#header .header-top {
  height: 42px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  line-height: 42px;
  background: linear-gradient(90deg, #0b1f3a 0%, #0f4c91 52%, #1684d8 100%);
}
#header .header-top span {
  color: #9bd7ff;
  margin: 0 7px 0 18px;
}
#header .header-top span:first-child {
  margin-left: 0;
}
#header .header-top .wechat-search {
  height: 32px;
  margin: 5px 0;
  opacity: 0.95;
}
#header .header-nav {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#header .header-nav .header-nav-logo {
  width: 280px;
  height: 72px;
  display: flex;
  align-items: center;
  float: none;
  position: relative;
}
#header .header-nav .header-nav-logo img {
  width: 92px;
  height: auto;
  position: static;
  margin: 0;
}
#header .header-nav .header-nav-logo span {
  width: auto;
  position: static;
  color: #0f65b8;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  margin-left: 16px;
  white-space: nowrap;
}
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 1;
  float: none;
  margin: 0;
  max-width: 880px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#header .header-nav .header-nav-wrapper > li {
  float: none;
  margin: 0 2px;
  position: relative;
}
#header .header-nav .header-nav-wrapper > li > a {
  color: #1f2d3d;
  display: block;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 10px;
  position: relative;
  border-radius: 4px;
  transition: all 0.25s ease;
  white-space: nowrap;
}
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: 7px;
  left: 50%;
  width: 0;
  height: 3px;
  opacity: 0;
  border-radius: 3px;
  transition: all 0.25s ease;
  background: linear-gradient(90deg, #1e73be, #2ec5ff);
}
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  margin-left: 4px;
  transition: transform ease 0.5s;
}
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  background: #eef7ff;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: calc(100% - 20px);
  left: 10px;
}
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #1e73be;
  background: #eef7ff;
  text-decoration: none;
  border-bottom: 0;
}
#header .header-nav .header-nav-wrapper > li.active > a .underline {
  opacity: 1;
  width: calc(100% - 20px);
  left: 10px;
}
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 220px;
  top: 100%;
  left: 0;
  z-index: 999999;
  padding: 8px;
  border: 1px solid rgba(30, 115, 190, 0.12);
  border-radius: 6px;
  box-shadow: 0 18px 36px rgba(9, 34, 70, 0.16);
  background: #fff;
}
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 0;
  border-bottom: 0;
}
#header .header-nav .header-nav-wrapper > li > dl > dt > a {
  color: #24364a;
  display: block;
  font-size: 14px;
  line-height: 1.5;
  padding: 10px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
}
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  color: #1e73be;
  background: #f1f8ff;
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
}
@media screen and (max-width: 997px) {
  #header {
    box-shadow: 0 8px 22px rgba(9, 34, 70, 0.1);
  }
  #header .header-nav-m {
    position: relative;
    background: #fff;
  }
  #header .header-nav-m .header-nav-m-logo {
    height: 72px;
    position: relative;
  }
  #header .header-nav-m .header-nav-m-logo img {
    width: 88px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 48px;
    font-size: 17px;
    font-weight: 600;
    line-height: 48px;
    background: linear-gradient(90deg, #0f4c91, #1684d8);
    position: relative;
  }
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 13px;
  }
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
    padding: 8px 14px 12px;
    background: rgba(11, 31, 58, 0.98);
    box-shadow: 0 14px 28px rgba(9, 34, 70, 0.22);
    z-index: 9999999;
  }
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    display: block;
    font-size: 15px;
    font-weight: 600;
    padding: 0;
    position: relative;
  }
  #header .header-nav-m .header-nav-m-wrapper > li.active > a,
  #header .header-nav-m .header-nav-m-wrapper > li > a:hover {
    color: #7fd4ff;
    text-decoration: none;
  }
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
