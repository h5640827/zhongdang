<template>
    <div id="content">
        <Row>
            <i-col span="2">&nbsp;</i-col>
            <i-col span="20">
                <Card>
                    <p slot="title">
                        {{item.title}}
                    </p>
                    <a href="#" slot="extra" @click.prevent="returnBackPage">
                        返回
                    </a>
                    <p style="text-align:center;">{{item.year}}-{{item.date}}</p>
                    <p v-html="item.content">
                    </p>
                </Card>
            </i-col>
            <i-col span="2">&nbsp;</i-col>
        </Row>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformationDetail',
    data(){
        return{
            id: null,
            item: {
                id: '001',
                title: '公司成立',
                introduce: '公司成立',
                content: '<p>扬帆起航</p>',
                date: '09-04',
                year: '2020'
            }
        }
    },
    mounted(){
        this.id = this.$route.params.id
    },
    methods: {
        /** 返回上一页 */
        returnBackPage() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#content {
    min-height: 500px;
    padding-top: 10px;
}
</style>

