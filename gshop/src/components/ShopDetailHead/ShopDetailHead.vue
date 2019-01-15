<template>
    <div class="detail-header">
      <div class="header-img">
        <img :src="Info.data.bgImg" alt="">
        <span class="icon" @click="$router.back()">
          <i class="iconfont icon-arrow-left"></i>
        </span>
        <span class="img"><img :src="Info.data.avatar" alt=""></span>
      </div>
      <div class="header-title" @click="ShopModel=true">
        <h3>{{Info.data.name}}<span></span></h3>
      </div>
      <div class="header-info">
        <p>
          <span>
            {{Info.data.score}}分
          </span>
          <span>
            月售{{Info.data.sellCount}}单
          </span>
          <span>
            {{Info.data.description}}
          </span>约{{Info.data.deliveryTime}}分钟送达
        </p>
        <div class="info-discount" @click="SupportModel=true">
          <div class="discount-l">
            <span :class="className[Info.data.supports[0].type]">{{Info.data.supports[0].name}}</span>
            <span>{{Info.data.supports[0].content}}</span>
          </div>
          <div class="discount-r">
            {{Info.data.supports.length}}个优惠
          </div>
        </div>
      </div>

      <transition name="fade">
        <div class="shop-model" v-show="ShopModel">
          <div class="shop-model-content">
              <div class="content-title">
                {{Info.data.name}}
              </div>
              <div class="content-info">
                  <table>
                    <thead>
                    <tr>
                      <th> {{Info.data.score}}分</th>
                      <th>{{Info.data.sellCount}}单</th>
                      <th>约{{Info.data.deliveryTime}}分钟</th>
                      <th>{{Info.data.deliveryPrice}}元</th>
                      <th>{{Info.data.distance}}</th>
                    </tr>
                    </thead>
                    <tr>
                      <td>评分</td>
                      <td>月售</td>
                      <td>专送</td>
                      <td>配送费用</td>
                      <td>距离</td>
                    </tr>
                  </table>
              </div>
              <div class="content-news">
                  --公告--
              </div>
              <div class="content-introduction">
  {{Info.data.bulletin.slice(0,40)}}...
              </div>
          </div>
          <span class="iconfont icon-close" @click="ShopModel=false"></span>
        </div>
      </transition>

      <transition name="fade">
        <div class="support-model" v-show="SupportModel">
          <transition name="slide">
            <div class="support-model-content" v-show="SupportModel">
            <span class="iconfont icon-close" @click="SupportModel=false"></span>
            <div class="support-model-content-title">
              优惠活动
            </div>
            <div class="support-model-content-info">
              <ul>
                <li v-for="item in Info.data.supports">
                  <span :class="className[item.type]">{{item.name}}</span>
                  <span>{{item.content}}</span>
                </li>
              </ul>
            </div>
          </div>
          </transition>
        </div>
      </transition>
    </div>
</template>

<script>

    export default {
        name: "shop-detail-head",
        props:{
            Info:Object
        },
        data(){
            return {
              className:['green','orange','red'],
              ShopModel:false,
              SupportModel:false
            }
        },
      created(){

      },
      mounted(){
        console.log(this.Info)
      },
      updated(){

      },
      watch:{
        Info(){
          //Info是父组件异步获取的直接使用会在初始化的时候显示未定义
          //需要在父组件 v-if Info 在其有值的时候再显示子组件
        }
      }
    }
</script>

<style scoped lang="less">

/*组件动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/*组件动画*/
.slide-enter-active, .slide-leave-active {

  transition: all .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0,200px);
}



.detail-header{
  height: 20vh;
  .header-img{
    height: 10vh;
    position: relative;
    >img {
      height: 7vh;
      width: 100%;
    }
    .icon{
      position: absolute;
      top:0;
      left: 5px;
      width: 50px;
      height: 7vh;
      line-height: 7vh;
      i{
        font-size: 25px;
        color: #f2f2f2;
      }
    }
    .img {
      position: absolute;
      top:1vh;
      left: 50%;
      margin-left: -4vh;
      img{
        height: 8vh;
      }
    }

  }
  .header-title{
    h3{
      font-size: 3vh;
      text-align: center;
      font-weight: bolder;
      span{
        margin-left: 5px;
        width: 15px;
        height: 100%;
        &:after{
          height: 0;
          content: '';
          display: inline-block;
          border-bottom:8px transparent solid;
          border-top:8px transparent solid;
          border-left:8px slategray solid;
          border-right:8px transparent solid;
        }
      }
    }
  }
  .header-info{
    margin-top: 10px;
    margin-bottom: 20px;
    p{
      text-align: center;
      margin-top: 5px;
      font-size: 12px;
      span{
        margin: 0 5px;
      }
    }
    .info-discount{
      font-size:10px ;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      width: 85%;
      margin: 10px auto;
      span{
        margin: 0 5px;
      }
      .discount-r{
        display: inline-block;
        vertical-align: middle;
        &:after{
          height: 0;
          content: '';
          display: inline-block;
          border-bottom:3px transparent solid;
          border-top:3px transparent solid;
          border-left:3px slategray solid;
          border-right:3px transparent solid;
        }
      }
      .discount-l{
        display: inline-block;
        vertical-align: middle;
        .green{
          background-color:seagreen;
          color: white;
        }
        .orange{
          background-color: orange;
          color: white;
        }
        .red{
          background-color: hotpink;
          color: white;
        }
      }
    }
  }
  .shop-model{
    z-index: 2;
    position: fixed;
    top:0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    &-content{
      background-color: snow;
      border-radius: 10px;
      height: 180px;
      width: 300px;
      margin: 30vh auto 0 auto;
      padding-top: 20px;
      .content-title{
        font-size: 16px;
        font-weight: bolder;
        text-align: center;
      }
      .content-info{
        table{
          width: 90%;
          margin: 10px auto;
          text-align: center;
          th{
            font-size: 14px;
            padding: 5px 0;
            font-weight: bolder;
          }
          td{
            font-size: 12px;
          }
        }
      }
      .content-news{
        text-align: center;
        margin: 20px;
        font-size: 14px;
      }
      .content-introduction{
        width: 90%;
        margin: 0 auto;
        font-size: 12px;
      }

    }
    span{
      display: block;
      text-align: center;
      margin-top: 20px;
      font-size: 25px;
      color: snow;
    }
  }
  .support-model{
    z-index: 3;
    position: fixed;
    top:0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    &-content{
      position: fixed;
      bottom: 0;
      height: 200px;
      width: 100%;
      background-color: snow;
      &-title{
        font-size: 16px;
        font-weight: bolder;
        text-align: center;
        margin: 20px;
      }
      >span{
        position: absolute;
        top:5px;
        right: 5px;
        font-size: 25px;
        color: #555555;
      }
      &-info{
        width: 80%;
        margin: 0 auto;
        height: 120px;
        overflow: scroll;
        overflow-x: hidden;
        .green{
          background-color:seagreen;
          color: white;
        }
        .orange{
          background-color: orange;
          color: white;
        }
        .red{
          background-color: hotpink;
          color: white;
        }
        ul>li{
          margin:10px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
