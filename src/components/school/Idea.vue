<template>
    <div>
        <div v-html="html"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                html:''
            }
        },
        created(){
            this.getArticle()
        },
        methods:{
            async getArticle(){
                const {data:res}=await this.$http.get('/article/list',{params:{categoryId:42}})
                const datas=res.data.rows;
                const jsda= datas[0];
                this.html=jsda.articleContent;
            }
        }
    }
</script>

<style lang="less" scoped>
</style>