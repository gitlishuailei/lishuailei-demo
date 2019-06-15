import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/login";
import Home from "../components/home/home.vue";
import Index from "../components/home/components/welcome.vue";
import My from "../components/home/components/my.vue";
import store from "../store";
import cookie from "js-cookie";
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        requireAuth:true
      },
        children:[
          {
            path:"/my",
            name:"my",
            component:My,
            meta:{
              requireAuth:true
            }
          },
          {
            path:"/index",
            name:"index",
            component:Index,
            meta:{
              requireAuth:true
            }
          }
        ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  var user = cookie.get("user");
  console.log(user+"----------------");
  if(to.meta.requireAuth){
      if(user!=""&&typeof(user)!="undefined"){
        next();
      }else{
        next("/login");
      }

  }else{
    next();
  }
})

export default router;
