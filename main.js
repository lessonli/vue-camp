import Vue from 'vue';
// import App1 from './app1'
// import App2 from './history2/app2';

import iView from "iview";
import 'iview/dist/styles/iview.css'
import app from "./app";
Vue.use(iView)
/* eslint-disable-line no-unused-vars */
/**
  *
  * @param {*} eventName 事件名
  * @param {*} value 值
  * @description: 向上发布查找事件
  */
Vue.prototype.$dispatch = function (eventName, value) {
  let parent = this.$parent;
  while (parent) {
    parent.$emit(eventName, value);
    /* 不断向上找父组件 */
    parent = parent.$parent;
  }
};
/**
  *
  * @param {*} eventName 事件名
  * @param {*} value 值
  * @description 向下广播事件 所有子组件都执行
  */
Vue.prototype.$broadcast = function (eventName, value) {
  const broadcast = (children) => {
    children.forEach((child) => {
      child.$emit(eventName, value);
      if (child.$children) {
        broadcast(child.$children);
      }
    });
  };
  broadcast(this.$children);
};
/* eventBus 等于公开了一个 $on $emit 供全局调用 发布订阅 */
Vue.prototype.$bus = new Vue();
const Vm = new Vue({
  created() {
    console.log(Vm);
  },
  el: '#app',
  // render: h => h(App1)
  render: (h) => h(app),
});

console.log(Vm);
