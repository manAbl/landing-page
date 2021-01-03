import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faCaretDown,
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faSearch, faCaretDown, faBars, faHeart, faShoppingCart)
Vue.component('fa-icon', FontAwesomeIcon)
