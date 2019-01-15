<template>
    <div ref="container" class="alert-container">
      <transition name="rag">
        <div ref="box" class="box" v-show="this.show">
          <h4>提示框</h4>
          <div>
            {{text}}
          </div>
          <button @click="closeAlert">关闭tips</button>
        </div>
      </transition>

    </div>
</template>

<script>
    export default {
        props:{
          text : String,
          show:Boolean
        },
        name: "alert-com",
        methods:{
        closeAlert(){
          this.$emit('closeTip') //使用父组件传递的closeTip方法
        },
        },
        mounted(){

        },
        watch:{
          show(){
            // console.log(this.show)
            // if(this.show){
            //
            //   this.$refs.box.classList.add('box_show')
            //   this.$refs.container.classList.add('alert-container_show')
            // }else {
            //   this.$refs.container.classList='alert-container'
            //   this.$refs.box.classList="box"
            // }
          }
        }

    }
</script>

<style scoped lang="less">

  /*组件动画*/
  .rag-enter-active, .rag-leave-active {

    transition: all .5s;
  }
  .rag-enter, .rag-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(1.2) rotate(90deg);
  }


  .alert-container {
    z-index: 99;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
  }
    .box{
      width: 40%;
      background-color: deepskyblue;
      border-radius: 10px;
    }

    h4{
      background-color: seagreen;
      height: 5vh;
      line-height: 5vh;
      color: azure;
      text-indent: 1vh;
      border-radius: 10px 10px 0 0;
    }
    .box>div{
      height: 10vh;
      line-height: 10vh;
      text-align: center;
    }
      button{
        width: 100%;
        height: 5vh;
        border-radius:0 0 10px 10px ;
        border: 0;
      }


</style>
