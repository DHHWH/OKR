import Vue from "vue";
import VueRouter from "vue-router";
/* 引入页面的路由 */
import allToBeDone from "@/pages/OKR/allToBeDone.vue";
import assit from "@/pages/OKR/assit.vue"
import data from "@/pages/OKR/data.vue"
import myMessage from '@/pages/OKR/myMessage.vue'
import myOKR from '@/pages/OKR/myOKR.vue'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import createProject from '@/pages/createProject'
import projectHome from '@/pages/projectHome'
import projectSon from '@/pages/projectSon'
import searchAssits from '@/pages/serachAssits'
import resume from '@/pages/resume'
import projectDetail from '@/pages/projectDetail'
import investmentDetail from '@/pages/investmentDetail'
import classList from '@/pages/classList'
import news from '@/pages/news'
import proposalList from '@/pages/proposalList'
import createProposal from '@/pages/createProposal'
import allProposal from '@/pages/allProposal'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            name: "alltobedone",
            path: "/alltobedone",
            component: allToBeDone,
            meta:{show:true}
        },
        {
            name: "assit",
            path: "/assit",
            component: assit,
            meta:{show:true}
        },
        {
            name: "data",
            path: "/data",
            component: data,
            meta:{show:true}
        },
        {
            name: "mymessage",
            path: "/mymessage",
            component: myMessage,
            meta:{show:true}
        },
        {
            name: "myokr",
            path: "/myokr",
            component: myOKR,
            meta:{show:true}
        },
        {
            name: "login",
            path: "/login",
            component: Login,
            meta:{show:false}
        },
        {
            name: "register",
            path: "/register",
            component: Register,
            meta:{show:false}
        },
        {
            name: "home",
            path: "/home",
            component: Home,
            meta:{show:false}
        },
        {
            name: "createproject",
            path: "/createproject",
            component: createProject,
            meta:{show:false}
        },
        {
            name: "projecthome",
            path: "/projecthome",
            component: projectHome,
            meta:{show:false}
        },
        {
            name: "projectson",
            path: "/projectson",
            component: projectSon,
            meta:{show:false}
        },
        {
            name: "searchassits",
            path: "/searchassits",
            component: searchAssits,
            meta:{show:false}
        },
        
        {
            name: "resume",
            path: "/resume",
            component: resume,
            meta:{show:false}
        },
        {
            name: "projectdetail",
            path: "/projectdetail",
            component: projectDetail,
            meta:{show:false}
        },
        {
            name: "investmentdetail",
            path: "/investmentdetail",
            component: investmentDetail,
            meta:{show:false}
        },
        {
            name: "classlist",
            path: "/classlist",
            component: classList,
            meta:{show:false}
        },
        {
            name: "news",
            path: "/news",
            component: news,
            meta:{show:false}
        },
        {
            name: "proposallist",
            path: "/proposallist",
            component: proposalList,
            meta:{show:false}
        },
        {
            name: "createproposal",
            path: "/createproposal",
            component: createProposal,
            meta:{show:false}
        },
        {
            name: "allproposal",
            path: "/allproposal",
            component: allProposal,
            meta:{show:false}
        },

        {
            path: "*",
            redirect: '/home'
        }
    ],
}) 