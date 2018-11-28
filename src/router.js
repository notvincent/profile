import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "Home" */ './views/Home')
        },
        {
            path: '/blog',
            name: 'blog',
            component:  () => import(/* webpackChunkName: "Blog" */ './views/Blog')
        },
        {
            path: '/everesting',
            name: 'everesting',
            component: () => import(/* webpackChunkName: "Everesting" */ './views/Blogs/Everesting')
        },
        {
            path: '/ftp_booster',
            name: 'ftp_booster',
            component: () => import(/* webpackChunkName: "FtpBooster" */ './views/Blogs/FtpBooster')
        },
        {
            path: '/zp_analysis',
            name: 'zp_analysis',
            component: () => import(/* webpackChunkName: "ZpAnalysis" */ './views/Blogs/ZpAnalysis')
        },
        {
            path: '/coming_soon',
            name: 'coming_soon',
            component: () => import(/* webpackChunkName: "ComingSoon" */ './views/Blogs/ComingSoon')
        }
    ]
})
