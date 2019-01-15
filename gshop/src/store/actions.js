/*通过mutations间接更新state对象*/

import {
  GET_SHOPLIST,
  GET_USERINFO,
  EXIT_USER
} from './mutation-types'

import {
  ApiShopLIst,
  UserInfo
} from '../api/apis'

export default {
  //普通方程 名称（一个包括commit,state的对象）
  //  getShopList({commit}){
  //   //发送异步请求
  //   ApiShopLIst().then(res=>{
  //     //提交到mutations更新vuex
  //     commit(GET_SHOPLIST,res.data)
  //   })
  // }

  // async方程 内部使用await 得到promise函数resolve结果
  async async_get({commit}){ //shoplist
    //发送异步请求
    let res = await ApiShopLIst();
    //提交到mutations更新vuex
    commit(GET_SHOPLIST,res.data)
  },


  async async_userInfo({commit}){  //userinfo
    let res = await  UserInfo()
    commit(GET_USERINFO,res.data)
  },

  act_exitUer({commit}){
    commit(EXIT_USER)
  }
}



