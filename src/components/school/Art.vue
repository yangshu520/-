<template>
    <div>
        <div class="box" id="imglb">
        <div class="text">贞丰县长田中学艺术走廊</div>
        <div class="lbo">
            <div class="yisu" id="imglb">
                <!-- <i class="el-icon-arrow-left qiehuan" @click="shang()"></i> -->
                <div class="imgshow" :style="backimg"></div>
                <!-- <i class="el-icon-arrow-right qiehuan" @click="shang()"></i> -->
            </div>
            <div id="imglb" class="zpinfo">
                <div class="miaoshu">{{zpname}}</div>
                <ul class="zpname">
                    <li>作者：</li>
                    <li>{{banji}}</li>
                    <li>{{rname}}</li>
                    <li style="padding-left: 270px;">{{ssr}}</li>
                </ul>
            </div>
        </div>
        <div class="imgll">
            <i class="el-icon-arrow-left" @click="shang()"></i>
            <ul>
                <li>
                    <img v-for="(item,i) in lim" :style="item" v-bind:id="i" @click="clickImg()" :key="i">
                </li>
            </ul>
            <i class="el-icon-arrow-right" @click="xia()"></i>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               indexs: 0,
                backimg: "background-image: url(https://www.heiyi666.cn//wx/imgfj%20%2835%29.jpg);",
                lim: [
                    "background-image: url(https://www.heiyi666.cn//wx/imgfj%20%2845%29.jpg)",
                    "background-image: url(https://www.heiyi666.cn//wx/imgfj%20%2864%29.jpg);",
                    "background-image: url(https://www.heiyi666.cn//wx/imgfj%20%2835%29.jpg);",
                    "background-image: url(https://www.heiyi666.cn//wx/imgfj%20%2864%29.jpg);",
                    "background-image: url(https://www.heiyi666.cn//wx/imgfj%20%2825%29.jpg);"
                ],
                zpname: '<<春树下花粉>>',
                zpnames: ['<<春树下花粉>>', '<<赤瞳喵咪>>', '<<冬日的晚霞>>', '<<斗笠雨季>>', '<<雾霾>>'],
                rname: '赤红',
                rnames: ['澜山', '赤红', '好馋', '妖妖成仙', '星空下第一'],
                banji: '初二（一）班',
                banjis: ['初二（一）班', '初二（二）班', '初二（三）班', '初二（四）班', '初二（五）班'],
                ssr: '巨峡市一等奖',
                ssrs: ['荣获巨峡市一等奖', '荣获都匀市三等奖', '荣获蚩尤县二等奖', '荣获伏羲市二等奖', '荣获贵阳市二等奖']
            }
        },
        created(){
        },
        methods:{
            xia() {
                var srcimg = this.lim[this.indexs]
                if (this.indexs == 0) {
                    this.indexs = this.lim.length - 1;
                } else {
                    this.indexs--;
                    if (this.indexs = this.indexs) {
                        this.zpname = this.zpnames[this.indexs];
                        this.rname = this.rnames[this.indexs];
                        this.banji = this.banjis[this.indexs];
                        this.ssr = this.ssrs[this.indexs];
                    }
                }
                this.backimg = srcimg;
            },
            shang() {
                var srcimg = this.lim[this.indexs]
                if (this.indexs == this.lim.length - 1) {
                    this.indexs = 0;
                } else {
                    this.indexs++;
                    if (this.indexs = this.indexs) {
                        this.zpname = this.zpnames[this.indexs];
                        this.rname = this.rnames[this.indexs];
                        this.banji = this.banjis[this.indexs];
                        this.ssr = this.ssrs[this.indexs];
                    }
                }
                this.backimg = srcimg;
            },
            clickImg: function() {
                var imgzhi = event.currentTarget;
                if (imgzhi.id = imgzhi.id) {
                    this.backimg = this.lim[imgzhi.id];
                    this.zpname = this.zpnames[imgzhi.id];
                    this.rname = this.rnames[imgzhi.id];
                    this.banji = this.banjis[imgzhi.id];
                    this.ssr = this.ssrs[imgzhi.id];
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.box {
    width: 930px;
    margin: 0 auto;
}
        
.text {
    height: 19px;
    font-size: 20px;
    font-family: 'Source Han Serif SC';
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-top: 70px;
}

.yisu {
    width: 100%;
    height: 100%;
    margin-top: 97px;
    display: flex;
    flex-wrap: wrap;
    i{
        font-size: 25px;
        line-height: 96px;
        cursor: pointer;
    }
}

.qiehuan {
    width: 60px;
    height: 60px;
    margin-top: 150px;
}
.imgshow {
    width: 495px;
    height: 400px;
    border-radius: 6px;
    background-color: #FAEBD7;
    background-size: 100% 100%;
    margin: 0 120px;
}

.border-yua {
    margin-top: 150px;
    width: 60px;
    height: 60px;
    transform: rotateY(180deg);
}

li {
    list-style: none;
}

.butsty {
    height: 50px;
    width: 100px;
}

.zpname {
    display: inline-flex;
}

.zpinfo {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    .miaoshu{
        font-size: 10px;
        font-family: 'Source Han Serif SC';
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
    }
    ul li {
        font-size: 8px;
        font-family: Source Han Serif SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
    }
}
.lbo {
    height: 400px;
    padding: 0 97px;
}
.imgll {
    width: 70%;
    height: 100px;
    margin-top: 110px;
    display: flex;
    padding-left: 152px;
    ul{
        padding: 0;
    }
    ul img {
        width: 87px;
        height: 58px;
        border-radius: 6px;
        background-size: 100% 100%;
        background-color: sandybrown;
        margin: 0 15px;
    }
    i{
        font-size: 25px;
        line-height: 96px;
        cursor: pointer;
    }
}
</style>