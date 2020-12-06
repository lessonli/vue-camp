<template>
  <div>
    title: {{title}}
    <button @click="update">修改title</button>
  </div>
</template>

<script>
export default {
  name: "Son2",
  props: {
    title: {
      // type: "String",
      default: 'haha'
    }
  },
  methods: {
    update() {
      this.$emit('update:title', 'Son2测试')
    }
  }
}
</script>

<style scoped>

</style>