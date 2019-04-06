<template>
  <div>
    <h3>基础类型</h3>
    <h-input type="text" v-model="baseInputValue"></h-input>
    <h-input type="text" v-model="baseInputValue" :disabled="true"></h-input>
    <h-input type="textarea" v-model="baseInputValue"></h-input>
    <h-input type="textarea" v-model="baseInputValue" :disabled="true"></h-input>
    <h3>语义类型</h3>
    <h-input type="text" v-model="baseInputValue" semantic="primary"></h-input>
    <h-input type="text" v-model="baseInputValue" semantic="success"></h-input>
    <h-input type="text" v-model="baseInputValue" semantic="info"></h-input>
    <h-input type="text" v-model="baseInputValue" semantic="warning"></h-input>
    <h-input type="text" v-model="baseInputValue" semantic="danger"></h-input>
    <h3>width</h3>
    <div>
      <h-input type="text" v-model="baseInputValue"  width="600" :width-full="true"></h-input>
      <h-input type="textarea" v-model="baseInputValue"  width="600" ></h-input>
    </div>
    <h3>圆角</h3>
    <h-input type="text" v-model="baseInputValue" radius="small" ></h-input>
    <h-input type="text" v-model="baseInputValue" radius="large" ></h-input>
    <h-input type="text" v-model="baseInputValue" radius="circle" ></h-input>
    <h-input type="textarea" v-model="baseInputValue" radius="small" ></h-input>
    <h-input type="textarea" v-model="baseInputValue" radius="large" ></h-input>
    <h-input type="textarea" v-model="baseInputValue" radius="circle" ></h-input>
    <h3>尺寸</h3>
    <h-input type="text" v-model="baseInputValue" size="large" ></h-input>
    <h-input type="text" v-model="baseInputValue"></h-input>
    <h-input type="text" v-model="baseInputValue" size="small" ></h-input>
    <h3>图标</h3>
    <h5>信息图标</h5>
    <h-input type="text" v-model="baseInputValue" left-icon="fa fa-envelope" ></h-input>
    <h5>功能图标</h5>
    <h-input type="text" v-model="baseInputValue" icon="fa fa-search" :icon-click="iconClickEvent"></h-input>

    <h3>参数示例</h3>
    <props-table :data="props" caption="输入框属性" />
    <props-table :data="events" caption="输入框事件"/>
  </div>
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'input',
  components: {
    propsTable
  },
  data () {
    return {
      baseInputValue: '',
      props: [{
        para: 'v-model',
        native: 'false',
        desc: 'Input的绑定值',
        type: 'String/Number',
        option: '-',
        default: '-'
      }, {
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'default、primary、success、info、warning、danger、text',
        default: '-'
      }, {
        para: 'width',
        native: 'false',
        desc: '宽度px数',
        type: 'String',
        option: '-',
        default: '200'
      }, {
        para: 'width-full',
        native: 'false',
        desc: '宽度100%',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'radius',
        native: 'false',
        desc: '圆角',
        type: 'String',
        option: 'small、large、circle',
        default: '-'
      }, {
        para: 'size',
        native: 'false',
        desc: '尺寸',
        type: 'String',
        option: 'small、large',
        default: '-'
      }, {
        para: 'shadow',
        native: 'false',
        desc: '阴影',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'left-icon',
        native: 'false',
        desc: '左侧信息图标',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'icon',
        native: 'false',
        desc: '右侧功能图标',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'icon-click',
        native: 'false',
        desc: '功能图标点击事件',
        type: 'Function(e)',
        option: '-',
        default: '-'
      }, {
        para: 'autocomplete',
        native: 'true',
        desc: '自动补全',
        type: 'String',
        option: 'on、off',
        default: 'off'
      }, {
        para: 'maxlength',
        native: 'true',
        desc: '设置最大长度',
        type: 'Number',
        option: '-',
        default: '-'
      }, {
        para: '...',
        native: 'true',
        desc: '未列出的一些原生属性支持',
        type: 'String',
        option: '-',
        default: '-'
      }],

      events: [{
        para: 'focus',
        native: '-',
        desc: 'focus事件',
        type: 'Function',
        option: '-',
        default: '-'
      }, {
        para: 'blur',
        native: '-',
        desc: 'blur事件',
        type: 'Function',
        option: '-',
        default: '-'
      }, {
        para: 'change',
        native: '-',
        desc: 'change事件',
        type: 'Function(newValue)',
        option: '-',
        default: '-'
      }]
    }
  },

  methods: {
    iconClickEvent () {
      console.log('icon click') // eslint-disable-line
    }
  }
}
</script>

