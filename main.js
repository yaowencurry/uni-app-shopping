import Vue from 'vue'
import App from './App'
import './static/style/global.css'
import TopTitle from './pages/component/title/Title.vue'


Vue.component('top-title', TopTitle);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
