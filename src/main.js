import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$version = "2023-04-21T11:33:19.167Z"
app.use(router)
app.mount('#app')
