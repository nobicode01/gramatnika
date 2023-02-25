import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SuccessView from '../views/SuccessView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/productView/:id',
        props: true,
        name: 'productView',
        component: ProductView
    },
    {
        path: '/cart',
        name: 'cart',
        component: ShoppingCart
    },
    {
        path: '/success',
        name: 'success',
        component: SuccessView
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router