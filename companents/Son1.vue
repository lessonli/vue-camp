<template>
  <div>
    Son1 {{value}}
    <button @click="change">修改</button>
  </div>
</template>

<script>
export default {
  name: "Son1",
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
    change() {
      this.$emit('update:value', 30)
    }

  }
}
</script>

<style scoped>

</style>