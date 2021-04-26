import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
      {
        path: 'nowPlaying',
        component: () => import('@/views/Movie/nowPlaying')
      },
      {
        path: 'comingSoon',
        component: () => import('@/views/Movie/comingSoon')
      },
      {
        path: '',
        redirect: '/movie/nowPlaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/Center',
    component: () => import('@/views/Center')
  },
  {
    path: '/City',
    name: 'city',
    component: () => import('@/views/City')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
