import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import VeHistogramr from 'v-charts/lib/histogram.common'
import VeRing from 'v-charts/lib/ring.common'
import VeLine from 'v-charts/lib/line.common'

Vue.component(VeHistogramr.name, VeHistogramr)
Vue.component(VeRing.name, VeRing)
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
