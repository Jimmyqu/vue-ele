// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mintUi from 'mint-ui' //mintUi
import 'mint-ui/lib/style.css' //mintUi 样式文件
import './mock/mockServer' //加载mockserver

import FastClick from 'fastclick'

//old 引入fastclick并绑定到body 解决移动端点击响应延迟0.3s的问题
// FastClick.attach(document.body)
//new 直接body设置touch-action 解决

Vue.config.productionTip = false

Vue.use(mintUi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //引入router注册
  store,  //引入store注册
  components: { App },
  template: '<App/>'
})
