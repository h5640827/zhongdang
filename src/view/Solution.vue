<template>
    <div id="Solution" class="container">
        <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>解决方案</p>
                    <li v-for="(item,index) in solutionList" :key="index" :class="item.id==id?'active':''" @click="switchTab(item)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Solution',
    data(){
        return{
            id: '001',
            solutionList: [
                {
                    id: '001',
                    path: '/solution/DAS1',
                    name: '数字档案室解决方案'
                },
                {
                    id: '002',
                    path: '/solution/DAS2',
                    name: '数字档案馆解决方案'
                },
                {
                    id: '003',
                    path: '/solution/DRS',
                    name: '数字资源服务解决方案'
                },
                {
                    id: '004',
                    path: '/solution/PSRS',
                    name: '专业类档案解决方案'
                },
                {
                    id: '005',
                    path: '/solution/TCAPAIS',
                    name: '干部人事档案一体化解决方案'
                },
                {
                    id: '006',
                    path: '/solution/AIDA',
                    name: 'AI数字档案综合解决方案'
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
#left{
    margin: 50px 0;
}
.container {
    min-height: 500px;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
    text-align: center;
    height: 38px;
    line-height: 38px;
    margin: 0;
    border-top: 1px solid #474747;
    cursor: pointer;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li.active,
.left-container>li.active:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
</style>

