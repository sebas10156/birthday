import { createRouter, createWebHistory } from 'vue-router'

// Templates
import Splash from '../views/Splash.vue'
import Welcome from '../views/Welcome.vue'
import Step_1 from '../views/Step-1.vue'
import Step_2 from '../views/Step-2.vue'
import Finish from '../views/Finish.vue'

// Routes
const routes = [
  { path: '/', component: Splash },
  { path: '/welcome', component: Welcome },
  { path: '/step-1', component: Step_1 },
  { path: '/step-2', component: Step_2 },
  { path: '/finish', component: Finish },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
