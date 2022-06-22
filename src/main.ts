import { plugin, defaultConfig } from '@formkit/vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faEllipsisV, faCheckCircle, faEye, faTrashCan, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueLoading from 'vue-loading-overlay'
import App from '@/App.vue'
import router from '@/router'
import 'vue-loading-overlay/dist/vue-loading.css'

const pinia = createPinia()

library.add(
  faStackOverflow,
  faSquare,
  faSquareCheck,
  faSearch,
  faEllipsisV,
  faCheckCircle,
  faEye,
  faTrashCan,
  faBeerMugEmpty,
)

const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(VueLoading)
  .use(plugin, defaultConfig)

app.mount('#app')
