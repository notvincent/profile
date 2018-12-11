import VueAnalytics from 'vue-analytics'
import Vue from 'vue'
import router from './router'

Vue.usage(VueAnalytics, {
    id: 'UA-130203185-1',
    router: router
})