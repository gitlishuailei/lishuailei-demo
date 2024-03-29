// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css'
import "./common/css/reset.css";
Vue.config.productionTip = false;
Vue.use(ElementUI); 


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
