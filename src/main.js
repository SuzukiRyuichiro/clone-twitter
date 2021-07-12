import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as faSolidHeart, faExternalLinkAlt, faRetweet, faPollH, faVideo, faUserSecret, faHome, faHashtag, faBell, faEnvelope, faBookmark, faUser, faAngleDown, faCheck, faPlus, faSearch, faEllipsisH, faBolt } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment, faSmile, faImage, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)
library.add(faSolidHeart, faHeart, faComment, faExternalLinkAlt, faRetweet, faCalendarAlt, faSmile, faPollH, faVideo, faHome, faUserSecret, faHashtag, faBell, faEnvelope, faBookmark, faUser, faAngleDown, faCheck, faPlus, faSearch, faEllipsisH, faBolt, faImage )

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
