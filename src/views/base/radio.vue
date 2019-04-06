<template>
  <div>
    <h3>基础类型</h3>
    <h-radio v-model="radio" native-value="One"></h-radio>
    <h-radio v-model="radio" native-value="Two"></h-radio>
    <h-radio v-model="radio" native-value="Disabled" :disabled="true"></h-radio>
    <h3>单选框组</h3>
    <h-radio-group v-model="radioGroup" radius="large" size="large">
      <h-radio native-value="One" :disabled="true"></h-radio>
      <h-radio native-value="Two"></h-radio>
      <h-radio native-value="Disabled" :disabled="true"></h-radio>
    </h-radio-group>
    <h3>按钮式单选框组</h3>
    <h5>基础样式</h5>
    <h-radio-group v-model="radioBtnGroup" >
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Disabled" :disabled="true"></h-radio-btn>
    </h-radio-group>
    <h5>阴影</h5>
    <h-radio-group v-model="radioBtnGroup" :shadow="true">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Disabled" :disabled="true"></h-radio-btn>
    </h-radio-group>
    <h5>圆角类型</h5>
    <h-radio-group v-model="radioBtnGroup" radius="small">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Three"></h-radio-btn>
    </h-radio-group>
    <h-radio-group v-model="radioBtnGroup" radius="large">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Three"></h-radio-btn>
    </h-radio-group>
    <h-radio-group v-model="radioBtnGroup" radius="circle">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Three"></h-radio-btn>
    </h-radio-group>
    <h5>大小</h5>
    <h-radio-group v-model="radioBtnGroup" size="large">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Three"></h-radio-btn>
    </h-radio-group>
    <h-radio-group v-model="radioBtnGroup">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Three"></h-radio-btn>
    </h-radio-group>
    <h-radio-group v-model="radioBtnGroup" size="small">
      <h-radio-btn native-value="One"></h-radio-btn>
      <h-radio-btn native-value="Two"></h-radio-btn>
      <h-radio-btn native-value="Three"></h-radio-btn>
    </h-radio-group>
    <h3>语义类型</h3>
    <h5>基础类型</h5>
    <h-radio v-model="radioSemantic" native-value="Default"></h-radio>
    <h-radio v-model="radioSemantic" native-value="Primary" semantic="primary"></h-radio>
    <h-radio v-model="radioSemantic" native-value="Success" semantic="success"></h-radio>
    <h-radio v-model="radioSemantic" native-value="Info" semantic="info"></h-radio>
    <h-radio v-model="radioSemantic" native-value="Warning" semantic="warning"></h-radio>
    <h-radio v-model="radioSemantic" native-value="Danger" semantic="danger"></h-radio>
    <h5>按钮类型</h5>
    <h-radio-group v-model="radioBtnGroup">
      <h-radio-btn native-value="Default"></h-radio-btn>
      <h-radio-btn native-value="Primary" semantic="primary"></h-radio-btn>
      <h-radio-btn native-value="Info" semantic="info"></h-radio-btn>
      <h-radio-btn native-value="Success" semantic="success"></h-radio-btn>
      <h-radio-btn native-value="Warning" semantic="warning"></h-radio-btn>
      <h-radio-btn native-value="Danger" semantic="danger" icon="fa fa-spinner fa-spin"></h-radio-btn>
    </h-radio-group>

    <h3>参数示例</h3> 
    <props-table :data="props" caption="单选框参数"/>
    <props-table :data="groupProps" caption="单选框组参数"/>
    <props-table :data="groupEvents" caption="单选框组事件"/>
  </div>
</template>

<script>

import propsTable from '@/components/propsTable'

export default {
  name: 'radio',

  components: {
    propsTable
  },

  data () {
    return {
      radio: 'Disabled',
      radioGroup: 'One',
      radioBtnGroup: 'One',
      radioSemantic: 'Default',

      props: [{
        para: 'v-model',
        native: 'false',
        desc: 'Radio的绑定值',
        type: 'String/Number/Boolean',
        option: '-',
        default: '-'
      }, {
        para: 'native-value',
        native: 'true',
        desc: ' Radio的原生value属性',
        type: 'String/Number/Boolean',
        option: '-',
        default: '-'
      }, {
        para: 'disabled',
        native: 'true',
        desc: ' Radio的原生disabled属性',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'primary、success、info、warning、danger、text',
        default: '-'
      }, {
        para: 'icon',
        native: 'false',
        desc: '图标(推荐使用font-awesome的图标库)',
        type: 'String',
        option: '-',
        default: '-'
      }],

      groupProps: [{
        para: 'v-model',
        native: 'false',
        desc: 'Radio的绑定值',
        type: 'String/Number/Boolean',
        option: '-',
        default: '-'
      }, {
        para: 'disabled',
        native: 'true',
        desc: ' Radio的原生disabled属性',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'radius',
        native: 'false',
        desc: '圆角(按钮式单选框组有效)',
        type: 'String',
        option: 'small、large、circle',
        default: '-'
      }, {
        para: 'size',
        native: 'false',
        desc: '尺寸(按钮式单选框组有效)',
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
      }],

      groupEvents: [{
        para: 'change',
        native: 'false',
        desc: 'v-model值变化监听事件',
        type: 'Function(newValue)',
        option: '-',
        default: '-'
      }]
    }
  }
}
</script>

