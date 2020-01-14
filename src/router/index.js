import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ( /* webpackChunkName:"school_home_shouye" */ '../components/Home.vue')
const Shouye = () =>
    import ( /* webpackChunkName:"school_home_shouye" */ '../components/pages/Shouye.vue')
const School = () =>
    import ( /* webpackChunkName:"school_home_shouye" */ '../components/pages/School.vue')
const Overview = () =>
    import ( /* webpackChunkName:"overview_song_history" */ '../components/school/Overview.vue')
const Song = () =>
    import ( /* webpackChunkName:"overview_song_history" */ '../components/school/Song.vue')
const History = () =>
    import ( /* webpackChunkName:"overview_song_history" */ '../components/school/History.vue')
const Idea = () =>
    import ( /* webpackChunkName:"idea_leadership_setup_art_honor" */ '../components/school/Idea.vue')
    // import Idea from '../components/school/Idea.vue'
const Leadership = () =>
    import ( /* webpackChunkName:"idea_leadership_setup_art_honor" */ '../components/school/Leadership.vue')
const Setup = () =>
    import ( /* webpackChunkName:"idea_leadership_setup_art_honor" */ '../components/school/Setup.vue')
const Art = () =>
    import ( /* webpackChunkName:"idea_leadership_setup_art_honor" */ '../components/school/Art.vue')
const Honor = () =>
    import ( /* webpackChunkName:"idea_leadership_setup_art_honor" */ '../components/school/Honor.vue')
const Partygroup = () =>
    import ( /* webpackChunkName:"partygroup_thought_organization_way_integrity" */ '../components/pages/Partygroup.vue')
const Thought = () =>
    import ( /* webpackChunkName:"partygroup_thought_organization_way_integrity" */ '../components/partygroup/Thought.vue')
const Organization = () =>
    import ( /* webpackChunkName:"partygroup_thought_organization_way_integrity" */ '../components/partygroup/Organization.vue')
const Way = () =>
    import ( /* webpackChunkName:"partygroup_thought_organization_way_integrity" */ '../components/partygroup/Way.vue')
const Integrity = () =>
    import ( /* webpackChunkName:"partygroup_thought_organization_way_integrity" */ '../components/partygroup/Integrity.vue')
const Bulid = () =>
    import ( /* webpackChunkName:"bulid_union_group" */ '../components/partygroup/Bulid.vue')
const Union = () =>
    import ( /* webpackChunkName:"bulid_union_group" */ '../components/partygroup/Union.vue')
const Group = () =>
    import ( /* webpackChunkName:"bulid_union_group" */ '../components/partygroup/Group.vue')
const Jigou = () =>
    import ( /* webpackChunkName:"jigou_edu_gongkai_student_news" */ '../components/pages/Jigou.vue')
const Rector = () =>
    import ( /* webpackChunkName:"rector_research_learn_bureau_academic" */ '../components/jigou/Rector.vue')
const Item = () =>
    import ( /* webpackChunkName:"rector_research_learn_bureau_academic" */ '../components/jigou/Item.vue')
const Learn = () =>
    import ( /* webpackChunkName:"rector_research_learn_bureau_academic" */ '../components/jigou/Learn.vue')
const Bureau = () =>
    import ( /* webpackChunkName:"rector_research_learn_bureau_academic" */ '../components/jigou/Bureau.vue')
const Research = () =>
    import ( /* webpackChunkName:"rector_research_learn_bureau_academic" */ '../components/jigou/Research.vue')
const Academic = () =>
    import ( /* webpackChunkName:"rector_research_learn_bureau_academic" */ '../components/jigou/Academic.vue')

const Edu = () =>
    import ( /* webpackChunkName:"jigou_edu_gongkai_student_news" */ '../components/pages/Edu.vue')
const Gongkai = () =>
    import ( /* webpackChunkName:"jigou_edu_gongkai_student_news" */ '../components/pages/Gongkai.vue')
const Student = () =>
    import ( /* webpackChunkName:"jigou_edu_gongkai_student_news" */ '../components/pages/Student.vue')
const News = () =>
    import ( /* webpackChunkName:"jigou_edu_gongkai_student_news" */ '../components/pages/News.vue')
const Article = () =>
    import ( /* webpackChunkName:"article,though,ways" */ '../components/article/Article.vue')
const Though = () =>
    import ( /* webpackChunkName:"article,though,ways" */ '../components/article/Though.vue')
const Ways = () =>
    import ( /* webpackChunkName:"article,though,ways" */ '../components/article/Ways.vue')
const Integr = () =>
    import ( /* webpackChunkName:"integr,builds,unions,groups" */ '../components/article/Integr.vue')
const Builds = () =>
    import ( /* webpackChunkName:"integr,builds,unions,groups" */ '../components/article/Builds.vue')
const Unions = () =>
    import ( /* webpackChunkName:"integr,builds,unions,groups" */ '../components/article/Unions.vue')
const Groups = () =>
    import ( /* webpackChunkName:"integr,builds,unions,groups" */ '../components/article/Groups.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    redirect: '/home',
    children: [
        { path: '/home', component: Shouye },
        {
            path: '/school',
            component: School,
            redirect: '/school/overview',
            children: [
                { path: '/school/overview', component: Overview },
                { path: '/school/song', component: Song },
                { path: '/school/history', component: History },
                { path: '/school/idea', component: Idea },
                { path: '/school/leadership', component: Leadership },
                { path: '/school/setup', component: Setup },
                { path: '/school/art', component: Art },
                { path: '/school/honor', component: Honor },
            ]
        },
        {
            path: '/partygroup',
            component: Partygroup,
            redirect: '/parygroup/thought',
            children: [
                { path: '/parygroup/thought', component: Thought },
                { path: '/parygroup/organization', component: Organization },
                { path: '/parygroup/way', component: Way },
                { path: '/parygroup/integrity', component: Integrity },
                { path: '/parygroup/bulid', component: Bulid },
                { path: '/parygroup/union', component: Union },
                { path: '/parygroup/group', component: Group },
                { path: '/parygroup/organization/:id', component: Article, props: true },
                { path: '/parygroup/thoght/:id', component: Though, props: true },
                { path: '/parygroup/ways/:id', component: Ways, props: true },
                { path: '/parygroup/integrity/:id', component: Integr, props: true },
                { path: '/parygroup/bulid/:id', component: Builds, props: true },
                { path: '/parygroup/union/:id', component: Unions, props: true },
                { path: '/parygroup/group/:id', component: Groups, props: true },
            ]
        },
        {
            path: '/jigou',
            component: Jigou,
            redirect: '/jigou/rector',
            children: [
                { path: '/jigou/rector', component: Rector },
                { path: '/jigou/learn', component: Learn },
                { path: '/jigou/bureau', component: Bureau },
                { path: '/jigou/academic', component: Academic },
                { path: '/jigou/research', component: Research },
                { path: '/jigou/item/:id', component: Item, props: true }
            ]
        },
        {
            path: '/edu',
            component: Edu
        },
        {
            path: '/gongkai',
            component: Gongkai
        },
        {
            path: '/student',
            component: Student
        },
        {
            path: '/news',
            component: News
        },
    ]
}, ]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router