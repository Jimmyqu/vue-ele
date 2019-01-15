<template>
  <div class="login-container">
    <div class="login-header">
      <span class="back-btn" @click="goback">
        <i class="iconfont icon-arrow-left"></i>
      </span>
    </div>
    <h2>硅谷外卖</h2>
    <div class="form-container">
      <ul>
        <li :class="{on:sms}" @click="change">短信登陆</li>
        <li :class="{on:!sms}" @click="change">密码登陆</li>
      </ul>
      <form  v-if="sms">
        <input v-model="formData.phoneNum" class="border-1px-other" type="text" placeholder="手机号">
        <div id='checkNum'>
          <input v-model="formData.checkNum" class="border-1px-other" type="text" placeholder="验证码">
          <!--<button id="btn-checkNum">发送验证码</button>-->
          <CountDownBtn>
          </CountDownBtn>
        </div>

        <p>提示登陆时自动注册，代表已经同意 <a href="">《用户服务协议》</a></p>
        <button @click="submitPhone">手机登陆</button>
        <p>关于我们</p>
      </form>
      <form  v-if="!sms">
        <input v-model="formData.accountNum" class="border-1px-other" type="text" placeholder="账号">
        <div id="password">
          <input v-model="formData.password" class="border-1px-other" :type="showPassWord?'password':'text'" placeholder="密码">
          <SwitchBtn>
          </SwitchBtn>
        </div>
        <div>
          <input style="display: inline-block;width: 60%" v-model="formData.verifiCode" class="border-1px-other" type="text" placeholder="验证码">
          <img style="height: 40px;display: inline-block;width:38%;vertical-align: middle" src="./download.svg" alt="">
        </div>

        <p>提示登陆时自动注册，代表已经同意 <a href="">《用户服务协议》</a></p>
        <button @click="submitAccount">账号登陆</button>
        <p >关于我们</p>

        <!--上传测试-->
        <!--<input ref="file" type="file">-->
        <!--<input type="submit" value="upload" @click="upload">-->

      </form>
    </div>
    <transition name="fade">
      <AlertCom  :show="this.alert.show" :text="this.alert.data" v-show="this.alert.data" @closeTip="closeTip">
      </AlertCom>
    </transition>

  </div>
</template>


<script type="text/ecmascript-6">
  import AlertCom from '../../components/AlertCom'
  import CountDownBtn from '../../components/CountdownBtn'
  import SwitchBtn from '../../components/SwitchBtn'

  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "login",
    components:{
      CountDownBtn,
      SwitchBtn,
      AlertCom
    },
    data:()=>{
      return {
        sms:true,
        alert:{
          show:false,
          data:''
        },
        formData:{
          phoneNum:'',
          checkNum:'',
          accountNum:'',
          password:'',
          verifiCode:''
        }
      }
    },
    methods:{
      goback(){
        // console.log(this.$route) //当前路由
        // console.log(this.$router)  //实例路由对象
        this.$router.go(-1)
      },
      closeTip(){  //分发到子组件的事件
        this.alert.show=false;
        this.alert.data='';
      },
      alertMethods(msg){  //父组件控制弹出框
        this.alert.show=true;
        this.alert.data=msg;
      },
      change(e){
        if(e.target.className==='on'){
          return
        }
        this.sms?this.sms=false:this.sms=!this.sms
      },
      checkPhoneNum(){
        return /^1[34578]\d{9}$/.test(this.formData.phoneNum)
      },
      checkAccountNum(){
        return /^[a-zA-Z0-9]\w{7,9}$/.test(this.formData.accountNum)
      },
      submitPhone(){
        // this.getLocation()
        if(this.checkPhoneNum()){
          this.alertMethods('succ')
          this.$store.dispatch('async_userInfo')

          //跳转到setting页面
          this.$router.replace('setting')

        }else {
          this.alertMethods('手机号不正确')
        }


    },
      submitAccount(){
        if(this.checkAccountNum()){
          this.alertMethods('提交成功')
        }else {
          this.alertMethods('账号格式错误')
        }
      },
      // ,
      // getLocation() {
      //   if (navigator.geolocation)
      //   {
      //     navigator.geolocation.getCurrentPosition(this.showPosition);
      //   }
      //   console.log("Geolocation is not supported by this browser.")
      // },
      // showPosition(position) {
      //    console.log('latitude is '+position.coords.latitude +
      //      ': longitude is '+position.coords.longitude)
      // }


      //上传测试
      // upload(){
      //   let data = new FormData()
      //   data.append('file',this.$refs.file.files[0])
      //   axios.post('https://www.easy-mock.com/mock/5a769ac93c4ca20b4f1dd692/example_copy/upload',data).
      //   then(res=>console.log(res))
      // }


    },
    computed:{
      ...mapState(['showPassWord'])
    }
  }
</script>

<style lang="less">

@import "../../common/less/mixins";

/*组件动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.login-container{
  margin-top: -45px;
  .login-header{
    height: 45px;
    line-height: 45px;
    .back-btn{
      display: inline-block;
      width: 45px;
      height: 45px;
      text-align: center;
      i{
        font-size: 25px;
      }
    }
  }
  h2{
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    color: #02a774;
  }
  .form-container{
    width: 80%;
    margin: 0 auto;
    ul{
      height: 40px;
      line-height: 40px;
      display: flex;
      .on{
        color:#02a774;
        border-bottom: 2px seagreen solid;
      }
      li{
        flex: 1;
        text-align: center;
      }
    }
    form{

      #checkNum{
        position: relative;
      }
      #password{
        position: relative;
      }
      input:focus{
        /*background-color: orange;*/
        box-shadow: 0px 0px 1px 0px deepskyblue inset;
        outline:none
      }
      input{
        width: 100%;
        margin-top: 5px;
        height: 40px;
        text-indent: 10px;
        border-radius: 5px;

      }
      button{
        width: 100%;
        height: 40px;
        background-color: #02a774;
        border: 0;
        border-radius: 5px;
        color:#fff;
        outline:none
      }
      p:nth-child(5){
        text-align: center;
      }
      p{
        margin: 10px 0;
      }
    }
  }

}
</style>
