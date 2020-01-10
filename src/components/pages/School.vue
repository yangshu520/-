<template>
    <div>
        <div class="box">
            <div class="banner">
                <img src="https://www.heiyi666.cn/image/wx/liuf/xuexiao.png" alt="">
            </div>
            <el-container>
                <el-aside width="205px">
                    <div class="select" v-for="(item,index) in scData" :key="index" @click="$router.push(item.path),active=index" :class="{current:active==index}">
                        <span>{{item.title}}</span>
                    </div>
                </el-aside>
                <el-main>
                    <div class="main">
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
                active:0,
                scData:[
                    {title:'学校概况',path:'/school/overview'},
                    {title:'校风校歌',path:'/school/song'},
                    {title:'历史沿革',path:'/school/history'},
                    {title:'办学理念',path:'/school/idea'},
                    {title:'学校领导',path:'/school/leadership'},
                    {title:'机构设置',path:'/school/setup'},
                    {title:'艺术走廊',path:'/school/art'},
                    {title:'荣誉之窗',path:'/school/honor'}
                ]
            }
        },
        mounted(){
            this.getTitle()
        },
        methods:{
            getTitle(){
                document.title='学校概况'
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
</style>