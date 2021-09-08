import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/index"
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from "moment";


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.moment=moment

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
