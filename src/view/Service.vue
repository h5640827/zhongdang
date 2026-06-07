<template>
    <div id="Service">
        <div class="container service-heading text-center">
            <span class="section-eyebrow">Service Capability</span>
            <h3>我们的服务</h3>
            <p>围绕档案信息化建设，提供从系统研发到资源数字化的全流程服务能力</p>
        </div>
        <div class="container">
            <div class="Service-container row">
                <div class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
                v-for="(item,index) in serviceList" :key="index" @click="ServiceClick(item.id)">
                    <div class="Service-item-wrapper">
                        <div class="Service-item-top">
                            <h4>{{item.title}}</h4>
                            <i></i>
                            <p>{{item.eng_title}}</p>
                        </div>
                        <div class="Service-item-img">
                            <img :src="item.img" alt="服务">
                        </div>
                        <div class="Service-item-border"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'Service',
    data(){
        return{
            serviceList: [
                {
                    id: 'section-1',
                    title: '系统定制开发',
                    eng_title: 'System customization development',
                    img: require('@/assets/img/service/custom-development.png')
                },{
                    id: 'section-2',
                    title: '信息系统集成服务',
                    eng_title: 'Information systems integration services',
                    img: require('@/assets/img/service/system-integration.png')
                },{
                    id: 'section-3',
                    title: '信息技术咨询服务',
                    eng_title: 'Information technology consulting services',
                    img: require('@/assets/img/service/technology-consulting.png')
                },{
                    id: 'section-4',
                    title: '档案数字资源服务',
                    eng_title: 'Archive digital resource services',
                    img: require('@/assets/img/service/archive-digital-resource.png')
                }
            ]
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    },
    methods:{
        ServiceClick(id){
            this.$router.push({
                name: 'servicedetail',
                params: {
                    id: id
                }
            })
        }
    }
}
</script>
<style scoped>
#Service {
    padding: 54px 0 70px;
    background: linear-gradient(180deg, #f7fbff 0%, #ffffff 42%);
}
.service-heading {
    margin-bottom: 34px;
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
.service-heading h3 {
    margin: 10px 0;
    color: #173b5c;
    font-size: 34px;
    font-weight: 800;
    line-height: 1.25;
}
.service-heading p {
    max-width: 620px;
    margin: 0 auto;
    color: #62798f;
    font-size: 15px;
    line-height: 1.8;
}
.Service-container {
    padding: 12px 0 0;
}
.Service-item {
    margin-bottom: 30px;
}
.Service-item-wrapper {
    cursor: pointer;
    height: 100%;
    background: #fff;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(34, 126, 207, .12);
    border-radius: 8px;
    box-shadow: 0 16px 36px rgba(8, 45, 87, .08);
    transition: all .28s ease;
}
.Service-item-top {
    width: 100%;
    min-height: 136px;
    padding: 28px 24px 22px;
    text-align: left;
    background:
        linear-gradient(180deg, rgba(255,255,255,.98) 0%, rgba(245,250,255,.98) 100%),
        radial-gradient(circle at 86% 12%, rgba(32,167,220,.16), transparent 34%);
}
.Service-item-top h4 {
    margin: 0;
    color: #173b5c;
    font-size: 21px;
    font-weight: 800;
    line-height: 1.35;
}
.Service-item-top>i {
    display: inline-block;
    width: 34px;
    height: 2px;
    margin: 16px 0 12px;
    background: #1aa6c9;
}
.Service-item-top>p {
    min-height: 34px;
    margin: 0;
    color: #6b8195;
    font-size: 13px;
    line-height: 1.35;
    opacity: 1;
    transform: none;
    transition: color .28s ease;
}
.Service-item-img {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #eef6fb;
}
.Service-item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .5s ease;
}
.Service-item-border {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: linear-gradient(90deg, #0d63b5 0%, #20a7dc 100%);
    transition: opacity .28s ease;
    opacity: 0;
}
.Service-item-wrapper:hover {
    transform: translateY(-6px);
    border-color: rgba(26, 166, 201, .36);
    box-shadow: 0 24px 50px rgba(8, 45, 87, .14);
}
.Service-item-wrapper:hover .Service-item-top > p {
    color: #315f83;
}
.Service-item-wrapper:hover .Service-item-img > img {
    transform: scale(1.05);
}
.Service-item-wrapper:hover > .Service-item-border {
    opacity: 1;
}
@media screen and (max-width: 991px) {
    #Service {
        padding: 40px 0 46px;
    }
    .Service-container {
        padding: 6px 0 0;
    }
}
@media screen and (max-width: 768px) {
    .service-heading h3 {
        font-size: 28px;
    }
    .Service-item-top {
        min-height: auto;
        padding: 22px 20px 18px;
    }
}
</style>
