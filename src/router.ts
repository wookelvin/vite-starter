import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: () => import ('./views/public/PublicTemplate.vue'),
    children:[
      {
        path: '', 
        name: 'Home',
        component: () => import ('./views/public/Home.vue'), 
      },
    ]
  },

  /**
   * Auth Sign In Screens
   */
  { 
    path: '/', 
    component: () => import ('./views/signin/SignInTemplate.vue'),
    children:[
      {
        path: 'sign-in', 
        name: 'Sign In',
        component: () => import ('./views/signin/SignIn.vue'), 
      },
      {
        path: 'sign-up', 
        name: 'Sign Up',
        component: () => import ('./views/signin/SignUp.vue'), 
      },
      {
        path: 'reset-password', 
        name: 'Reset Password',
        component: () => import ('./views/signin/ResetPassword.vue'), 
      },
      { 
        path: 'sign-out', 
        name: 'Sign Out', 
        component: () => import ('./views/signin/SignOut.vue')
      },
      {
        path: '__/auth/action', 
        name: 'Auth Action', 
        component: () => import('./views/signin/AuthAction.vue')
      },
    ]
  },
  { 
    path: '/member', 
    component: () => import ('./views/member/MemberTemplate.vue'),
    children:[
      {
        path: '', 
        name: 'Member Home',
        component: () => import ('./views/member/Home.vue'), 
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: '404',
    component: () => import ('./views/NotFound.vue'), 
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
});
