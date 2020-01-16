<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="phone"><span>联系电话：800-8526-9950</span></div></el-col>
    </el-row>
    <div class="top">
      <div class="logo">
          <img src="https://www.heiyi666.cn/image/ctzx/index/biaozhi.png" />
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item,i) in navDate" :key="i" @click="getActive(item.path,i)" :class="{current:active===i}">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="img7"><img src="https://www.heiyi666.cn/image/ctzx/index/xiaohui.png" alt=""></div>
      <div class="h1">|</div>
      <div class="text11"><p>版权所有：贞丰县长田中学</p><p>学校邮编：550025</p></div>
      <div class="h1">|</div>
      <div class="text22"><p>学校地址：贵阳市贵安新区产业园</p><p>学校邮箱：changtianzhongxue@163.con</p></div>
      <div class="h1">|</div>
      <div class="text33"><p>备案信息：黔xsw备0859621012号-1</p><p>贵公网安备 52011502000139号</p></div>
      <div class="img8"><img src="https://www.heiyi666.cn/image/ctzx/index/beianbgs.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active:0,
        footer:0,
        navDate:[
          {name:'首 页',path:'/home'},
          {name:'学校概况',path:'/school'},
          {name:'党群建设',path:'/partygroup'},
          {name:'行政机构',path:'/jigou'},
          {name:'教育科研',path:'/edu'},
          {name:'校务公开',path:'/gongkai'},
          {name:'学生天地',path:'/student'},
          {name:'最新动态',path:'/news'},
        ]
      }
    },
    mounted(){
      window.addEventListener('load', () => { // 滚动事件变为 scroll
        if (this.$route.path !== '/home') { // /print 表示首页
          this.$router.replace('/home') // 切换到首页
        }
      })
    },
    methods:{
      getActive(item,i){
        this.$router.push(item)
        this.active=i;
      },
    },
  }
</script>

<style lang="css" scoped>
.phone{
  position: absolute;
  width: 100%;
  height: 16px;
  background: rgba(238,238,238,1);
  text-align: right;
  font-size: 12px;
  color: #999;
  line-height: 16px;
  z-index: -999;
}
.phone span{
  position: relative;
  right: 35px;
}
.top{
  display: flex;
  width: 100%;
  min-width: 1500px;
}
.logo{
  display: 1;
  width: 152px;
  height: 62px;
}
.logo img{
  width: 100%;
  height: 100%;
}
ul{
  padding: 0;
  margin: 16px 0 0 0;
}
ul li{
  list-style: none;
  float: left;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  font-family: 'Source Han Serif SC';
  background-color: #fff;
  height: 46px;
  line-height: 46px;
  text-align: center;
  cursor: pointer;
  margin: 0 56px;
  box-sizing: border-box;
}
.current{
    border-top: solid 2.25px #5C80B9;
    border-bottom: solid 2.25px #5C80B9;
    color: #5C80B9;
}
.footer{
  min-width: 1500px;
  height: 166px;
  display: flex;
  color: #9D9D9D;
}
.footer .img7{
  margin: 20px 0 0 140px;
}
.footer .img7 img{
  width: 130px;
  height: 132px;
}
.footer .h1{
  margin: 70px 0 0 73px;
  font-size: 27px;
}
.footer .text11 {
    min-width: 144px;
    height: 20px;
    margin-top: 70px;
    margin-left: 75px;
    font-size: 12px;
    font-family: 'Source Han Serif SC';
    font-weight: 600;
    line-height: 20px;
}
p{
  margin: 0 0 15px;
  padding: 0;
}
.footer .text22 {
    min-width: 240px;
    height: 20px;
    font-size: 12px;
    margin-left: 117px;
    margin-top: 70px;
    font-family: 'Source Han Serif SC';
    font-weight: 600;
    line-height: 20px;
}
.footer .text33 {
    min-width: 207px;
    height: 20px;
    font-size: 12px;
    margin-left: 97px;
    margin-top: 70px;
    font-family: 'Source Han Serif SC';
    font-weight: 600;
    line-height: 20px;
}
.footer .img8 img {
    width: 32px;
    height: 35px;
    margin-left: 64px;
    margin-top: 74px;
}
</style>