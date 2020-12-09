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

    <!-- <Son2 :title.sync = "title"></Son2> -->
    <!-- <Son2 :list.sync = 'list'></Son2> -->
    <Son1 :value = 'value' @input = 'dedede' @say = say></Son1>
    <Son2 name = "lesson" age = 10   @eat = eat></Son2>
    <Son1 ref="Son2Ref"></Son1>
  </div>
</template>
/* 如果希望数据被儿子公用，不希望来回传递  react context consumer */
/* 注入数据 , 可以随便写 ，可以把父组件注入 Provide */
/* 尽量不要在业务层 使用 避免数据注入混乱 推荐封装一些库的时候使用*/

/* eventBus 定义到了全局上  */
<script>
import Son1 from "./Son1";
import Son2 from "./Son2";
export default {
  name: "parents",
  components: {
    Son1,
    Son2
  },
  /* 暴露 把自己暴露出去 */
  provide() {
    return {
      parent: this.title // 提供一个parent 实例 供下级组件 调用
    }
  },
  data() {
    return {
      value: 500,
      mny: 100,
      title: 'demo',
      list: ['西游', '海王'],
      
    }
  },
  methods: {
    // change(value) {
    //   this.mny = value
    // }
    dedede(value) {
      this.value = value
    },
    say(value) {
      console.log(value)
    },
    eat(value) {
      console.log("我在吃"+value)
    }
  },
  mounted() {
    this.$broadcast('say','我他妈真帅')
  },
}
</script>

<style scoped>

</style>