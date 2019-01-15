<template>
  <div>
    <div class="shop-item" v-for="item in shopList" @click="toDetail">
      <div class="shop-left">
        <img class="shop_img" src="https://via.placeholder.com/80x80">
      </div>
      <div class="shop-right">
        <div class="shop-right-top">
          <div class="top-l">
             {{item.name}}11
          </div>
          <div class="top-r">
            保 准 真
          </div>
        </div>
        <div class="shop-right-bottom" >
          <div class="bottom-l">
            <!--{{rate(1)}}-->
            <stars :num="item.stars"></stars>
            <p style="margin-top: 10px">
              价格:{{item.price}}
            </p>

          </div>
          <div class="bottom-r" style="color: #02a774">
            限时送达
          </div>
        </div>
      </div>
    </div>
    <div class="shop-item" v-if="shopList.length===0" v-for="item in 8">
      <img style="width: 100%" src="./images/shop_back.svg" alt="">
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import stars from '../stars/stars'

  export default {
    name: "ShopList",
    components:{
      stars:stars,
    },
    methods:{
     rate(rate){
       return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
     }
    },
    data:()=>{
      return {

      }
    },
    computed:{
      ...mapState(['shopList'])
    },
    mounted(){

    },
    updated(){

    },
    methods:{
      toDetail(){
        this.$router.push('/shop')
      }
    }
  }
</script>

<style lang="less">
.shop-item{
  padding: 8px 0;
  display: flex;
  height: 80px;
  .shop-left{
    flex: 1;
    background-color: red;
  }
  .shop-right{
    display: flex;
    flex-direction: column;
    padding:0 10px;
    flex: 4;
    .shop-right-top{
      flex: 1;
      display: flex;
      .top-l{
        flex: 3;
        width: 0;
        padding: 5px 0;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
      }
      .top-r{
        padding: 5px 0;
        flex: 1;
        text-align: center;
      }
    }
    .shop-right-bottom{
      display: flex;
      padding-top: 5px;
      flex: 2.5;
      .bottom-l{
        flex: 3;
      }
      .bottom-r{
        flex: 1;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
