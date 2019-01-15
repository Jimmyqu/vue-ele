<template>
  <div id="app">
    <router-view></router-view>
    <foot v-show="$route.meta.FootShow!==false"></foot>
  </div>
</template>

<script>

import foot from './components/FootGuide/FootGuide'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
    foot:foot
  },
  methods:{
    ...mapActions(['async_get'])

  },
  mounted(){
    this.async_get()
    this.$store.dispatch('async_userInfo')
  }

}
</script>

<style lang="less">
  @import "common/less/mixins";
#app{
  /*html, body {*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}reset.css已经设置所以才能填充body高度100%但是不会被子元素撑开了*/
  /*background-color: @orange;*/
  width: 100%;
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
