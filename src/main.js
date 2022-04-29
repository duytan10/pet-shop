import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/styles/index.scss'

import { library } from "@fortawesome/fontawesome-svg-core"

import { faBasketShopping, faMagnifyingGlass, faPhone, faPaw } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faBasketShopping, faMagnifyingGlass, faPhone, faPaw)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
