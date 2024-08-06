import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import pinia from './store'
import router from './router'
import './scss/styles.scss' 

const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')