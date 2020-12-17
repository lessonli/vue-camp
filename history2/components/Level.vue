<template>

  <div>
    <h1 v-if="title == 1">
      <slot></slot>
    </h1>
    <h2 v-if="title == 2">
      <slot></slot>
    </h2>
    <h3 v-if="title == 3">
      <slot></slot>
    </h3>
    <h4 v-if="title == 4">
      <slot></slot>
    </h4>
    <h5 v-if="title == 5">
      <slot></slot>
    </h5>

  </div>
</template>

<script>
export default {
  name: "Level",
  props: {
    title: {}
  }
}
</script>

<style scoped>

</style>