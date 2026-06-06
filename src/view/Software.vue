<template>
    <div id="Software" class="container product-detail-page">
        <div class="row product-detail-layout">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>
                        <span class="nav-eyebrow">Product Matrix</span>
                        <strong>软件产品</strong>
                    </p>
                    <li v-for="(item,index) in softwareList" :key="index" :class="item.id==id?'active':''" @click="switchTab(item)">
                        <span class="item-index">{{index + 1 < 10 ? '0' + (index + 1) : index + 1}}</span>
                        <span class="item-name">{{item.name}}</span>
                    </li>
                </ul>
                <div class="side-insight wow bounceInLeft">
                    <div class="insight-head">
                        <span>产品能力</span>
                        <strong>覆盖档案全流程</strong>
                    </div>
                    <div class="insight-visual product-visual">
                        <span>收集</span>
                        <span>管理</span>
                        <span>保存</span>
                        <span>利用</span>
                    </div>
                    <div class="insight-tags">
                        <span>标准规范吻合</span>
                        <span>国产化适配</span>
                        <span>多端部署支持</span>
                    </div>
                    <div class="insight-metrics">
                        <div>
                            <strong>4</strong>
                            <span>类产品矩阵</span>
                        </div>
                        <div>
                            <strong>OS</strong>
                            <span>系统适配</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right" class="col-md-8 col-xs-12 wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
            //起始id
            id: '002',
            softwareList: [
                // {
                //     id: '001',
                //     path: '/software/smartTown',
                //     name: 'WAMS档案综合管理系统'
                // },
                {
                    id: '002',
                    path: '/software/IMSF',
                    name: '档案综合管理软件'
                },
                {
                    id: '003',
                    path: '/software/EFMS',
                    name: '电子档案管理软件'
                },
                {
                    id: '004',
                    path: '/software/DAMS',
                    name: '数字档案管理软件'
                },
                {
                    id: '005',
                    path: '/software/TCAPRMS',
                    name: '干部人事档案管理软件'
                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
    methods: {
        /** 切换tab */
        switchTab(item) {
            this.id = item.id
            let route = {
                path: item.path,
                params: {}
            }
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
.product-detail-page {
    min-height: 500px;
    max-width: 1180px;
    padding: 44px 15px 64px;
}
.product-detail-layout {
    display: flex;
    align-items: flex-start;
}
#left {
    padding: 0 28px 0 0;
}
.left-container {
    width: 100%;
    margin: 0;
    padding: 18px;
    list-style: none;
    border: 1px solid rgba(34, 126, 207, .14);
    border-radius: 8px;
    background: linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);
    box-shadow: 0 18px 40px rgba(8, 45, 87, .1);
}
.left-container>p {
    margin: 0 0 14px;
    padding: 16px 18px;
    border-radius: 6px;
    color: #fff;
    background: linear-gradient(135deg, #0a4f98 0%, #1595dc 100%);
    box-shadow: 0 12px 24px rgba(21, 139, 214, .22);
}
.left-container strong {
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
    letter-spacing: 0;
    text-transform: uppercase;
}
.left-container>li {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 52px;
    margin: 8px 0 0;
    padding: 0 38px 0 16px;
    border: 1px solid rgba(20, 91, 160, .1);
    border-radius: 6px;
    color: #34506a;
    background: rgba(255,255,255,.78);
    cursor: pointer;
    transition: all .22s ease;
}
.left-container>li:after {
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
.left-container>li:hover {
    color: #0a61ad;
    border-color: rgba(21, 149, 220, .35);
    transform: translateX(3px);
    box-shadow: 0 10px 24px rgba(18, 105, 181, .1);
}
.left-container>li.active,
.left-container>li.active:hover {
    color: #fff;
    border-color: transparent;
    background: linear-gradient(135deg, #0d63b5 0%, #20a7dc 100%);
    box-shadow: 0 12px 26px rgba(22, 132, 210, .22);
}
.left-container>li.active:after {
    opacity: .9;
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
.side-insight {
    margin-top: 16px;
    padding: 18px;
    border: 1px solid rgba(28, 111, 184, .12);
    border-radius: 8px;
    background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
    box-shadow: 0 16px 34px rgba(8, 45, 87, .07);
}
.insight-head {
    position: relative;
    padding-left: 12px;
}
.insight-head:before {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 3px;
    width: 3px;
    border-radius: 3px;
    background: #1aa6c9;
}
.insight-head span {
    display: block;
    color: #5d7892;
    font-size: 12px;
    font-weight: 700;
}
.insight-head strong {
    display: block;
    margin-top: 4px;
    color: #173b5c;
    font-size: 18px;
    line-height: 1.35;
}
.insight-visual {
    position: relative;
    display: block;
    margin: 18px 0 16px;
    padding: 4px 0 4px 18px;
}
.insight-visual:before {
    content: "";
    position: absolute;
    left: 5px;
    top: 18px;
    bottom: 18px;
    width: 1px;
    background: rgba(26, 166, 201, .24);
}
.insight-visual span {
    position: relative;
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 8px;
    padding: 0 12px;
    border: 1px solid rgba(28, 111, 184, .1);
    border-radius: 5px;
    color: #274b68;
    font-size: 13px;
    font-weight: 700;
    background: rgba(255,255,255,.9);
}
.insight-visual span:before {
    content: "";
    position: absolute;
    left: -17px;
    width: 9px;
    height: 9px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #1aa6c9;
    box-shadow: 0 0 0 3px rgba(26, 166, 201, .12);
}
.insight-visual span:last-child {
    margin-bottom: 0;
}
.insight-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}
.insight-tags span {
    padding: 5px 9px;
    border-radius: 5px;
    color: #2f607f;
    font-size: 12px;
    font-weight: 700;
    background: #eef6fb;
}
.insight-metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 16px;
}
.insight-metrics div {
    padding: 12px 10px;
    border-radius: 6px;
    background: #f8fbfe;
    border: 1px solid rgba(28, 111, 184, .1);
}
.insight-metrics strong {
    display: block;
    color: #0f5d9e;
    font-size: 20px;
    line-height: 1;
}
.insight-metrics span {
    display: block;
    margin-top: 6px;
    color: #60758a;
    font-size: 12px;
}
#right {
    padding: 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 18px 42px rgba(8, 45, 87, .08);
    overflow: hidden;
}
#right >>> img {
    display: block;
    width: 100% !important;
    max-width: 100%;
    height: auto;
}
@media screen and (max-width: 991px) {
    .product-detail-layout {
        display: block;
    }
    #left {
        padding: 0;
        margin-bottom: 20px;
    }
}
@media screen and (max-width: 768px) {
    .product-detail-page {
        padding: 24px 15px 42px;
    }
    .left-container {
        padding: 12px;
    }
    .left-container>p {
        padding: 14px 16px;
    }
    .left-container strong {
        font-size: 20px;
    }
    .left-container>li {
        min-height: 48px;
        padding-right: 34px;
    }
    .side-insight {
        margin-top: 14px;
        padding: 14px;
    }
}
</style>

