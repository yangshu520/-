<template>
    <div>
        <el-table :data="tabDate" :row-class-name="tableRowClassName" border @cell-click="tabClick">
            <el-table-column label="序号" type="index" width="50" align='center'></el-table-column>
            <el-table-column property="name" label="姓名" align='center'></el-table-column>
            <el-table-column property="sex" label="性别" align='center'></el-table-column>
            <el-table-column prop="ywscore" label="语文成绩" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '语文成绩'">
                        <el-input v-model="scope.row.ywscore" @blur="inputBlur"/>
                    </span>
                    <span v-else>{{ scope.row.ywscore }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="sxscore" label="数学成绩" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '数学成绩'">
                        <el-input v-model="scope.row.sxscore" @blur="inputBlur"/>
                    </span>
                    <span v-else>{{ scope.row.sxscore }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="yuscore" label="英语成绩" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.index === tabClickIndex && tabClickLabel === '英语成绩'">
                        <el-input type="number" v-model="scope.row.yuscore" @blur="inputBlur"/>
                    </span>
                    <span v-else>{{ scope.row.yuscore }}</span>
                </template>
            </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabClickIndex: null, // 点击的单元格
                tabClickLabel: '', // 当前点击的列名
                tabDate:[
                    {id:1,name:'张三',sex:'男',ywscore:88,sxscore:90,yuscore:76},
                    {id:2,name:'李四',sex:'女',ywscore:88,sxscore:90,yuscore:76},
                    {id:3,name:'王五',sex:'男',ywscore:88,sxscore:90,yuscore:76},
                    {id:4,name:'张天爱',sex:'女',ywscore:88,sxscore:90,yuscore:76},
                    {id:5,name:'杜甫',sex:'男',ywscore:88,sxscore:90,yuscore:76},
                    {id:6,name:'李白',sex:'男',ywscore:88,sxscore:90,yuscore:76},
                    {id:7,name:'李晓娜',sex:'女',ywscore:88,sxscore:90,yuscore:76},
                    {id:8,name:'王一博',sex:'女',ywscore:88,sxscore:90,yuscore:76},
                    {id:9,name:'张小爱',sex:'女',ywscore:88,sxscore:90,yuscore:76},
                    {id:10,name:'肖战',sex:'男',ywscore:88,sxscore:90,yuscore:76},
                ],
                tablist:{
                    id:'',
                    ziduan:'',
                    value:''
                }
            }
        },
        methods: {
        tableRowClassName({ row, rowIndex }) {
            // 把每一行的索引放进row
            row.index = rowIndex
        },
        // 添加明细原因 row 当前行 column 当前列
        tabClick(row, column, cell, event) {
            this.tablist.id=row.id
            this.tablist.ziduan=column.property
            switch (column.label) {
                case '语文成绩':
                this.tabClickIndex = row.index
                this.tabClickLabel = column.label
                break
                case '数学成绩':
                this.tabClickIndex = row.index
                this.tabClickLabel = column.label
                break
                case '英语成绩':
                this.tabClickIndex = row.index
                this.tabClickLabel = column.label
                break
                default: return
            }
            },
            // 失去焦点初始化
            inputBlur(row, event, column) {
            this.tabClickIndex = null
            this.tabClickLabel = ''
            this.tablist.value=row.srcElement.value
            console.log(this.tablist)
            },
        },
        directives:{
            focus:{
                inserted:function(el){
                    el.focus()
                }
            }
        }
    }
</script>

<style scoped>
    
</style>