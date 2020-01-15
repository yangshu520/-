<template>
    <div>
        <div class="box">
            <div class="banner">
                <img src="https://www.heiyi666.cn/%E7%BB%84%205%20%281%29.png" alt="">
            </div>
            <div class="footer">
                <div class="footerbox1">
                    <div class="lunbo">
                        <el-carousel height="445px">
                            <el-carousel-item v-for="(item,index) in imgDate" :key="index">
                                <img :src="item.url" alt="" style="width:100%;height:100%">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <el-tabs type="border-card" class="login">
                        <el-tab-pane label="校园动态">
                            <div>
                                <div class="maxheight">
                                    <div class="left" v-for="(item,index) in dtDate" :key="index" @click="$router.push('/'+item.articleId)">
                                        <span class="left-l">{{item.articleTitle}}</span><span class="left-r">{{item.articleCreateTime.substr(0,10)}}</span>
                                    </div>
                                </div>
                                <div class="more">
                                    <span @click="$router.push('/school')" v-if="dtDate.length!==0">查看更多>></span>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="校园公告">
                            <div>
                               <div class="maxheight">
                                    <div class="left" v-for="(item,index) in xyDate" :key="index">
                                        <span class="left-l">{{item.articleTitle}}</span><span class="left-r">{{item.articleCreateTime.substr(0,10)}}</span>
                                    </div>
                                </div>
                                <div class="more">
                                    <span @click="$router.push('/school')" v-if="xyDate.length!==0">查看更多>></span>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <div class="rapidBox">
                        <div class="rapid">
                            <div class="fast"><span>快速通道</span></div>
                            <div class="recotr"><a href="javascript:;">校长信箱</a></div>
                            <div class="recotr"><a href="http://39.108.140.70:8080/login">学生入口</a></div>
                            <div class="recotr"><a href="http://39.108.140.70:8080/login">教师入口</a></div>
                            <div class="recotr"><a href="javascript:;">网上报名</a></div>
                        </div>
                        <div class="xingli">
                            <img src="https://www.heiyi666.cn/image/ctzx/index/xingli.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="footer-vido">
                    <el-tabs type="border-card" class="login-vedio">
                        <el-tab-pane label="学生风采">
                            <el-carousel height="470px">
                                <el-carousel-item v-for="(item,index) in videoDate" :key="index">
                                    <video id="video" width="100%" height="100%" controls>
                                        <source :src="item.url" type="video/mp4">
                                    </video>
                                </el-carousel-item>
                            </el-carousel>
                        </el-tab-pane>
                        <el-tab-pane label="领导风采">
                            <el-carousel height="470px">
                                <el-carousel-item v-for="(item,index) in videoDate" :key="index">
                                    <video id="video" width="100%" height="100%" controls>
                                        <source :src="item.url" type="video/mp4">
                                    </video>
                                </el-carousel-item>
                            </el-carousel>
                        </el-tab-pane>
                    </el-tabs>
                    <div class="footer-center">
                        <span class="shizi">师资力量</span>
                        <div class="jiaoshi">
                            <div class="jiaoshi-img" v-for="(item,index) in shiziDate" :key="index">
                                <div class="dingwei">
                                    <img :src="item.url" alt="" style="width:100%;height:100%">
                                    <span>{{item.title}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="xiaolie">
                            <div class="zhanshibox">
                                <div class="zhanshi" v-for="(item,index) in szDate" :key="index">
                                    <span class="sxliliang">{{item.articleTitle}}</span>
                                    <span class="right">{{item.articleCreateTime.substr(0,10)}}</span>
                                </div>
                            </div>
                            <div class="morezhanshi" v-if="szDate.length!==0"><span style="float:right">查看更多>></span></div>
                        </div>
                    </div>
                    <div class="footer-right">
                        <div style="width:100%;height:264px;border-radius: 20px;overflow: hidden;">
                            <div class="jianshe">党群建设</div>
                            <div class="xuanxiangbox">
                                <div class="xuanxiang" v-for="(item,index) in xuanxiang" :key="index" @click="$router.push('/parygroup/thoght/'+item.articleId)">
                                    <span class="shenglie">{{item.articleTitle}}</span>
                                    <span style="float:right;color:#999">{{item.articleCreateTime.substr(0,10)}}</span>
                                </div>
                            </div>
                            <div class="moreuexiang" v-if="xuanxiang.length!==0" @click="jianshe"><span>查看更多>></span></div>
                        </div>
                        <div style="width:100%;hegiht:230px;border-radius: 10px;overflow: hidden;margin-top:43px">
                            <div class="jianshe">教育科研</div>
                            <div class="keyanbox">
                                <div class="xuanxiang" v-for="(item,index) in keyanDate" :key="index">
                                    <span class="shenglie" @click="$router.push('/edu/item/'+item.articleId)">{{item.articleTitle}}</span>
                                    <span style="float:right;color:#999">{{item.articleCreateTime.substr(0,10)}}</span>
                                </div>
                                <div class="moreuexiang" v-if="keyanDate.length!==0"><span @click="$router.push('/edu/issue')">查看更多>></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-lianjie">
                    <div class="max">
                        <div class="min"><span>友情链接</span></div>
                    </div>
                    <div class="footer-img">
                        <a href="http://www.moe.gov.cn" target="_blank"><img style="width:245px;height:48px," src="https://www.heiyi666.cn/image/ctzx/index/5c1af19043216.jpg" alt=""></a>
                        <a href="http://www.gzsjsw.net" target="_blank"><img style="width:104px;height:48px" src="https://www.heiyi666.cn/image/ctzx/index/5c1af1597a915.jpg" alt=""></a>
                        <a href="http://www.gzsjyt.gov.cn" target="_blank"><img style="width:190px;height:48px" src="https://www.heiyi666.cn/image/ctzx/index/5c1af1f4e32de.jpg" alt=""></a>
                        <a href="http://jyj.guiyang.gov.cn/" target="_blank"><img style="width:198px;height:48px" src="https://www.heiyi666.cn/image/ctzx/index/5656b93a40204.png" alt=""></a>
                        <a href="http://www.zxxk.com" target="_blank"><img style="width:130px;height:48px" src="https://www.heiyi666.cn/image/ctzx/index/5048d60c54dd0.jpg" alt=""></a>
                        <a href="http://www.gzlib.org" target="_blank"><img style="width:201px;height:48px" src="https://www.heiyi666.cn/image/ctzx/index/5d80325f2770d.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgDate:[
                    {url:'https://www.heiyi666.cn//wx/imgfj%20%2845%29.jpg'},
                    {url:'https://www.heiyi666.cn//wx/imgfj%20%2864%29.jpg'},
                    {url:'https://www.heiyi666.cn//wx/imgfj%20%2835%29.jpg'},
                    {url:'https://www.heiyi666.cn//wx/imgfj%20%2864%29.jpg'},
                    {url:'https://www.heiyi666.cn//wx/imgfj%20%2825%29.jpg'},
                ],
                dtDate:[],
                xyDate:[],
                szDate:[],
                videoDate:[
                    {url:require('../../assets/video/4a26a1781f90e958730e343c3ee51acc.mp4')},
                    {url:require('../../assets/video/b2a45259cefbb8238367df4bd0d3e81f.mp4')},
                    {url:require('../../assets/video/d6afe9dc5a90fecbdeb24dee3e0a4fb6.mp4')},
                    {url:require('../../assets/video/f0d75f1918d9526d2e7bb38907a9ab5f.mp4')}
                ],
                shiziDate:[
                    {url:'https://www.heiyi666.cn/image/ctzx/index/undefined%20(6).jpg',title:'高级讲师'},
                    {url:'https://www.heiyi666.cn/image/ctzx/index/VCG21gic19988939.jpg',title:'初级讲师'},
                    {url:'https://www.heiyi666.cn/image/ctzx/index/VCG21260522468.jpg',title:'高级讲师'},
                    {url:'https://www.heiyi666.cn/image/ctzx/index/VCG41155773346.jpg',title:'特级讲师'},
                    {url:'https://www.heiyi666.cn/image/ctzx/index/VCG21eca472a3a.jpg',title:'高级讲师'},
                    {url:'https://www.heiyi666.cn/image/ctzx/index/eeee47b96.webp.jpg',title:'初级讲师'},
                ],
                xuanxiang:[],
                keyanDate:[],
                active:0
            }
        },
        mounted(){
            this.getlist();
            this.getTitle();
        },
        methods:{
            async getlist(){
                const {data:res}=await this.$http.get('/article/list',{params:{categoryId:49}});
                this.dtDate=res.data.rows
                const {data:xyDate}=await this.$http.get('/article/list',{params:{categoryId:50}});
                this.xyDate=xyDate.data.rows
                const {data:szDate}=await this.$http.get('/article/list',{params:{categoryId:51}});
                this.szDate=szDate.data.rows
                const {data:xuanxiang}=await this.$http.get('/article/list',{params:{categoryId:32}});
                this.xuanxiang=xuanxiang.data.rows
                const {data:keyanDate}=await this.$http.get('/article/list',{params:{categoryId:67}});
                this.keyanDate=keyanDate.data.rows
            },
            getTitle(){
                document.title='贞丰县长田中学'
            },
            jianshe(){
               this.$router.push('/parygroup/thought')
               this.active=2
            // this.$emit('activets',this.active)
            }
        }
    }
</script>

<style lang='less' scoped>
.box{
    background-color: #EEEEEE;
    min-width: 1580px;
}
.banner{
    width: 100%;
    height: 614px;
    border-radius: 0px 0px 6px 6px;
}
.banner img{
    width: 100%;
    height: 614px;
}
.footer{
    min-width: 1490px;
    margin-top: 15px;
    padding: 45px;
}
.footerbox1{
    width: 100%;
    min-width: 1500px;
    height: 445px;
}
.lunbo{
    width: 510px;
    height: 445px;
    border-radius: 20px;
    overflow: hidden;
    float: left;
}
.login{
    width: 476px;
    height: 445px;
    margin: 0 15px;
    display: inline-block;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    float: left;
}
.left{
    width: 100%;
    font-size: 14px;
    line-height: 47px;
    border-bottom: 1px solid rgba(238,238,238,1);
    float: left;
    cursor: pointer;
}
.left .left-l{
    display: inline-block;
    float: left;
    color: #494949;
    margin: 0 0 0 48px;
    max-width:314px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.left .left-r{
    float: right;
    right: 5px;
    margin-right: 20px;
    color: #999;
}
.more{
    font-size: 14px;
    line-height: 47px;
    color: #F3BE5E;
}
.more span{
    float: right;
    margin-right: 20px;
    cursor: pointer;
}
.rapidBox{
    width: 476px;
    height: 445px;
    float: left;
}
.rapid{
    width: 100%;
    height: 303px;
    background: url("https://www.heiyi666.cn/image/ctzx/index/kuangtu.png");
    background-size: 100% 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 13px;
}
.rapid .fast{
    width: 100%;
    height: 62px;
    border-bottom: 1px solid rgba(238,238,238,1);
    line-height: 62px;
}
.fast span{
    display: inline-block;
    margin-left: 52px;
    width: 75px;
    height: 16px;
    font-size: 12px;
    font-family: 'Source Han Serif SC';
    font-weight: 600;
    color: #494949;
    line-height: 16px;
}
.recotr{
    width: 366px;
    height: 45px;
    line-height: 45px;
    border: 1px solid rgba(55,100,169,1);
    border-radius: 10px;
    margin-left: 12%;
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Source Han Serif SC';
    color: rgba(55,100,169,1);
}
.recotr a{
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: rgba(55,100,169,1);
}
.recotr a:hover{
    color: #fff;
}
.recotr:hover{
    background-color: #3764A9;
}
.xingli{
    width: 476px;
    height: 129px;
    border-radius: 20px;
    overflow: hidden;
}
.xingli img{
    width: 100%;
    height: 100%;
}
.footer-vido{
    width: 100%;
    min-width: 1500px;
    margin: 50px 0;
    height: 533px;
}
.login-vedio{
    width: 510px;
    height: 533px;
    margin: 0;
    display: inline-block;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    float: left;
}
.footer-center{
    display: inline-block;
    height: 533px;
    width: 476px;
    float: left;
    margin: 0 15px;
}
.jiaoshi{
    width: 100%;
    height: 320px;
}
.footer-center .shizi{
    display: inline-block;
    height: 60px;
    width: 100%;
    color: #fff;
    background-color: #3764A9;
    font-size: 12px;
    font-family: 'Source Han Serif SC';
    text-align: center;
    line-height: 60px;
    border-radius: 20px;
}
.jiaoshi-img{
    width: 128px;
    height: 139px;
    float: left;
    margin: 24px 0 0 26px;
}
.dingwei{
    width: 128px;
    height: 139px;
    position: absolute;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    img{
        transition: all .5s ease-in-out;
    }
    img:hover{
        cursor: pointer;
        transform: scale(1.25,1.25);
    }
}
.jiaoshi-img span{
    display: inline-block;
    position: relative;
    top: -33px;
    font-family: 'Source Han Serif SC';
    font-size: 14px;
    color: #fff;
    width: 100%;
    height: 25px;
    text-align: center;
    line-height: 25px;
    background: rgba(0, 0, 0,0.2);
}
.xiaolie{
    width: 100%;
    height: 130px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    color: #333;
    font-size: 14px;
    font-family: 'Source Han Serif SC';
}
.zhanshibox{
    max-height: 90px;
    overflow: hidden;
}
.zhanshi{
    height: 43px;
    padding-left: 40px;
    padding-right: 15px;
    line-height: 43px;
    border-bottom: 1px  solid rgba(238,238,238,1);
    .sxliliang{
        max-width: 314px;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .right{
        float: right;
        color: #999999;
    }
}
.footer-lianjie{
    width: 100%;
    height: 200px;
}
.morezhanshi{
    padding-right: 15px;
    color: #efa51e;
    font-size: 14px;
    line-height: 40px;
    font-family: 'Source Han Serif SC';
    cursor: pointer;
}
.footer-right{
    width: 476px;
    height: 533px;
    float: left;
}
.jianshe{
    height: 60px;
    width: 100%;
    color: #fff;
    font-family: 'Source Han Serif SC';
    font-size: 12px;
    background-color: #3764A9;
    line-height: 60px;
    text-align: center;
}
.xuanxiangbox{
    max-height: 164px;
    overflow: hidden;
}
.xuanxiang{
    width: 446px;
    height: 40px;
    background-color: #fff;
    font-family: 'Source Han Serif SC';
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px  solid rgba(238,238,238,1);
    padding: 0 15px;
}
.shenglie{
    float: left;
    width: 314px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.shenglie:hover{
    color: #9C0100;
    cursor: pointer;
}
.moreuexiang{
    width: 446px;
    line-height: 44px;
    padding: 0 15px;
    color: #efa51e;
    font-size: 14px;
    line-height: 40px;
    font-family: 'Source Han Serif SC';
    cursor: pointer;
    text-align: right;
    background-color: #fff;
}
.footer-lianjie .max{
    height: 50px;
    width: 100%;
    background-color: #9EB7F2;
}
.footer-lianjie .min{
    height: 100%;
    width: 220px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 15px;
    background-color: #5285F9;
    font-family: 'Source Han Serif SC';
    font-weight: 500;
}
.footer-img{
    height: 87px;
    padding: 55px 0 0;
    background-color: #fff;
}
.footer-img img{
    margin-left: 57px;
}
.maxheight{
    max-height: 337px;
    overflow: hidden;
}
.keyanbox{
    height: 164px;
    background-color: #fff;
    overflow: hidden;
}
</style>