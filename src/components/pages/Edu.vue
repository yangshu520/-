<template>
    <div>
        <div class="box">
            <div class="banner">
                <img :src="img" alt="">
            </div>
            <el-container>
                <el-aside width="205px">
                    <div class="select" v-for="(item,index) in scData" :key="index" @click="$router.push(item.path),active=index" :class="{current:active==index}">
                        <span>{{item.title}}</span>
                    </div>
                </el-aside>
                <el-main> 
                    <div class="main">
                        <div class="header-nav" separator-class="el-icon-arrow-right">
                            <span class="left" v-if="active==0">科研课题</span>
                            <span class="left" v-if="active==1">科研成果</span>
                            <span class="left" v-if="active==2">学生获奖</span>
                            <span class="left" v-if="active==3">学术动态</span>
                            <div class="right">
                                <span>当前位置：</span>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==0">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/issue' }">教育科研</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/issue' }">科研课题</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==1">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/achievement' }">教育科研</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/achievement' }">科研成果</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==2">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/award' }">科研教育</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/award' }">学生获奖</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==3">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/trend' }">科研教育</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/edu/trend' }">学术动态</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </div>
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
            <div class="footer-kongbai"></div>
        </div>
    </div>
</template>

<script>  
    export default {
        data() {
            return {
                img:require('../../assets/images/jiaoxue.png'),
                active:0,
                scData:[
                    {title:'科研课题',path:'/edu/issue'},
                    {title:'科研成果',path:'/edu/achievement'},
                    {title:'学生获奖',path:'/edu/award'},
                    {title:'学术动态',path:'/edu/trend'},
                ]
            }
        },
        mounted() {
            this.getTitle()
        },
        methods:{
            getTitle(){
                document.title='教育科研'
            }
        }
    }
</script>

<style lang='less' scoped>
.box{
    min-width: 1500px;
    height:100%;
    background-color: #eeeeee;
    .banner{
        width: 100%;
        height: 335px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .el-container{
        min-width: 1460px;
        margin: 30px 30px 0 30px;
        background-color: #fff; 
        .select{
            width: 100%;
            height: 50px;
            font-size: 12px;
            font-family: 'Source Han Serif SC';
            text-align: center;
            line-height: 50px;
            cursor: pointer;
            border-bottom: solid 1px rgba(238,238,238,1);
        }
        .el-aside{
            box-shadow: 4px 4px 10px 0px rgba(46,46,157,0.18);
            border-radius: 6px;
        }
    }
    .el-main{
        margin: 0 80px;
    }
    .footer-kongbai{
        height: 60px;
    }
}
.current{
    background-image: url('../../assets/images/xzzt.png');
    background-size: 100% 100%;
    color: #fff;
}
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
</style>