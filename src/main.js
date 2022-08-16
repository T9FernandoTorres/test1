import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datav from 'datav-libs-dev'
//三个组件17.86k
//一个组件17.78k  没有按需加载变化并不大
createApp(App)
.use(store)
.use(router)
.use(datav)
.mount('#app')
