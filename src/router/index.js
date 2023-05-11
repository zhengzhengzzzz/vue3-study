import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from "vue-router"
import Home from "../views/Home"

//配置信息中需要页面的相关配置

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/news',
        name: 'news',
        //异步加载方式
        component: () => import('../views/News.vue'),
        redirect:'/news/us',
        children: [{
                path: 'us',
                component: () => import('../views/NewsUs.vue')
            },
            {
                path: 'info',
                component: () => import('../views/NewsInfo.vue')
            }
        ]
    },
    {
        path: '/newsdetails/:name',
        name: 'newsdetails',
        //异步加载方式
        component: () => import('../views/NewsDetails.vue'),
    },
]
const router = createRouter({
    // createWebHashHistory：a标签的锚点链接
    // createWebHistory  ：此种方式需要后天配合做重定向 否则会出现404问题
    // 原理：H5 pushState()
    history: createWebHashHistory(),
    routes,
})
export default router;