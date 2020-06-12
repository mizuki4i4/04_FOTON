import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Carselect from '../views/Carselect.vue'
import Userhome from '../views/Userhome.vue'
import Onboard_map from '../views/Onboard_map.vue'
import Onboard_ecus from '../views/Onboard_ecus.vue'
import Offboard_swupdate from '../views/Offboard_swupdate.vue'
import Offboard_swvulnerability from '../views/Offboard_swvulnerability.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Carselect',
    name: 'Carselect',
    component: Carselect
  },
  {
    path: '/Userhome',
    name: 'Userhome',
    component: Userhome
  },
  {
    path: '/Onboard_map',
    name: 'Onboard_map',
    component: Onboard_map
  },
  {
    path: '/Onboard_ecus',
    name: 'Onboard_ecus',
    component: Onboard_ecus
  },
  {
    path: '/Offboard_swvulnerability',
    name: 'Offboard_swvulnerability',
    component: Offboard_swvulnerability
  },
  {
    path: '/Offboard_swupdate',
    name: 'Offboard_swupdate',
    component: Offboard_swupdate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
