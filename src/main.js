import { createApp } from 'vue'
import store from '../store'
import router from './routes'

import i18n from './i18n'

import App from '@/App'

import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'
import 'balm-ui-css'

const app = createApp(App)

app.use(i18n)
app.use(BalmUI)
app.use(BalmUIPlus)
app.use(store)
app.use(router)

app.mount('#app')
