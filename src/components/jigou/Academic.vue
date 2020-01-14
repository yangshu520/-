<template>
    <div>
        <div class="thuoght" v-for="(item,index) in listData" :key="index" @click="$router.push('/jigou/item/'+item.articleId)">
            <div class="left">
                <span>{{item.articleTitle}}</span>
            </div>
            <div class="right">
                <span>{{item.articleCreateTime.substr(0,10)}}</span>
            </div>
        </div>
        <div class="pagina" v-if="this.total">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="pagenumChange"
            :current-page="params.pageNum"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="params.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total" background>
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
                    categoryId:64
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
            },
            //当条数发生变化时
            handleSizeChange(newSize){
                this.params.pageSize=newSize
                this.getList()
            }
        }
    }
</script>

<style lang="less" scoped>
.thuoght{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(238,238,238,1);
    color: #333333;
    font-size: 14px;
    font-family: 'SourceHanSerifSC-SemiBold';
    .left{
        float: left;
        width: 500px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    .right{
        float: right;
        padding-right: 30px;
    }
}
.pagina{
    margin-top: 15px;
    text-align: center;
}
</style>