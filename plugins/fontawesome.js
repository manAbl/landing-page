import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faCaretDown,
  faBars,
  faPhoneAlt,
  faShoppingCart,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faInstagram,
  faTwitter,
  faPinterest,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faSearch,
  faCaretDown,
  faBars,
  faHeart,
  faShoppingCart,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faInstagram,
  faTwitter,
  faPinterest,
  faGooglePlusG
)
Vue.component('fa-icon', FontAwesomeIcon)
