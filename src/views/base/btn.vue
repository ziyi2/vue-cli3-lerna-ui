<template>
    <div>
      <h3>按钮</h3>
      <h5>基础类型</h5>
      <h-btn>Default</h-btn>
      <h-btn semantic="text">Text</h-btn>
      <h5>语义类型</h5> 
      <h-btn semantic="default">Default</h-btn> 
      <h-btn semantic="dark">Dark</h-btn> 
      <h-btn semantic="primary">Primary</h-btn> 
      <h-btn semantic="success">Success</h-btn> 
      <h-btn semantic="info">Info</h-btn> 
      <h-btn semantic="warning">Warning</h-btn> 
      <h-btn semantic="danger">Danger</h-btn> 
      <h5>阴影</h5>
      <h-btn :shadow="true">Default</h-btn>
      <h-btn semantic="default" :shadow="true">Default</h-btn> 
      <h-btn semantic="primary" :shadow="true">Primary</h-btn> 
      <h-btn semantic="success" :shadow="true">Success</h-btn> 
      <h-btn semantic="info" :shadow="true">Info</h-btn> 
      <h-btn semantic="warning" :shadow="true">Warning</h-btn> 
      <h-btn semantic="danger" :shadow="true">Danger</h-btn> 
      <h5>圆角类型</h5>
      <h-btn radius="small">Small</h-btn>
      <h-btn radius="large">Large</h-btn> 
      <h-btn radius="circle">Circle</h-btn> 
      <h5>禁用状态</h5>
      <h-btn :disabled="true">Default</h-btn>
      <h-btn semantic="text" :disabled="true">Text</h-btn>
      <h-btn semantic="primary" radius="large" :disabled="true">Primary</h-btn>
      <h5>大小</h5>
      <h-btn size="large">Large</h-btn>
      <h-btn>Default</h-btn>
      <h-btn size="small">Small</h-btn>
      <h5>图标按钮</h5>
      <h-btn left-icon="fa fa-camera-retro">Camera</h-btn>
      <h-btn left-icon="fa fa-spinner fa-spin">Loading</h-btn>
      <h-btn icon="fa fa-refresh fa-spin" bg="primary">Spin</h-btn>

      <h3>按钮组</h3>
      <h5>基础类型</h5>
      <h-btn-group>
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn>上一页</h-btn>
        <h-btn>下一页</h-btn>
        <h-btn icon="fa fa-angle-right"></h-btn>
      </h-btn-group>
      <h5>语义类型</h5>
      <h-btn-group semantic="default">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn semantic="primary" radius="large">上一页</h-btn>
        <h-btn >下一页</h-btn>
        <h-btn icon="fa fa-angle-right"></h-btn>
      </h-btn-group>
      <h-btn-group semantic="warning">
        <h-btn icon="fa fa-angle-left" radius="large" :shadow="true"></h-btn>
        <h-btn bg="primary">上一页</h-btn>
        <h-btn bg="primary">下一页</h-btn>
        <h-btn bg="info" icon="fa fa-angle-right"></h-btn>
      </h-btn-group>
      <h5>语义类型</h5>
      <h-btn-group semantic="default" :shadow="true">
        <h-btn icon="fa fa-angle-left" radius="large" :shadow="true"></h-btn>
        <h-btn semantic="primary" radius="large" :shadow="true">上一页</h-btn>
        <h-btn >下一页</h-btn>
        <h-btn icon="fa fa-angle-right"></h-btn>
      </h-btn-group>
      <h-btn-group semantic="warning" :shadow="true">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn bg="primary">上一页</h-btn>
        <h-btn bg="primary">下一页</h-btn>
        <h-btn bg="info" icon="fa fa-angle-right"></h-btn>
      </h-btn-group>
      <h5>圆角类型</h5>
      <h-btn-group radius="small">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn radius="large">上一页</h-btn>
        <h-btn radius="large">下一页</h-btn>
        <h-btn icon="fa fa-angle-right" radius="large"></h-btn>
      </h-btn-group>
      <h-btn-group radius="large">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn radius="large">上一页</h-btn>
        <h-btn radius="large">下一页</h-btn>
        <h-btn icon="fa fa-angle-right" radius="large"></h-btn>
      </h-btn-group>
      <h-btn-group radius="circle">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn radius="large">上一页</h-btn>
        <h-btn radius="large">下一页</h-btn>
        <h-btn icon="fa fa-angle-right" radius="large"></h-btn>
      </h-btn-group>
      <h5>大小</h5>
      <h-btn-group size="large">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn radius="large" size="large">上一页</h-btn>
        <h-btn radius="large" size="small">下一页</h-btn>
        <h-btn icon="fa fa-angle-right" radius="large"></h-btn>
      </h-btn-group>
      <h-btn-group>
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn radius="large" size="large">上一页</h-btn>
        <h-btn radius="large" size="small">下一页</h-btn>
        <h-btn icon="fa fa-angle-right" radius="large"></h-btn>
      </h-btn-group>
        <h-btn-group size="small">
        <h-btn icon="fa fa-angle-left" radius="large"></h-btn>
        <h-btn radius="large" size="large">上一页</h-btn>
        <h-btn radius="large" size="small">下一页</h-btn>
        <h-btn icon="fa fa-angle-right" radius="large"></h-btn>
      </h-btn-group>


      <h3>参数示例</h3>
      <props-table :data="props" caption="按钮属性"/>
      <props-table :data="events" caption="按钮事件"/>
      <props-table :data="groupProps" caption="按钮组属性(注意:子组件h-btn的对应属性失效)"/>

    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'btn',

  components: {
    propsTable
  },

  data () {
    return {
      props: [{
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'default、dark、primary、success、info、warning、danger、text',
        default: '-'
      }, {
        para: 'shadow',
        native: 'false',
        desc: '阴影',
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
        para: 'left-icon',
        native: 'false',
        desc: '左侧图标',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'icon',
        native: 'false',
        desc: '右侧图标',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'type',
        native: 'true',
        desc: '表单类型',
        type: 'String',
        option: 'submit、button、reset',
        default: 'button'
      }, {
        para: 'name',
        native: 'true',
        desc: '名称',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'autofocus',
        native: 'true',
        desc: '是否自动获取焦点(兼容IE10以上)',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'disabled',
        native: 'true',
        desc: '是否禁用',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'router',
        native: 'false',
        desc: '是否使用vue-router路由',
        type: 'Boolean',
        option: 'false、true',
        default: '-'
      }, {
        para: 'to',
        native: 'false',
        desc: 'vue-router的路径或者window.loadtion的值',
        type: 'String',
        option: '-',
        default: '-'
      }],

      events: [{
        para: 'click',
        native: 'true',
        desc: 'click事件',
        type: 'Function',
        option: '-',
        default: '-'
      }],

      groupProps: [{
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'default、primary、success、info、warning、danger',
        default: '-'
      }, {
        para: 'shadow',
        native: 'false',
        desc: '阴影',
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
      }]
    }
  },

  methods: {
    clickEvent () {
      alert('这是一个点击事件')
    }
  }
}
</script>

<style scoped>

form {
  margin-bottom: 10px;
}

</style>




