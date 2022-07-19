import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {path:"/a",component:()=>import("../views/A/A.vue"),children:[
      {path:"aa",component:()=>import("../views/A/AA/AA"),name:"aaa"},
      {path:"ab",component:()=>import("../views/A/AB/AB"),name:"aab"}
    ]},
    {path:"/b",component:()=>import("../views/B/B.vue")},
    {path:"/c",component:()=>import("../views/C/C.vue")},
    {path:"/d",component:()=>import("../views/D/D.vue")},
    {path:"/",redirect:"b"}
  ]
})


