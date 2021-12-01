import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import 'echarts-liquidfill'

import VChart from "vue-echarts"


Vue.component('v-chart', VChart)

Vue.use(ElementUI);

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


