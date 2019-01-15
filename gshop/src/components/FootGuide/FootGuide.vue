<template>
  <div>
    <ul class="top-border-1px">
      <li>
        <router-link to="/home">
          <p><i class="iconfont icon-food"></i></p>
          <span>主页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <p><i class="iconfont icon-dingdan"></i></p>
          <span>订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/search">
          <p><i class="iconfont icon-search"></i></p>
          <span>搜索</span>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <p><i class="iconfont icon-user"></i></p>
          <span>设置</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script type="text/ecmascript-6">

</script>

<style lang="less" scoped>
  @import "../../common/less/mixins";

  ul{
    .top-border-1px(#e4e4e4);
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #fff;
    li{
      width: 25%;
      float:left;
      text-align: center;
      .router-link-active{
        color: red;
      }
      a{
        color: slategray;
        p{
          margin-bottom: 5px;
        }

      }
    }
    &:after{
      content: '';
      display: block;
      clear: both;
    }
  }
</style>
