import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import config from '@/config'
const title = config.title

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: title + '-首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: title + '-软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/IMSF'
            },
            {
              path: '/software/IMSF',
              name: 'softwareIMSF',
              component: resolve => require(['@/view/Software_IMSF'], resolve),
              meta: {
                title: '软件产品丨档案综合管理软件'
              }
            },
            {
              path: '/software',
              redirect: '/software/EFMS'
            },
            {
              path: '/software/EFMS',
              name: 'softwareEFMS',
              component: resolve => require(['@/view/Software_EFMS'], resolve),
              meta: {
                title: '软件产品丨电子档案管理软件'
              }
            },
            {
              path: '/software',
              redirect: '/software/DAMS'
            },
            {
              path: '/software/DAMS',
              name: 'softwareDAMS',
              component: resolve => require(['@/view/Software_DAMS'], resolve),
              meta: {
                title: '软件产品丨数字档案管理软件'
              }
            },
            {
              path: '/software',
              redirect: '/software/TCAPRMS'
            },
            {
              path: '/software/TCAPRMS',
              name: 'softwareTCAPRMS',
              component: resolve => require(['@/view/Software_TCAPRMS'], resolve),
              meta: {
                title: '软件产品丨干部人事档案管理软件'
              }
            }
          ]
        }, {
          path: '/solution',
          name: 'solution',
          component: resolve => require(['@/view/Solution'], resolve),
          meta: {
            title: title + '-解决方案'
          },
          children: [
            {
              path: '/solution',
              redirect: '/solution/DAS1'
            },
            {
              path: '/solution/DAS1',
              name: 'solutionDAS1',
              component: resolve => require(['@/view/Solution_DAS1'], resolve),
              meta: {
                title: '解决方案丨数字档案室解决方案'
              }
            },
            {
              path: '/solution',
              redirect: '/solution/DAS2'
            },
            {
              path: '/solution/DAS2',
              name: 'solutionDAS2',
              component: resolve => require(['@/view/Solution_DAS2'], resolve),
              meta: {
                title: '解决方案丨数字档案馆解决方案'
              }
            },
            {
              path: '/solution',
              redirect: '/solution/DRS'
            },
            {
              path: '/solution/DRS',
              name: 'solutionDRS',
              component: resolve => require(['@/view/Solution_DRS'], resolve),
              meta: {
                title: '解决方案丨数字资源服务解决方案'
              }
            },
            {
              path: '/solution',
              redirect: '/solution/PSRS'
            },
            {
              path: '/solution/PSRS',
              name: 'solutionPSRS',
              component: resolve => require(['@/view/Solution_PSRS'], resolve),
              meta: {
                title: '解决方案丨专业类解决方案'
              }
            },
            {
              path: '/solution',
              redirect: '/solution/TCAPAIS'
            },
            {
              path: '/solution/TCAPAIS',
              name: 'solutionTCAPAIS',
              component: resolve => require(['@/view/Solution_TCAPAIS'], resolve),
              meta: {
                title: '解决方案丨干部人事档案一体化解决方案'
              }
            },
            {
              path: '/solution',
              redirect: '/solution/AIDA'
            },
            {
              path: '/solution/AIDA',
              name: 'solutionAIDA',
              component: resolve => require(['@/view/Solution_AIDA'], resolve),
              meta: {
                title: '解决方案丨AI数字档案综合解决方案'
              }
            }
          ]
        },{
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: title + '-相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: title + '-新闻动态'
          }
        }, {
          path: '/newsinformationdetail',
          name: 'newsinformationdetail',
          component: resolve => require(['@/view/NewsInformationDetail'], resolve),
          meta: {
            title: title + '-新闻详情'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: title + '-公司介绍'
          }
        },
        {
          path: '/show',
          name: 'show',
          component: resolve => require(['@/view/Show'], resolve),
          meta: {
            title: title + '-案例展示'
          }
        },
        {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: title + '-工作机会'
          }
        },{
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: title + '-联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: title + '-相关服务'
          }
        }
      ]
    }
  ]
})
