import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/topics',
    name: 'Topics',
    component: () => import('@/pages/Topics.vue')
  },
  {
    path: '/venue',
    name: 'Venue',
    component: () => import('@/pages/Venue.vue')
  },
  {
    path: '/important',
    name: 'ImportantDates',
    component: () => import('@/pages/Important.vue')
  },
  {
    path: '/invited',
    name: 'InvitedSpeakers',
    component: () => import('@/pages/Invited.vue')
  },
  {
    path: '/abstract',
    name: 'Abatract',
    component: () => import('@/pages/Abstract.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/pages/Registration.vue')
  },
  {
    path: '/conference',
    name: 'Conference',
    component: () => import('@/pages/Conference.vue')
  },
  {
    path: '/social',
    name: 'Social',
    component: () => import('@/pages/Social.vue')
  },
  {
    path: '/banquet',
    name: 'Banquet',
    component: () => import('@/pages/Banquet.vue')
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: () => import('@/pages/Hotel.vue')
  },
  {
    path: '/access',
    name: 'Access',
    component: () => import('@/pages/Access.vue')
  },
  {
    path: '/Sponsorship',
    name: 'Sponsorship',
    component: () => import('@/pages/Sponsorship.vue')
  },
  {
    path: '/Committees',
    name: 'Committees',
    component: () => import('@/pages/Committees.vue')
  }
  ]
})
