import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios/request";
import cookie from "js-cookie";
Vue.use(Vuex);


let state = {
    //用户信息
    userInfo:JSON.parse(cookie.get("user")|''),
}



let actions = {
    handleUserLogin({commit},userInfo){
        axios.post("/api/index.php/index/wxapp.login/simple",userInfo)
        .then((data)=>{
            commit("handleUserLogin",data)
        })
    },
    handleUserlogOut({commit}){
        axios.get("/api/index.php/index/wxapp.login/quitweb?uid="+this.state.userInfo.uid,)
        .then((data)=>{
            commit("handleUserlogOut",data)
        })
    }
}

let mutations = {
    handleUserLogin(state,params){
        if(params.code==0){
            cookie.set("user",params.data);
            state.userInfo = params.data;
        }else{
            state.isLogin=false;
            state.userInfo = {};
        }

    },
    handleUserlogOut(state,params){
        if(params.code==0){
            cookie.remove("user");
        }
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;