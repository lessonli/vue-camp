<template>
  <Table :columns="columns" :data="data"></Table>
</template>
<script>
export default {
  /* iview 表格的小操作*/
  data() {
    return {
      /* 点击哪个 哪个显示输入框*/
      currentIndex: -1,
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address',
          render: this.render
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    render(h, {row, column, index}) {
      // console.log(row, column, index)
      return (
          <div onClick={this.handleChangeIndex.bind(this, index)}>
            {/* on-input 的参数并不是事件对象 而是value*/}
            {this.currentIndex == index ? <Input value={row[column.key]} on-input={(value) => {
              this.handleChange(value,row, column)
            }} onOn-enter = {(value)=> {this.enter(index,row, column, value)} }></Input> : <div>{row[column.key]}</div>}
          </div>

      )
    },
    handleChangeIndex(index, e) {
      // console.log(index)
      this.currentIndex = index
      /* 渲染完之后 获取焦点 因此是下一个进程*/
      this.$nextTick(() => {
        e.currentTarget.getElementsByTagName('input')[0].focus()
      })
    },
    handleChange(value,row, column) {
     row[column['key']] = value
    },
    enter(index, row,column, value) {
      /*这个value 则是事件对象*/
      console.log(value, 'de');
      console.log(row);
      this.data.splice(index,1,row)
      this.currentIndex = -1

    }
  }
}
</script>
