import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
Vue.config.productionTip = false

=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
>>>>>>> 8abbc2d (hh)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
