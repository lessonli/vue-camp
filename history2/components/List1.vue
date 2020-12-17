<template>
  <div>
    <div v-for="(item, idx) in data"  :key="idx">
      <slot :item="item" :a="1">   </slot>
    </div>
  </div>
</template>

<script>


export default {
  name: "List",
  props: {
    data : {
      type: Array,
      default: ()=>[]
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
