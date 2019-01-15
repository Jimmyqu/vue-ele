<template>
  <div>

    <head-top :title="'设置'">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo.name?'/setting':'/login'">
        <span class="header_login_text" >
            {{userInfo.name?userInfo.name:'登录|注册'}}
        </span>
        <!--<span class="header_login_text" >-->
          <!--<i class="iconfont icon-yonghuming"></i>-->
        <!--</span>-->
      </router-link>
    </head-top>
    <div class="setting-container">
      <div class="setting-top">
        <div class="top-img">
          <img src="http://dummyimage.com/'80x80'/79f2aa/" alt="">
        </div>
        <div class="top-info">
          <p>{{userInfo.name?userInfo.name:'请先登录'}}</p>
          <p>{{userInfo.phone?userInfo.phone:'请先登录'}}</p>
        </div>
      </div>
      <div class="setting-money">
        <div>
          <p><span>{{ userInfo.balance?userInfo.balance.toFixed(2):'0' }}</span>元</p>
          <p>我的余额</p>
        </div>
        <div>
          <p><span>{{userInfo.discount?userInfo.discount:0}}</span>个</p>
          <p>我的优惠</p>
        </div>
        <div>
          <p><span>{{userInfo.total?userInfo.total:0}}</span>分</p>
          <p>我的积分</p>
        </div>
      </div>
      <div class="setting-ul">
        <ul>
          <li>
            <div>
              <i style="font-weight: bolder;margin-right: 10px;color: burlywood" class="iconfont icon-jifen"></i>我的订单
            </div>
          </li>
          <li><div>
            <i style="font-weight: bolder;margin-right: 10px;color: darkolivegreen"  class="iconfont icon-viptehuishiduan"></i>积分商城
          </div></li>
          <li><div>
            <i style="font-weight: bolder;margin-right: 10px;color: rebeccapurple"  class="iconfont icon-lianxikefu"></i>联系客户
          </div></li>
          <li><div>
            <i style="font-weight: bolder;margin-right: 10px;color: seagreen"  class="iconfont icon-dingdan"></i>外卖会员
          </div>
          </li>
        </ul>
      </div>
      <div class="setting-exit" v-show="userInfo.name" @click="exitLogin">
        <span>退出登录</span>
      </div>
    </div>

  </div>
</template>


<script type="text/ecmascript-6">
  import HeadTop from '../../components/HeadTop'
  import { Toast } from 'mint-ui'; //JS组件要引入才能使用
  import {mapState} from 'vuex'
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
    mounted(){
      // Toast('提示信息');
      console.log(this.userInfo)
    },
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{

      exitLogin(){
        this.$store.dispatch('act_exitUer')
      }

    }
  }
</script>

<style lang="less">
.setting-container{
  .setting-top{
    display: flex;
    flex-direction: row;
    height: 10vh;
    background-color: #02a774;
    border: 1px slategray solid;
    .top-img{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        border-radius: 50%;
        width: 50%;
      }
    }
    .top-info{
      flex: 3;
      padding-top: 5%;
      p:nth-child(2){
        margin-top: 5px;
      }
    }
  }
  .setting-money{
    display: flex;
    flex-direction: row;
    div{
      flex: 1;
      text-align: center;
      padding: 10px 0;
      height: 8vh;
      border-bottom: 1px slategray solid;
      &:nth-child(2){
        border-left: 1px slategray solid;
        border-right: 1px slategray solid;
      }
      p:nth-child(1){
        color: red;
        margin-top:5%;
        span{
          font-size: 24px;
        }
      }
      p:nth-child(2){
        margin-top: 10px;
      }
    }
  }
  .setting-ul{
      ul{
       li{
         height: 6vh;
         border-bottom: 1px slategray solid;
         display: flex;
         align-items: center;
         text-indent: 5%;
         div{
           width: 90%;
           &:after{
             content: '>';
             float: right;
           }
         }
       }
      }
  }
  .setting-exit{
    height: 5vh;
    margin: 3vh 0 0 5vw;
    background-color: royalblue;
    width: 90vw;
    position: relative;
    line-height: 5vh;
    text-align: center;
    border-radius: 5px;
  }
}
</style>
