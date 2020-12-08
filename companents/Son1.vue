<template>
  <div>
    Son1 {{value}}
    <button @click="change">修改</button>
    <Grandson1Vue :value = 'value'></Grandson1Vue>
  </div>
</template>

<script>
import Grandson1Vue from './Grandson1.vue'
export default {
  name: "Son1",
  components: {
    Grandson1Vue
  },
  props: {
    value: {
      default: 1,
      type: Number
    }
  },
  methods: {
    // change() {
    //   this.$emit('input', 30)
    // },
    change(value) {
      this.$emit('update:value', value)
    }

  }
}
</script>

<style scoped>

</style>