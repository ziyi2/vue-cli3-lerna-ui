<template>
    <div >
      <h3>表格</h3>
      <div class="table" >
        <h-table  
          :data="tableDate"
           align="left"
           caption="this is table"
           :border="false"
           :shadow="false"
           :hover="true"
           :row-style="rowStyle"
           > 
          <h-table-column 
            prop="name"
            label="姓名"
            :width="300"
            :sortable="true">
          </h-table-column>
          <h-table-column 
            prop="age"
            label="年龄"
            :width="300"
            :sortable="true">
          </h-table-column>  
          <h-table-column 
            prop="job"
            label="工作"
            :ellipsis="true"
            :width="300">
          </h-table-column>
          <h-table-column 
            prop="address"
            label="地址"
             :ellipsis="true"
            :width="300">
          </h-table-column>
        </h-table>
      </div>
      <h3>参数示例</h3> 
      <props-table :data="tableProps" caption="表格参数"/>
      <props-table :data="columnProps" caption="表格列参数"/>
    </div>  
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'table',
  components: {
    propsTable
  },
  data () {
    return {
      tableDate: [{
        age: '22',
        name: 'ziyi2'
      }, {
        name: 'ziyi3',
        age: '33',
        job: 'web'
      }, {
        name: 'ziyi10',
        age: '38',
        job: 'web'
      }, {
        name: 'ziyi5',
        age: '34',
        job: '如果中文文本溢出，如果中文文本溢出，如果中文文本溢出，如果中文文本溢出'
      }, {
        name: 'ziyi8',
        age: '34',
        job: 'if english overflow, if english overflow, if english overflow,',
        address: 'Hangzhou'
      }],

      tableProps: [{
        para: 'data',
        native: 'false',
        desc: '表格数据(参数必须)',
        type: 'Array',
        option: '-',
        default: '-'
      }, {
        para: 'shadow',
        native: 'false',
        desc: '阴影',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'hover',
        native: 'false',
        desc: '鼠标停留高亮当前行',
        type: 'Boolean',
        option: 'true、false',
        default: 'false'
      }, {
        para: 'stripe',
        native: 'false',
        desc: '是否显示条纹',
        type: 'Boolean',
        option: 'true、false',
        default: 'false'
      }, {
        para: 'border',
        native: 'false',
        desc: '是否显示边框',
        type: 'Boolean',
        option: 'true、false',
        default: 'false'
      }, {
        para: 'grid',
        native: 'false',
        desc: '是否显示网格',
        type: 'Boolean',
        option: 'true、false',
        default: 'false'
      }, {
        para: 'align',
        native: 'false',
        desc: '文本对齐方式',
        type: 'String',
        option: 'left、right、center',
        default: '-'
      }, {
        para: 'caption',
        native: 'false',
        desc: '标题信息',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'caption-side',
        native: 'false',
        desc: '标题位置',
        type: 'String',
        option: 'top、bottom',
        default: '-'
      }, {
        para: 'caption-align',
        native: 'false',
        desc: '标题对齐方式',
        type: 'String',
        option: 'left、right、center',
        default: '-'
      }, {
        para: 'head-style',
        native: 'false',
        desc: '定义当前表头的样式',
        type: 'String',
        option: 'default、success、info、warning、danger',
        default: '-'
      }, {
        para: 'row-style',
        native: 'false',
        desc: '自定义当前行的样式',
        type: 'Function(row, index)、String',
        option: 'success、info、warning、danger',
        default: '-'
      }],

      columnProps: [{
        para: 'prop',
        native: 'false',
        desc: '表格数据对应列内容的字段名',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'label',
        native: 'false',
        desc: '列内容',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'width',
        native: 'true',
        desc: '列宽',
        type: 'String、Number',
        option: '-',
        default: '-'
      }, {
        para: 'ellipsis',
        native: 'false',
        desc: '当前列文本溢出处理',
        type: 'Boolean',
        option: 'true、false',
        default: 'false'
      }, {
        para: 'sortable',
        native: 'false',
        desc: '是否对当前列进行排序',
        type: 'Boolean',
        option: 'true、false',
        default: 'false'
      }, {
        para: 'custom-class',
        native: 'false',
        desc: '自定义class',
        type: 'String',
        option: '-',
        default: '-'
      }]
    }
  }
}
</script>


<style scoped>

.table {
  padding: 16px;
}

</style>

