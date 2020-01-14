<template>
    <div>
       <div class="header-nav" separator-class="el-icon-arrow-right">
           <span class="left">廉政建设</span>
           <div class="right">
               <span>当前位置：</span>
               <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/parygroup/integrity' }">党群建设</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/parygroup/integrity' }">廉政建设</el-breadcrumb-item>
                </el-breadcrumb>
           </div>
       </div>
       <div class="title">{{title}}</div>
       <div v-html="content" class="content"></div>
       <div class="footer">
           <span class="left">作者：{{auther}}</span>
           <span class="right">发布时间：{{time}}</span>
       </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:'',
                content:'',
                time:'',
                auther:''
            }
        },
        props:["id"],
        created(){
            this.getcontent();
        },
        methods:{
           async getcontent(){
                const {data:res}=await this.$http.get('/article/list',{params:{articleId:this.id}})
                this.title=res.data.rows[0].articleTitle;
                this.content=res.data.rows[0].articleContent;
                this.auther=res.data.rows[0].auther;
                this.time=res.data.rows[0].articleCreateTime.substring(0,10)
            }
        }
    }
</script>

<style lang="less" scoped>
    .header-nav{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #0162B3;
        font-family: '微软雅黑';
        .left{
            font-size: 22px;
            color: #333;
            float: left;
        }
        .right{
            float:right;
            line-height: 50px;
            font-size: 14px;
            color: #222;
            span{
                float: left;
            }
            .el-breadcrumb{
                float:right;
                line-height: 50px;
            }
        }
    }
    .title{
        width:100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .content{
        text-indent: 2em;
    }
    .footer{
        width: 100%;
        height: 50px;
        margin-top: 20px;
        border-top: 1px solid #999;
        font-size: 14px;
        font-family: '微软雅黑';
        color:#999;
        line-height: 50px;
        .left{
            float: left;
        }
        .right{
            float: right;
        }
    }
</style>