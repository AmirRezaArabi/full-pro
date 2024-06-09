import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Cart from "../views/Cart.vue"
import About from "../components/About.vue"
import Sizes from "../components/Sizes.vue"
import Cooperation from "../components/Cooperation.vue"
import Details from "../components/Details.vue"

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/Sizes",
    name: "Sizes",
    component: Sizes,
  },
  {
    path: "/cooperation",
    name: "cooperation",
    component: Cooperation,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/details",
    name: "details",
    component: Details,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
