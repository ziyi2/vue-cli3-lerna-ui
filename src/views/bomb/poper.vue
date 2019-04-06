<template>
    <div>
      <h3>弹出框</h3>
      <h-poper radius="small" placement="left" max-width="400">
         <h-table 
          slot="content" 
          :data="tableDate"
           align="left"
           caption="this is table"
           :hover="true"
           > 
          <h-table-column 
            prop="name"
            label="姓名"
            :width="100"
            :sortable="true">
          </h-table-column>
          <h-table-column 
            prop="age"
            label="年龄"
            :width="100"
            :sortable="true">
          </h-table-column>  
          <h-table-column 
            prop="job"
            label="工作"
            :ellipsis="true"
            :width="100">
          </h-table-column>
          <h-table-column 
            prop="address"
            label="地址"
             :ellipsis="true"
            :width="100">
          </h-table-column>
        </h-table>
        <h-btn slot="trigger">click</h-btn>
      </h-poper>

      <h-poper radius="small" placement="right" max-width="400" trigger="hover">
        <h-table 
          slot="content" 
          :data="tableDate"
           align="left"
           caption="this is table"
           :hover="true"
           > 
          <h-table-column 
            prop="name"
            label="姓名"
            :width="100"
            :sortable="true">
          </h-table-column>
          <h-table-column 
            prop="age"
            label="年龄"
            :width="100"
            :sortable="true">
          </h-table-column>  
          <h-table-column 
            prop="job"
            label="工作"
            :ellipsis="true"
            :width="100">
          </h-table-column>
          <h-table-column 
            prop="address"
            label="地址"
             :ellipsis="true"
            :width="100">
          </h-table-column>
        </h-table>
        <h-btn slot="trigger">hover</h-btn>
      </h-poper>
     <h-poper radius="small" placement="right" max-width="200" trigger="click" ref="poper">
        <div slot="content">
          <p>这是一个poper</p>
          <h-btn semantic="text" @click="hide">取消</h-btn>
          <h-btn semantic="primary" radius="small" size="small" @click="hide">确定</h-btn>  
        </div>
        <h-btn slot="trigger">click</h-btn>
      </h-poper>
      <h3>参数示例</h3> 
      <props-table :data="props" caption="弹出框属性"/>
      <props-table :data="eventProps" caption="弹出框事件"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'poper',

  components: {
    propsTable
  },

  data () {
    return {

      poperVisible: false,

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

      props: [{
        para: 'trigger',
        native: 'false',
        desc: '触发类型',
        type: 'String',
        option: 'click、hover',
        default: 'click'
      }, {
        para: 'placement',
        native: 'false',
        desc: '显示位置',
        type: 'String',
        option: 'top、right、left、bottom',
        default: 'false'
      }, {
        para: 'radius',
        native: 'false',
        desc: '圆角',
        type: 'String',
        option: 'small、large',
        default: '-'
      }, {
        para: 'delay',
        native: 'false',
        desc: '显示延时(单位ms)',
        type: 'Number',
        option: '-',
        default: '0'
      }, {
        para: 'content',
        native: 'false',
        desc: '显示内容',
        type: 'String',
        option: 'top、right、left、bottom',
        default: 'right'
      }, {
        para: 'offset',
        native: 'false',
        desc: 'tooltip主体相对于当前位置的偏移量(谨慎使用)',
        type: 'Object',
        option: 'offset.left, offset.right, Number',
        default: '-'
      }, {
        para: 'arrow-offset',
        native: 'false',
        desc: 'tooltip箭头相对于当前位置的偏移量(谨慎使用)',
        type: 'Object',
        option: 'arrowOffset.left, arrowOffset.right, Number',
        default: '-'
      }, {
        para: 'size',
        native: 'false',
        desc: '尺寸',
        type: 'String',
        option: 'small、large',
        default: '-'
      }, {
        para: 'max-width',
        native: 'false',
        desc: '最大宽度(多余内容自动换行)',
        type: 'String',
        option: '-',
        default: '300px'
      }],

      eventProps: [{
        para: 'open',
        native: 'false',
        desc: 'tooltip打开时触发',
        type: 'Function',
        option: '-',
        default: '-'
      }, {
        para: 'close',
        native: 'false',
        desc: 'tooltip关闭时触发',
        type: 'Function',
        option: '-',
        default: '-'
      }]
    }
  },

  methods: {
    hide () {
      this.$refs.poper.hidePoper()
    }
  }
}
</script>



