<template>
  <div>
    孙子2 {{$attrs}}
  </div>
</template>

<script>
export default {
  name: "Grandson2",
  mounted() {
    this.$listeners.eat('米饭')
  },
}
</script>

<style scoped>

</style>