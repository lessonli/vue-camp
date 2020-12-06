<template>
  <div>
    父组件钱数: {{ mny }}
<!--    <Son1 :value='mny' @update="change"></Son1>-->
    <!--
      v-model 绑定子组件 原理也是 绑定input 事件 只对 value change
    -->

    <Son1 v-model='mny'></Son1>
<!-- 默认会解析为 下面的 sync 的写法 语法糖  属性是固定的 @update:value 2.3.0 新增-->
<!--    https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6  -->
<!--    <Son1 :value = "mny" @update:value = "(value) => this.mny = value "></Son1>-->
    <Son1 :value.sync = "mny"></Son1>

    <Son2 :title.sync = "title"></Son2>

  </div>
</template>

<script>
import Son1 from "./Son1";
import Son2 from "./Son2";
export default {
  name: "parents",
  components: {
    Son1,
    Son2
  },
  data() {
    return {
      mny: 100,
      title: 'demo'
    }
  },
  methods: {
    // change(value) {
    //   this.mny = value
    // }
  }
}
</script>

<style scoped>

</style>