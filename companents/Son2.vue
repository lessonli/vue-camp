<template>
  <div>
    title: {{title}}
   <!--  <button @click="update">修改title</button> -->
    <ul v-for="(item, idx) in list" :key="idx">
      <li>{{item}}</li>
    </ul>
    <button @click="clickPush"> 修改</button>

    <div>
      上级传过来的所有属性
      <!-- $attrs 表示的属性的集合 -->
      {{$attrs}}
      <!-- 表示方法的集合 -->
      {{$listeners}}
      <Grandson2Vue v-bind="$attrs" v-on="$listeners"></Grandson2Vue>
    </div>
  </div>
</template>

<script>
import Grandson2Vue from './Grandson2.vue'

export default {

  name: "Son2",
  inheritAttrs: false, // $attrs 接受的属性会自定义在dom 属性上, 该配置表示继承的属性不显示
  components: {
    Grandson2Vue
  },
  props: {
    title: {
      // type: "String",
      default: 'haha'
    },
    list: {
      type: Array
    }
  },
  created() {
    console.log(this.list)
  },
  methods: {
    update() {
      this.$emit('update:title', 'Son2测试')
    },
    clickPush() {
      /* 只会自己赋值 */
      this.$emit('update:list', [1,2,3])
    }
  }
}
</script>

<style scoped>

</style>