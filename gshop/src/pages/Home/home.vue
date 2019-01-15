<template>
  <div>
    <!-- 使用 :title 来给头部组件传递数据 -->
    <head-top :title="'主页'">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo.name?'/setting':'/login'">
        {{userInfo.name?userInfo.name:'登录|注册'}}
      </router-link>
    </head-top>
    <div class="swiper-wapper"  v-if="shopList">
      <div class="swiper-container" >
        <!-- swiper的包裹层div -->
        <div class="swiper-wrapper">
          <!-- swiper的轮播div -->
          <div
            class="swiper-slide"
            >
            <div class="swiper-items" v-for="item in shopList.slice(0,8)">
              <img :src='item.image' alt="">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div
            class="swiper-slide"
          >
            <div class="swiper-items" v-for="item in shopList.slice(8,16)">
              <img :src='item.image' alt="">
              <p>{{item.title}}</p>
            </div>
            <!--<a href="javascript:" class="link_to_food" v-for="index in [1,2,3,4]" :key="index">-->
            <!--<div class="food_container">-->

            <!--</div>-->
            <!--<span>{{index}}</span>-->
            <!--</a>-->
          </div>
        </div>
        <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="swiper-wapper" v-if="shopList.length===0">
      <img style="width: 100%" src="./img/download.svg" v-show="shopList" alt="">
    </div>
    <shop-list></shop-list>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeadTop from '../../components/HeadTop'
  import ShopList from '../../components/ShopList/ShopList'
  import {mapState,mapActions} from 'vuex'

    export default {
        name: "home",
        components:{
          HeadTop:HeadTop,
          ShopList:ShopList
        },
        data:()=>{
          return {
            loginShow:true
          }
        },
        mounted(){
          //1.直接调用$store.dispatch this.$store.dispatch('async_get')
          //2.引入mapActions 映射到本地methods中

          //this.async_get()
          // 应该在父组件App中做，route-view未做缓存操作，
          // 会导致切换一次mounted一次（swiper插件在watch中，
          // store数据无变化，切换router-view 插件显示失效）



          //Swiper中的数据是异步获取的，需要延迟执行或在watch中观察数据变化再执行
          this.$nextTick(()=>{
            new Swiper('.swiper-container',{
              loop:true,
              pagination:{
                el:'.swiper-pagination'
              }
            })
          })
        },
        updated(){
          //vuex里面拿到的数据有变更，都会触发虚拟DOM重新渲染，之后调用 updated
          //所以可以在其中new Swiper
        },
        computed:{
          //将VUEX state 映射到本地state中
          ...mapState(['shopList','userInfo'])
        },
        methods:{
          ////将VUEX actions 映射到本地方法中
          ...mapActions(['async_get']),
        },
        watch:{
          //观察Vue实例上的数据变动 实际DOM此时还未重新渲染
          //需要使用$nextTick方法，在下次DOM循环之后执行 new Swiper
          shopList(val) {
            console.log('子组件能监听实例store')
            this.$nextTick(()=>{
              new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                  el: '.swiper-pagination'
                }
              })
            })
          }
        }
    }
</script>

<style scoped lang="less">
  .swiper-wapper{

  }
  .swiper-slide{
    display: flex;
    flex-wrap: wrap;
    .swiper-items{
      width: 25%;
      padding-bottom: 25%;
      background-color: red;
      position: relative;
      img{
        width: 70%;
        position: absolute;
        left: 15%;
      }
      p{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30%;
        line-height: 2;
        text-align: center;
      }
    }
  }


</style>
