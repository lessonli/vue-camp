<template>
  <div>
    第二个例子
    <Level title="1">
      这是标题1
    </Level>
<!--    <Level title="2">-->
<!--      这是标题2-->
<!--    </Level>-->
<!--    <Level title="3">-->
<!--      这是标题3-->
<!--    </Level>-->
<!--    <Level title="4">-->
<!--      这是标题4-->
<!--    </Level>-->
<!--    <Level title="5">-->
<!--      这是标题5-->
<!--    </Level>-->

    <LevelFun titles = '1'>标题1 第二个例子 </LevelFun>
    <LevelFun titles = '2'>标题1 第二个例子 </LevelFun>
    <LevelFun titles = '3'>标题1 第二个例子 </LevelFun>
    <LevelFun titles = '4'>标题1 第二个例子 </LevelFun>
    <LevelFun titles = '5'>标题1 第二个例子 </LevelFun>
  </div>
</template>

<script>
/*实现一个标题组件 h1--h6*/
/* 此时 我想要 实现 h1 -- h6 就要写 6 个 可以考虑 函数式组件*/
/* 函数组件 没有模板 必须要有 render*/
import Level from "./components/Level";
import LevelFun from "./components/LevelFun";

export default {
  name: "app2",
  components: {
    Level,
    LevelFun
  }
}
</script>

<style scoped>

</style>