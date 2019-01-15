/*
所有vuex数据都通过mutation更改
通过自身方法直接更新state对象的一些方法
在实例中通过this.$store.commit(方法名使用)
*/

//引入mutation-types定义的常量
import {
  GET_SHOPLIST,
  SWITCH_BTN,
  GET_USERINFO,
  EXIT_USER
} from './mutation-types'

export default {
  // es6的写法，转换为es5时这样的
  // var SOME_MUTATION = 'SOME_MUTATION'
  // var mutations = {}
  // mutations[SOME_MUTATION] = function (state) {
  //   // mutate state
  // }

  [GET_SHOPLIST](state,list){
    state.shopList=list
    console.log(state.shopList)
  },

  [SWITCH_BTN](state,change){
    state.showPassWord=change
  },

  [GET_USERINFO](state,userInfo){
    state.userInfo=userInfo
  },
  //退出登录 清空store
  [EXIT_USER](state){
    state.userInfo={}
    console.log(state.userInfo)
  }
}
