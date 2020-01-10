<template>
    <div>
        <div class="thuoght" v-for="(item,index) in listData" :key="index" @click="$router.push('/parygroup/thoght/'+item.articleId)">
            <div class="img">
                <img src="https://www.heiyi666.cn//wx/imgfj%20%2864%29.jpg" alt="">
            </div>
            <div class="left">
                <span>{{item.articleTitle}}</span>
            </div>
            <div class="right">
                <span>{{item.articleCreateTime.substr(0,10)}}</span>
            </div>
        </div>
        <div class="pagina" v-if="this.total">
            <el-pagination @current-change='pagenumChange' :current-page="params.pageNum" :page-size="params.pageSize" layout="prev, pager, next, jumper" :total="total" background>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                params:{
                    //显示的总条数每页
                    pageSize:10,
                    // 当前的页数
                    pageNum:1,
                    // 后端需要的id
                    categoryId:32
                },
                listData:[],
                total:0
            }
        },
        created(){
            this.getList()
        },
        methods:{
            async getList(){
               const {data:res}=await this.$http.get('/article/list',{params:this.params})
               if(res.code==200){
                   this.listData=res.data.rows
                   this.total=res.data.total
               }
            },
            //当页码发生变化时
            pagenumChange(newPage){
                this.params.pageNum=newPage
                this.getList()
            }
        }
    }
</script>

<style lang="less" scoped>
.thuoght{
    width: 100%;
    height: 160px;
    line-height: 160px;
    border-bottom: 1px solid rgba(238,238,238,1);
    color: #333333;
    font-size: 16px;
    font-family: 'SourceHanSerifSC-SemiBold';
    .img{
        float: left;
        height: 160px;
        padding-top: 31px;
        box-sizing: border-box;
        img{
            width:141px;
            height:97px;
            border-radius:10px;
        }
    }
    .left{
        float: left;
        width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 67px;
        cursor: pointer;
    }
    .right{
        float: right;
    }
}
.pagina{
    margin-top: 15px;
    text-align: center;
}
</style>