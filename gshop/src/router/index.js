import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home/home'
import order from '../pages/Order/order'
import search from '../pages/Search/search'
import setting from '../pages/Setting/setting'
import login from '../pages/login/login'
import shop from '../pages/ShopDetail/Detail'
import good from '../pages/ShopDetail/ShopGoods/good'
import info from '../pages/ShopDetail/ShopInfo/info'
import rate from '../pages/ShopDetail/ShopRate/rate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:home
    },
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/order',
      name: 'order',
      component:order
    },
    {
      path: '/search',
      name: 'search',
      component:search
    },
    {
      path: '/setting',
      name: 'setting',
      component:setting
    },
    {
      path: '/login',
      name: 'login',
      component:login,
      meta:{
        FootShow:false
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component:shop,
      meta:{
        FootShow:false
      },
      children:[  //子路由
        {
          path: '/',  //默认子路由显示
          redirect:'/shop/good'
        },
        {
          path: '/shop/good',
          name:good,
          component:good,
          meta:{
            FootShow:false
          }
        },
        {
          path: '/shop/info',
          name: 'info',
          component:info,
          meta:{
            FootShow:false
          }
        },
        {
          path: '/shop/rate',
          name: 'rate',
          component:rate,
          meta:{
            FootShow:false
          }
        },
      ]
    }
  ]
})
