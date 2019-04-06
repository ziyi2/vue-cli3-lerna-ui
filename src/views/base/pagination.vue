<template>
  <div>
    <h3>分页</h3>
    <h-pagination
    @on-page-change="handleChange"
    @on-page-size-change="handleSizeChange"
    :total="total"
    :current-page="currentPage"
    :page-sizes="[20, 30, 40]"
    :page-size="20"
    show-total show-jump
    ></h-pagination>
    <props-table :data="props" caption="分页属性"/>
  </div>
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'Pagination',
  components: {
    propsTable
  },
  data () {
    return {
      total: 2000,
      currentPage: 5,
      props: [{
        para: 'total',
        native: 'false',
        desc: '数据总数',
        type: 'Number',
        option: '-',
        default: '-'
      }, {
        para: 'current-page',
        native: 'false',
        desc: '当前页码',
        type: 'Number',
        option: '-',
        default: '1'
      }, {
        para: 'page-sizes',
        native: 'false',
        desc: '每页条数切换的配置',
        type: 'Array',
        option: '-',
        default: '20'
      }, {
        para: 'page-size',
        native: 'false',
        desc: '每页条数 ',
        type: 'Number',
        option: '-',
        default: '300px'
      }, {
        para: 'show-total',
        native: 'false',
        desc: '显示总数',
        type: 'Boolean',
        option: '-',
        default: 'false'
      }, {
        para: 'show-jump',
        native: 'false',
        desc: '可以快速切换到某一页',
        type: 'Boolean',
        option: '-',
        default: 'false'
      }]
    }
  },
  methods: {
    handleChange (val) {
      console.log(`当前页码：${val}`) // eslint-disable-line
    },
    handleSizeChange (val) {
      console.log(`当前${val}条/页`) // eslint-disable-line
    }
  }
}
</script>
