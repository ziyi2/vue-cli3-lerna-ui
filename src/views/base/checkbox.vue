<template>
    <div>
      <h3>基础类型</h3>
      <h-checkbox v-model="checkboxBase" native-value="One" :disabled="true"></h-checkbox>
      <h-checkbox v-model="checkboxBase" native-value="Two"></h-checkbox>
      <h-checkbox v-model="checkboxBase" native-value="Three"></h-checkbox>
      <h3>多选框组</h3>
      <h-checkbox-group v-model="checkboxGroup" :disabled="true">
        <h-checkbox native-value="One" :disabled="true"></h-checkbox>
        <h-checkbox native-value="Two"></h-checkbox>
        <h-checkbox native-value="Three"></h-checkbox>
      </h-checkbox-group>
      <h3>按钮式多选框组</h3>
      <h5>基础样式</h5>
      <h-checkbox-group v-model="checkboxBtn" >
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Disabled" :disabled="true"></h-checkbox-btn>
      </h-checkbox-group>
      <h5>阴影</h5>
      <h-checkbox-group v-model="checkboxBtn" :shadow="true" >
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Disabled" :disabled="true"></h-checkbox-btn>
      </h-checkbox-group>
      <h5>圆角类型</h5>
      <h-checkbox-group v-model="checkboxRadius" radius="small">
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Three"></h-checkbox-btn>
      </h-checkbox-group>
      <h-checkbox-group v-model="checkboxRadius" radius="large">
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Three"></h-checkbox-btn>
      </h-checkbox-group>
      <h-checkbox-group v-model="checkboxRadius" radius="circle">
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Three"></h-checkbox-btn>
      </h-checkbox-group>
      <h5>大小</h5>
      <h-checkbox-group v-model="checkboxSize" size="large">
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Three"></h-checkbox-btn>
      </h-checkbox-group>
      <h-checkbox-group v-model="checkboxSize">
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Three"></h-checkbox-btn>
      </h-checkbox-group>
      <h-checkbox-group v-model="checkboxSize" size="small">
        <h-checkbox-btn native-value="One"></h-checkbox-btn>
        <h-checkbox-btn native-value="Two"></h-checkbox-btn>
        <h-checkbox-btn native-value="Three"></h-checkbox-btn>
      </h-checkbox-group>
      <h3>语义类型</h3>
      <h5>基础类型</h5>
      <h-checkbox v-model="checkboxSemantic" native-value="Default"></h-checkbox>
      <h-checkbox v-model="checkboxSemantic" native-value="Primary" semantic="primary"></h-checkbox>
      <h-checkbox v-model="checkboxSemantic" native-value="Success" semantic="success"></h-checkbox>
      <h-checkbox v-model="checkboxSemantic" native-value="Info" semantic="info"></h-checkbox>
      <h-checkbox v-model="checkboxSemantic" native-value="Warning" semantic="warning"></h-checkbox>
      <h-checkbox v-model="checkboxSemantic" native-value="Danger" semantic="danger"></h-checkbox>
      <h5>按钮类型</h5>
      <h-checkbox-group v-model="checkboxBtnGroup">
        <h-checkbox-btn native-value="Default"></h-checkbox-btn>
        <h-checkbox-btn native-value="Primary" semantic="primary"></h-checkbox-btn>
        <h-checkbox-btn native-value="Info" semantic="info"></h-checkbox-btn>
        <h-checkbox-btn native-value="Success" semantic="success"></h-checkbox-btn>
        <h-checkbox-btn native-value="Warning" semantic="warning"></h-checkbox-btn>
        <h-checkbox-btn native-value="Danger" semantic="danger" icon="fa fa-spinner fa-spin"></h-checkbox-btn>
      </h-checkbox-group>

      <h3>参数示例</h3> 
      <props-table :data="props" caption="多选框参数"/>
      <props-table :data="groupProps" caption="多选框组参数"/>
      <props-table :data="groupEvents" caption="多选框组事件"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'checkbox',

  components: {
    propsTable
  },

  data () {
    return {
      checkboxBase: ['One'],
      checkboxGroup: ['One'],
      checkboxBtn: ['One'],
      checkboxRadius: ['One'],
      checkboxSize: ['One'],
      checkboxSemantic: ['Default'],
      checkboxBtnGroup: ['Default'],

      props: [{
        para: 'v-model',
        native: 'false',
        desc: 'Checkbox的绑定值',
        type: 'Array',
        option: '-',
        default: '-'
      }, {
        para: 'native-value',
        native: 'true',
        desc: ' Checkbox的原生value属性',
        type: 'String/Number/Boolean',
        option: '-',
        default: '-'
      }, {
        para: 'disabled',
        native: 'true',
        desc: 'Checkbox的原生disabled属性',
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
        desc: 'Checkbox的绑定值',
        type: 'Array',
        option: '-',
        default: '-'
      }, {
        para: 'disabled',
        native: 'true',
        desc: 'Checkbox的原生disabled属性',
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



