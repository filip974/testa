import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
