<template>
    <div class="shopInfo-container wrapper">
      <div class="content">
        <div class="shopInfo-top">
          <h3>配送信息</h3>
          由商家配送，约{{Info.data.deliveryTime}}分钟送达，距离{{Info.data.distance}}
          <p>配送费{{Info.data.deliveryPrice}}元</p>
        </div>
        <div class="shopInfo-info">
          <h3>活动与服务</h3>
          <ul>
            <li v-for="item in Info.data.supports">
              <span :class="className[item.type]">{{item.name}}</span>
              <span>{{item.content}}</span>
            </li>
          </ul>
        </div>
        <div class="shopInfo-img">
          <h3>商家实景</h3>
          <div class="wrapper2" ref="tab">
            <ul class="content2" ref="tabcontent">
              <li v-for="item in Info.data.pics" ref="tabitem">
                <img :src="item" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="shopInfo-bottom">
          <h3>商家信息</h3>
          <div class="">
            <ul>
              <li>店铺主营<span>{{Info.data.category}}</span></li>
              <li>联系电话<span>{{Info.data.phone}}</span></li>
              <li>地址<span>{{Info.data.address}}</span></li>
              <li>营业时间<span>{{Info.data.workTime}}</span></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "info",
      props:{
          Info:Object
      }
      ,data(){
          return {
            className:['green','orange','red'],

          }
      },
      mounted(){
        let wrapper = document.querySelector('.wrapper')
        let scroll = new BScroll(wrapper)

        let wrapper2 = document.querySelector('.wrapper2')
        let scroll2 = new BScroll(wrapper2)

        this.$nextTick(() => {
          this.InitTabScroll();
        });
      },
      methods:{
        InitTabScroll(){
          let width=0
          for (let  i = 0; i <this.Info.data.pics.length; i++) {
            width+=this.$refs.tabitem[0].getBoundingClientRect().width
          }

          this.$refs.tabcontent.style.width=width+'px'
          this.$nextTick(()=>{
            if (!this.scroll) {
              this.scroll=new BScroll(this.$refs.tab, {
                startX:0,
                click:true,
                scrollX:true,
                scrollY:false,
                eventPassthrough:'vertical'
              })
            }else{
              this.scroll.refresh()
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
.shopInfo-container{
  background-color: #e2e2e2;
  height:75vh;
  overflow: hidden;
  margin-bottom: -50px;
  h3{
    font-size: 16px;
    font-weight: bolder;
    padding: 15px 0;
  }
  .shopInfo-top{
    background-color: #fff;
    font-size: 14px;
    border-bottom: 1px slategray solid;
    padding-left: 10px;
    p{
      margin: 5px 0;
    }

  }
  .shopInfo-info{
    background-color: #fff;
    padding-left: 10px;
    padding-bottom: 5vh;
    border-top: 1px slategray solid;
    border-bottom: 1px slategray solid;
    margin-top: 2vh;
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
      margin-top:15px;
      font-size: 12px;
    }
  }
  .shopInfo-img{
    background-color: #fff;
    padding:0 10px;
    border-top: 1px slategray solid;
    border-bottom: 1px slategray solid;
    margin: 2vh 0;
    div{
      width: 95vw;
      overflow: hidden;
      margin: 0 auto;
      padding-bottom: 20px;
      ul{
        display: flex;
        width: 500px;
        li{
          flex: 1;
          height: 80px;
          margin-right: 5px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }

  }
  .shopInfo-bottom{
    background-color: #fff;
    border-top: 1px slategray solid;
    padding:0 10px;
    margin-top: 2vh;
    ul{
      font-size: 14px;
      li{
        height: 5vh;
        line-height: 5vh;
        border-bottom: 1px slategray solid;
        span{
          float: right;
          color: #7e8c8d;
        }
      }
    }
  }
}
</style>
