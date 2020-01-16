<template>
    <div> 
        <div class="title">{{title}}</div>
        <div class="top">
            <span class="center">来源：校园新闻</span>
            <span class="left">作者：{{auther}}</span>
            <span class="right">发布时间：{{time}}</span>
        </div>
        <div v-html="content" class="content"></div>
        <div class="footer">
            <div class="ceil" v-show="floor">上一篇:<span @click="ceils">{{floor}}</span></div>
            <div class="floor" v-show="ceil">下一篇:<span @click="floors">{{ceil}}</span></div>
            <div class="footer-right" @click="callback">
                <span>回到顶部</span>
                <i class="el-icon-upload2"></i>
            </div>
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
                auther:'',
                ceil:'',
                floor:'',
                ceilId:'',
                floorId:''
            }
        },
        props:["id"],
        created(){
            this.getcontent();
            this.getId()
        },
        methods:{
            getId(){
                this.ceilId=this.id-1
                this.floorId=this.id-0+1
            },
           async getcontent(){
                const {data:res}=await this.$http.get('/article/list',{params:{articleId:this.id}})
                this.title=res.data.rows[0].articleTitle;
                this.content=res.data.rows[0].articleContent;
                this.auther=res.data.rows[0].auther;
                this.time=res.data.rows[0].articleCreateTime.substring(0,10)
                const {data:ceil}=await this.$http.get('/article/list',{params:{articleId:this.id-0+1}})
                if(ceil.data.total==1){
                    this.ceil=ceil.data.rows[0].articleTitle;
                }
                const {data:floor}=await this.$http.get('/article/list',{params:{articleId:this.id-1}})
                if(ceil.data.total==1){
                    this.floor=floor.data.rows[0].articleTitle;
                }
            },
            async floors(){
                this.$router.push('/edu/item/'+this.floorId)
                const {data:res}=await this.$http.get('/article/list',{params:{articleId:this.floorId}})
                this.title=res.data.rows[0].articleTitle;
                this.content=res.data.rows[0].articleContent;
                this.auther=res.data.rows[0].auther;
                this.time=res.data.rows[0].articleCreateTime.substring(0,10)
                this.animate(window,0)
            },
            async ceils(){
                this.$router.push('/edu/item/'+this.ceilId)
                const {data:res}=await this.$http.get('/article/list',{params:{articleId:this.ceilId}})
                this.title=res.data.rows[0].articleTitle;
                this.content=res.data.rows[0].articleContent;
                this.auther=res.data.rows[0].auther;
                this.time=res.data.rows[0].articleCreateTime.substring(0,10)
                this.animate(window,0)
            },
            callback(){
                this.animate(window,0)
            },
            animate(obj, target, callback) {
            // 先清除以前的定时器，只保留当前的一个定时器执行
                clearInterval(obj.timer);
                obj.timer = setInterval(function() {
                    // 步长值写到定时器的里面
                    var step = (target - window.pageYOffset) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    if (window.pageYOffset == target) {
                        // 停止动画 本质是停止定时器
                        clearInterval(obj.timer);
                        // 回调函数写到定时器结束里面
                        callback && callback();
                    }
                    // obj.style.left = obj.offsetLeft + step + 'px';
                    window.scroll(0,window.pageYOffset + step);

                }, 30);
            }
        }
    }
</script>

<style lang="less" scoped>
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
    .top{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #999;
        font-size: 14px;
        font-family: '微软雅黑';
        color:#999;
        line-height: 50px;
        text-align: center;
        .left{
            margin:0 50px;
        }
    }
    .footer{
        width: 100%;
        height: 50px;
        border-top: 1px solid #999;
        font-size: 14px;
        font-family: '微软雅黑';
        color:#999;
        line-height: 50px;
        .ceil{
            float: left;
            span{
                margin-left: 10px;
            }
            span:hover{
                color: #0162B3;
                cursor: pointer;
            }
        }
        .floor{
            float: left;
            margin-left: 30px;
            span{
                margin-left: 10px;
            }
            span:hover{
                color: #0162B3;
                cursor: pointer;
            }
        }
        .footer-right{
            line-height: 50px;
            float: right;
            color: #333;
            span{
                margin-right: 5px;
            }
        }
        .footer-right:hover{
            color: #0162B3;
            cursor: pointer;
        }
    }
</style>