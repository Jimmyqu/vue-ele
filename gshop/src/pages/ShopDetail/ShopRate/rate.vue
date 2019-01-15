<template>
    <div class="shopRating wrapper">
      <div class="content" >
        <div class="shopRating-head">
          <div class="shopRating-head-l">
          <span>
            {{Info.data.score}}
          </span>
            <p>综合评分</p>
            <p>高于周边商家99%</p>
          </div>
          <div class="shopRating-head-r">
            <p><span>服务态度</span><Star :num="Info.data.serviceScore"></Star></p>
            <p><span>商品评分</span><Star :num="Info.data.foodScore"></Star></p>
            <p><span>送餐时间</span>{{Info.data.deliveryTime}}分钟</p>
          </div>
        </div>
        <div class="shopRating-body">
          <div class="shopRating-body-btns">
            <ul>
              <li>
                <button :class="{'active':selectType===2}"  @click="setSelectType(2)">全部（{{Ratings.length}}）</button>
              </li>
              <li>
                <button
                  :class="{'active':selectType===0}"
                  @click="setSelectType(0)">满意{{Ratings.length-positiveSize}}）</button>
              </li>
              <li>
                <button
                  :class="{'active':selectType===1}"
                  @click="setSelectType(1)">不满意{{positiveSize}}）</button>
              </li>
            </ul>
              <mt-checklist
                @change="ShowAllList"
                v-model="value"
                :options="options">
              </mt-checklist>
          </div>
          <div class="shopRating-body-list">
              <div class="shopRating-body-list-item" v-for="item in filterList">
                <div class="list-item-l">
                  <img width="28" height="28" :src="item.avatar" alt="">
                </div>
                <div class="list-item-r">
                  <p>
                    <span>{{item.username}}</span>
                    <span>{{item.rateTime}}</span>
                  </p>
                  <p>
                    <Star :num="item.score"></Star>
                  </p>
                  <p>
                    {{item.text}}
                  </p>
                  <p>
                    <span class="iconfont" :class="item.rateType===0?'icon-thumbsup':'icon-thumbsdown'"></span>
                    <span class="foods" v-for="food in item.recommend">
                      {{food}}
                    </span>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Star from '../../../components/stars/stars'
    export default {
        name: "rate",
      components:{
        Star
      },
      props:{
          Info:Object
      },
      data(){
          return{
            Ratings:[],
            positiveSize:0,
            value: [], // radio的标识
            options : [{ // radio的选项
              label: '只显示有文本的评价',
              value: true
            }],
            selectType: 2 // 选择的评价类型: 0满意, 1不满意, 2全部
          }
      },
      mounted(){
        let wrapper = document.querySelector('.wrapper')
        let scroll = new BScroll(wrapper,
          {click: true} //添加点击事件
          )
        this.Ratings=this.$route.params
      },
      updated(){

      },
      watch:{

      },
      computed:{
        filterList()  {
          this.positiveSize=this.Ratings.filter((item)=>{
            return item.rateType !== 0
          }).length;

          const {selectType} = this
          return this.Ratings.filter((item)=>{
            return (selectType === 2 || selectType === item.rateType) && (!this.value.length || item.text.length > 0)
          })
        }
      },
      methods:{

        setSelectType (selectType) {
          this.selectType = selectType
        },

        ShowAllList(){
          console.log(this.value.length)
        }
      }
    }
</script>

<style scoped lang="less">
.active{
  background-color:seagreen!important;
  color: honeydew;
}
.shopRating{
  background-color: #e3e3e3;
  height: 75vh;
  margin-bottom: -50px;
  overflow: hidden;
  &-head{
    display: flex;
    flex-direction: row;
    background-color: #fff;
    &-l{
      flex: 1;
      text-align: center;
      margin: 15px 0;
      border-right: 1px slategray solid;
      span{
        color: orange;
        font-size: 24px;
      }
      & p:nth-child(2){
        font-weight: bolder;
        margin: 6px 0;
        font-size: 14px;
      }
      & p:nth-child(3){
        color:grey;
        font-size: 12px;
      }
    }
    &-r{
      flex: 2;
      margin: 15px 0;
      font-size: 14px;
      & p:nth-child(2){
        margin: 8px 0;
      }
      p{
        >span{
          margin:0 25px;
          display: inline-block;
        }
      }
    }
  }
  &-body{
    margin-top:20px;
    border-top: 1px slategray solid;
    background-color: #fff;
    &-btns{
      padding-top: 20px;
      ul>li{
        display: inline-block;
        button{
          width: 90px;
          background-color: #e7e7e7;
          border: 0;
          height: 25px;
          outline: none;
          margin-left: 15px;
        }
      }
      p{

      }
    }
    &-list{
      &-item{
        display: flex;
        border-top: 1px #e7e7e7 solid;
        padding: 20px 10px;
        .list-item-l{
          flex: 1;
          text-align: center;
        }
        .list-item-r{
          margin-left: 10px;
          flex: 10;
          font-size: 14px;
          & p:nth-child(1){
            & span:nth-child(2){
              float: right;
            }
          }
          & p:nth-child(2){
            margin-top: 5px;
          }
          & p:nth-child(3){
            margin-top:10px;
          }
          & p:nth-child(4){
            margin-top:10px;
            .iconfont{
              display: inline-block;
              color: orange;
              font-size: 16px;
            }
            .foods{
              display: inline-block;
              padding: 2px;
              border: 1px slategray solid;
              margin:3px 10px;
            }
          }
        }
      }
    }
  }
}
</style>
