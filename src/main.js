import App from './App.vue'
import Default from '@/layouts/default/Default.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'

import { createHead } from '@vueuse/head'

const head = createHead()
const app = createApp(App)

app.component('LayoutDefault', Default)
app.use(head)
app.use(createPinia())
app.use(router)

app.mount('#app')
