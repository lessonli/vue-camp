<template>
  <div>
    <div> {{value}}</div>
    
    <button @click="change(400)">  修qq改</button>

    <div>
      查看parent 提供的数据 {{this.parent}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Grandson1",
  /* 注入 */
  inject:[
    "parent" // 这样相当于 接收 parent 组件的实例 
  ],
  props: {
    value: {
      type: Number
    }
  },
  created() {
    console.log(this.value, 'sunz')
  },
  methods: {
    change() {
      // this.$parent.$emit('input', value)
       /* 不断向上找父组件触发 */
      this.$dispatch('input', 22222)  
    }
    // dispatch 向上通知
  }
}
</script>

<style scoped>

</style>