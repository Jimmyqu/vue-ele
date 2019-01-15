<template>
  <div>
    <head-top :title="'订单'">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo.name?'/setting':'/login'">
         <span class="header_login_text" >
            {{userInfo.name?userInfo.name:'登录|注册'}}
        </span>
      </router-link>
    </head-top>
    订单
  </div>
</template>


<script type="text/ecmascript-6">
  import {mapState,mapActions} from 'vuex'
  import HeadTop from '../../components/HeadTop'
  export default {
    name: "home",
    components:{
      HeadTop:HeadTop
    },
    data:()=>{
      return {
        loginShow:true
      }
    },
    computed:{
      //将VUEX state 映射到本地state中
      ...mapState(['shopList','userInfo'])
    },
  }
</script>

<style>

</style>
