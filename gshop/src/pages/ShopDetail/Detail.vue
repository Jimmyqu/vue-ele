<template>
    <div class="shop-container">
        <div class="shop-top">
          <ShopDetailHead :Info="Info" v-if="Info.data">
          </ShopDetailHead>
        </div>
      <div class="shop-link">
        <div>
          <router-link to="/shop/good">商家展示</router-link>
        </div>
        <div>
          <router-link  to="/shop/info">商家信息</router-link>
        </div>
        <div>
          <!--向子路由传值 2 routerlink 传值-->
          <router-link  :to="{name:'rate',params:Ratings.data}" >商家评价</router-link>
        </div>
      </div>
      <hr style="
      margin:-1px 0 0 0;
      box-shadow: 0px 0px 1px 0px darkslateblue inset;
      transform: scaleY(0.5);
">
      <div>
        <!--向子路由传值 1 直接绑定到router-view 只能传递一个？-->
        <router-view
          :Info="Info" v-if="Info.data"
        >
        </router-view>
      </div>
    </div>
</template>

<script>
  import ShopDetailHead from '../../components/ShopDetailHead/ShopDetailHead'
  import {GoodInfo,GoodRatings,GoodList} from '../../api/apis'
    export default {
        name: "detail",
      components:{
        ShopDetailHead
      },
      data(){
          return {
            Info:{},
            Goods:[],
            Ratings:[],
            complate:false
          }
      },
        mounted(){
          this.getDetail()
        },
      methods:{
          async getDetail(){
            this.Info= await GoodInfo()
            this.Goods= await GoodList()
            this.Ratings= await GoodRatings()
          }
      },
      watch:{

      }
    }
</script>

<style scoped lang="less">


  .router-link-active{  //路由激活样式
    color:seagreen;
    border-bottom: 3px seagreen solid;
  }

.shop-container{
  margin-top: -45px;
  .shop-link{
    display: flex;
    height: 5vh;
    align-items: center;

    >div{
      flex: 1;
      text-align: center;
      height: 100%;
      a{
        display: inline-block;
        line-height: 5vh;
        height: 5vh;
        box-sizing: border-box;
      }
    }

  }
}
</style>
