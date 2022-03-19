import { createApp } from 'vue'
import './assets/base.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(fas, far, fab)

createApp(App).component('fa', FontAwesomeIcon).mount('#app')
