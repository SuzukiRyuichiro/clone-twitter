import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHome, faHashtag, faBell, faEnvelope, faBookmark, faUser, faAngleDown, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)
library.add(faHome, faUserSecret, faHashtag, faBell, faEnvelope, faBookmark, faUser, faAngleDown, faCheck, faPlus)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
