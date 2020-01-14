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
                            <span class="left" v-if="active==0">校长室</span>
                            <span class="left" v-if="active==1">学工处</span>
                            <span class="left" v-if="active==2">教务处</span>
                            <span class="left" v-if="active==3">科研处</span>
                            <span class="left" v-if="active==4">办公室</span>
                            <div class="right">
                                <span>当前位置：</span>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==0">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/rector' }">行政机构</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/rector' }">校长室</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==1">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/learn' }">行政机构</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/learn' }">学工处</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==2">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/academic' }">行政机构</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/academic' }">教务处</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==3">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/research' }">行政机构</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/research' }">科研处</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==4">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/bureau' }">行政机构</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/jigou/bureau' }">办公室</el-breadcrumb-item>
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
                img:require('../../assets/images/2.png'),
                active:0,
                scData:[
                    {title:'校长室',path:'/jigou/rector'},
                    {title:'学工处',path:'/jigou/learn'},
                    {title:'教务处',path:'/jigou/academic'},
                    {title:'科研处',path:'/jigou/research'},
                    {title:'办公室',path:'/jigou/bureau'},
                ]
            }
        },
        mounted() {
            this.getTitle()
        },
        methods:{
            getTitle(){
                document.title='行政机构'
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