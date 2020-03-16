import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'event-list',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventList.vue')
  },
  {
    path: '/event/:id',
    name: 'event-show',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventShow.vue'),
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/dinamic/:username',
    name: 'dinamic',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Dinamic.vue'),
    props: true
  }
  // {
  //   path:'*',
  //   component:NotFoundComponent
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
