import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import FullBlog from '../components/sections/FullBlog.vue'
import SingleBlog from '../views/SingleBlog.vue'
import SinglePage from '../views/SinglePage.vue'
import AlbunsPage from '../components/sections/FullPortfolio.vue'

const routes = [
    {
        path: '/', 
        component: HomeView,
        meta:{
            title: "Home"
        }
    },
    {
        path: '/albums', 
        component: AlbunsPage,
        meta:{
            title: "Albums"
        }
    },
    {
        path: '/about', 
        component: SinglePage,
        meta:{
            title: "About"
        }
    },
    {
        path: '/contact', 
        component: ContactView,
        meta:{
            title: "Contact"
        }
    },
    {
        path: '/blog', 
        component: FullBlog,
        meta:{
            title: "Blog"
        }
    },
    {
        path: '/single', 
        component: SingleBlog,
        meta:{
            title: "Post"
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      }
})

router.beforeEach((to, from, next) => {
    document.title = `NagaStudios | ${to.meta.title}`;
    next();
})

export default router;