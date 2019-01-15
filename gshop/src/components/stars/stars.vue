<template>
    <div>
      <span class="bg-container">
          <i v-for="i in 5" class="iconfont icon-xingzhuang-xingxing"></i>
         <span class="active-container" :style="{width:num*20+'%'}">
          <i v-for="i in 5" class="active iconfont icon-ditu-xing"></i>
        </span>
      </span>
      <span>{{num}}分</span>
    </div>
</template>

<script>
    export default {
        name: "stars",
        props:{
          num:Number
        }
    }
</script>

<style scoped lang="less">
  div{
    display: inline-block;
  }
  i{
    font-size: 14px;
  }
  .bg-container{
    position: relative;
    display: inline-block;
    i{
      color: #7e8c8d;
    }
    .active-container{
      position: absolute;
      top: 0;
      overflow: hidden;
      .active{
        color: orange;
      }
    }
  }

</style>
