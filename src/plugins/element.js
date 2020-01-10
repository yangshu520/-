import Vue from 'vue'
import {
    Button,
    Row,
    Col,
    Carousel,
    CarouselItem,
    Tabs,
    TabPane,
    Table,
    TableColumn,
    Input,
    Message,
    MessageBox,
    Dialog,
    Aside,
    Main,
    Container,
    Footer,
    Pagination,
    Breadcrumb,
    BreadcrumbItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Pagination).use(Breadcrumb).use(BreadcrumbItem)


Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm