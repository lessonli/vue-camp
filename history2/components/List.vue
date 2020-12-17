<template>
  <div>
    <template v-for="(item, idx) in data" >
      <li :key="idx" v-if="!render"> {{item}}</li>
<!-- 需求更改 不用 li 标签  span p ....-->
<!-- 函数式组件 灵活使用标签-->
      <ListItem v-else :key="`a${idx}`"  :render="render" :item="item"></ListItem>
    </template>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "List",
  components: {
    ListItem
  },
  props: {
    data : {
      type: Array,
      default: ()=>[]
    },
    render: {
      type: Function
    }
  }
}
</script>

<style scoped>

</style>
