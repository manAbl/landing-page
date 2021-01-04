import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faCaretDown,
  faBars,
  faPhoneAlt,
  faShoppingCart,
  faMapMarkerAlt,
  faArrowRight,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
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
  faFacebookF,
  faTwitter,
  faPinterest,
  faGooglePlusG,
  faArrowRight,
  faExchangeAlt,
  faEye
)
Vue.component('fa-icon', FontAwesomeIcon)
