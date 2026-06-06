<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">公司简介</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow fadeInLeft">
                    <!-- <img class="img-responsive center-block" src="@/assets/img/about_img2.jpg"> -->
                    <img class="img-responsive center-block" src="static/company_introduction.webp">

                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 wow fadeInRight">
                    <p class="text-justify">公司简介</p>
                    <p>
                        中档信息集团有限公司，是一家专注于档案管理与科技创新的企业。公司秉持着创新驱动、技术引领的发展理念，致力于为客户提供全方位、高品质的整体档案信息化解决方案。
我们的核心团队由行业顶尖专家和技术精英组成，具备丰富的行业经验和深厚的技术造诣。公司注重技术研发与创新，持续投入大量资源进行前沿技术探索和应用研究。在档案管理领域，我们拥有多项自主研发的核心技术和专利，涵盖数字档案管理、智能检索、数据安全等关键环节。
                    </p>
                    <p class="text-justify">公司的技术实力体现在以下几个方面：</p>
                    <p>
                        1. 数字档案管理：通过数字化采集技术，存储技术，数据库技术，信息安全技术，数据压缩技术，元数据管理技术，OCR 技术，可视化技术及协同工作技术等，遵循相关标准和规范，确保数字档案的互操作性和可持续性。这些技术的应用使得数字档案管理更加高效、便捷、安全，同时也推动了档案管理的数字化转型。
                    </p>
                    <p>
                        2. 智能检索与分析系统：通过自然语言处理和机器学习技术，构建智能检索引擎，让用户能够快速、准确地找到所需信息。同时，利用数据挖掘和分析技术，为客户提供深入的数据洞察和决策支持。
                    </p>
                    <p>
                        3. 严格的数据安全防护：公司采用多重加密技术、权限管理和备份策略，确保客户档案数据的安全性和完整性。同时，建立了完善的安全监控和应急响应机制，及时应对各类安全威胁。 
                    </p>
                    <p>
                        4. 定制化软件开发能力：根据客户的特定需求，我们能够定制开发功能强大、操作简便的档案管理软件，实现与现有系统的无缝集成，提升工作效率和管理水平。
                    </p>
                    <p>凭借卓越的技术实力和专业的服务团队，中档集团已成功为众多知名企业、政府机构和社会组织提供了优质的档案管理服务，赢得了广泛的赞誉和信赖。未来，我们将继续紧跟行业发展趋势，不断创新，以先进的技术助力客户实现档案管理的数字化转型。

                    </p>
                </div>

                <NewIntroduce/>
                <!-- 新增资质相关证书 -->
                <!-- <div class="col-xs-12 col-sm-12 col-md-12 ">
                    <h2>资质证书</h2>
                    <div class="col-xs-12 col-sm-12 col-md-12 wow fadeInDown">
                        <img class="col-md-6 img-responsive" v-lazy="'static/1.webp'" alt="">
                        <img class="col-md-6 img-responsive" v-lazy="'static/0.webp'" alt="">
                    </div>
                    <h3>ISO证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12 wow zoomInLeft">
                        <img class="col-md-3 img-responsive" v-lazy="'static/2.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/3.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/4.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/5.webp'" alt="">
                    </div>

                    <h3>计算机软件著作权登记证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a1.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a2.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a3.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a4.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a5.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a6.webp'" alt="">
                    </div> 
                    <div class="col-xs-12 col-sm-12 col-md-12" style="margin-top: 10px;">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a7.webp'"  alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a8.webp'"  alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a9.webp'"  alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a10.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a11.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a12.webp'" alt="">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12" style="margin-top: 10px; margin-bottom: 10px;">                 
                        <img class="col-md-2 img-responsive" v-lazy="'static/a13.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a14.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a15.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a16.webp'" alt="">
                        <img class="col-md-2 img-responsive" v-lazy="'static/a17.webp'" alt="">
                    </div>

                    <h3>诚信证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b1.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b2.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b4.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b5.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b6.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b7.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/b8.webp'" alt="">

                        <img class="col-md-3 img-responsive" v-lazy="'static/b3.webp'" alt="">
                    </div>

                    <h3>软件测试报告</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-md-3 img-responsive" v-lazy="'static/c1.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/c2.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/c3.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/c4.webp'" alt="">
                    </div> 

                    <h3>税务荣誉证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-md-6 img-responsive" v-lazy="'static/d1.webp'" alt="">
                        <img class="col-md-6 img-responsive" v-lazy="'static/d2.webp'" alt="">
                    </div>

                    <h3>龙芯认证证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-md-3 img-responsive" v-lazy="'static/l1.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/l2.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/l3.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/l4.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/l5.webp'" alt="">
                        <img class="col-md-3 img-responsive" v-lazy="'static/l6.webp'" alt="">
                    </div>

                    <h3>鲲鹏认证证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/kunpeng.webp'" alt="">
                    </div>

                    <h3>浪潮认证证书</h3>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur1.webp'" alt="">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur2.webp'" alt="">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur3.webp'" alt="">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur4.webp'" alt="">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur5.webp'" alt="">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur6.webp'" alt="">
                        <img class="col-xs-3 img-responsive" v-lazy="'static/inspur7.webp'" alt="">
                    </div>
                </div> -->
            </div>
        </div>
    </div>

</template>
<script>
import { WOW } from 'wowjs';
import VueLazyload from 'vue-lazyload';
import NewIntroduce from './NewIntroduce.vue';
export default {
    name: 'CompanyIntroduction',
    components: { NewIntroduce },
    data() {
        return {
        };
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>

.banner{
    color: #3b4956;
    font-size: 30px;
    height: 200px;
    line-height: 150px;
    background-image: url('../assets/img/banner1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
/* 公司介绍字体样式 */
.CompanyIntroduction-container>div>p{
    font-size: 15px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}

/* 高新技术企业证书 */
#cert_main{
    margin-top: 20px;   
    width: 900px;
    height: auto;
}


</style>

