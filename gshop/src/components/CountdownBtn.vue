<template>
    <div class="countdown-btn" :class="{'disable':!isCount}"   @click="countDown">
      {{typeof msg==='number'?msg+'s':'发送验证码'}}
    </div>
</template>

<script>

    export default {
        name: "countdown-btn",
        data:()=>{
            return {
              isCount:true,
              msg:'发送验证码'
            }
        },
        methods:{
          countDown(){
            if(this.isCount ){
              this.isCount=false;
              this.msg=3;
              let loop=setInterval(()=>{
                if(this.msg>0){
                  this.msg--
                }else if(this.msg===0){
                  this.msg='发送验证码';
                  this.isCount=true;
                  clearInterval(loop)
                }
              },1000);
            }
          }
        }
    }
</script>

<style scoped lang="less">
  .countdown-btn{
    position: absolute;
    top:7px;
    right: 5px;
    width: 35%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-align: center;
    color:#fff;
    font-size: 14px;
    background-color: seagreen;
  }
  .disable{
    background-color: slategray;
  }
</style>
