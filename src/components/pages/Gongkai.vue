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
                            <span class="left" v-if="active==0">校园动态</span>
                            <span class="left" v-if="active==1">校园公告</span>
                            <span class="left" v-if="active==2">师资力量</span>
                            <span class="left" v-if="active==3">心理咨询</span>
                            <div class="right">
                                <span>当前位置：</span>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==0">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/moving' }">校务公开</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/moving' }">校园动态</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==1">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/bulletin' }">校务公开</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/bulletin' }">校园公告</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==2">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/advisory' }">校务公开</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/advisory' }">师资力量</el-breadcrumb-item>
                                </el-breadcrumb>
                                <el-breadcrumb separator-class="el-icon-arrow-right" v-if="active==3">
                                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/advisory' }">校务公开</el-breadcrumb-item>
                                    <el-breadcrumb-item :to="{ path: '/gongkai/advisory' }">心理咨询</el-breadcrumb-item>
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
                img:require('../../assets/images/gongkai.png'),
                active:0,
                scData:[
                    {title:'校园动态',path:'/gongkai/moving'},
                    {title:'校园公告',path:'/gongkai/bulletin'},
                    {title:'师资力量',path:'/gongkai/faculty'},
					// {title:'心里咨询',path:'/gongkai/advisory'},
                ]
            }
        },
        mounted() {
            this.getTitle()
        },
        methods:{
            getTitle(){
                document.title='校务公开'
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