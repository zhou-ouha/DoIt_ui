import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    component:()=> import('../views/Home.vue')
  },
  {
    path:'/Docs',
    component:()=> import('../views/Docs.vue'),
    children:[
      {
        path:'',
        redirect:'/Docs/introduce'
      },
      {
        path:'introduce',
        component:()=> import('../components/introduce.vue')
      },
      {
        path:'start',
        component:()=> import('../components/start.vue')
      },
      {
        path:'Dinput',
        component:()=> import('../views/doc/input/Dinput.vue')
      },
      {
        path:'Dbutton',
        component:()=> import('../views/doc/button/Dbutton.vue')
      },
      {
        path:'Ddialog',
        component:()=> import('../views/doc/dialog/Ddialog.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
