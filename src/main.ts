import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faEllipsisV, faCheckCircle, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

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
)

const app = createApp(App)
  .use(router)
  .use(pinia)

app.mount('#app')
