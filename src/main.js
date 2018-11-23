// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick';
// import VConsole from 'vconsole';
import Vant from 'vant';
// import 'vant/lib/vant-css/index.css';

import './styles/index.scss';
import './vux';
import { Toast } from 'vant';
import { Tab, Tabs } from 'vant';


Vue.use(Vant);
import router from './router'

Vue.config.productionTip = false

// 处理移动端click事件300毫秒延迟
FastClick.attach(document.body);

import * as filter from './filter'; // global filters
import './utils/bridge';
import { install } from './components/index'; // all global components
install(Vue);

// register global utility filters.
Object.keys(filter).forEach((key) => {
  Vue.filter(key, filter[key]);
});
// vsconsole
// const DEBUG = true;
// false 绿色的按钮消失
// if (DEBUG) {
//   const vconsole = new VConsole();
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
