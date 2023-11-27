import  { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

createApp(App).use(router).mount('#app')
export var cart = reactive({prod: []})