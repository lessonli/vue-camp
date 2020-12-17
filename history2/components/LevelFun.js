export default {
  // render(h) { // h creatElement
  //   return h('h1', {
  //     on: {
  //       click() {
  //         alert('标题')
  //       }
  //     },
  //     attrs:{
  //       class: 'demo2'
  //     }
  //   }, '标题')
  // }

  // render() {
  //   /* html < 尖角  js变量 {}*/
  //   return <h1 onClick={ ()=> {alert('大客户牛批')} }>你好</h1>
  //
  // }

  /* 了解后就开始我们的封装*/

  props: {
    titles: {}
  },
  render() {
    let tag = "h" + this.titles
    return <tag onClick={()=>{alert('第二个例子')}}>{this.$slots.default}</tag>
  },

}