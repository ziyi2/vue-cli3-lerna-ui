<template>
    <div>
      <h3>下拉菜单</h3>
      <h5>基本类型</h5>
      <h-dropdown v-model="dropdownValue" @open="dropdownOpenHandler" @close="dropdownCloseHandler">
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small"> Click</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-dropdown v-model="dropdownValue" :hoverable="true">
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small"> Hoverable</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">江苏省</h-dropdown-item>
        <h-dropdown-item value="nanjing">南京</h-dropdown-item>
        <h-dropdown-item value="suzhou">苏州</h-dropdown-item>
      </h-dropdown>
      <h-dropdown v-model="dropdownValue" :disabled="true">
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small"> Disabled</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h5>图标</h5>
      <h-dropdown>
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small" semantic="default"> admin用户</h-btn>
        <h-dropdown-item type="title">基本</h-dropdown-item>
        <h-dropdown-item icon="fa fa-user">信息</h-dropdown-item>
        <h-dropdown-item icon="fa fa-home">社交</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">操作</h-dropdown-item>
        <h-dropdown-item icon="fa fa-cog">设置</h-dropdown-item>
        <h-dropdown-item icon="fa fa-remove">注销</h-dropdown-item>
      </h-dropdown>
      <h5>to</h5>
      <h-dropdown>
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small" semantic="default"> vue-UI</h-btn>
        <h-dropdown-item type="title" to="/base/quote">基础组件</h-dropdown-item>
        <h-dropdown-item to="/base/quote">引用</h-dropdown-item>
        <h-dropdown-item to="/base/code">代码</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">选项</h-dropdown-item>
        <h-dropdown-item to="/option/font">字体</h-dropdown-item>
        <h-dropdown-item to="/option/color">色彩</h-dropdown-item>
      </h-dropdown>
      <h5>position</h5>
      <h-dropdown position="top-left">
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small" semantic="default"> vue-UI</h-btn>
        <h-dropdown-item type="title" to="/base/quote">基础组件</h-dropdown-item>
        <h-dropdown-item to="/base/quote">引用</h-dropdown-item>
        <h-dropdown-item to="/base/code">代码</h-dropdown-item>
      </h-dropdown>
      <h-dropdown position="top-right">
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small" semantic="default"> vue-UI</h-btn>
        <h-dropdown-item type="title" to="/base/quote">基础组件</h-dropdown-item>
        <h-dropdown-item to="/base/quote">引用</h-dropdown-item>
        <h-dropdown-item to="/base/code">代码</h-dropdown-item>
      </h-dropdown>
      <h-dropdown position="bottom-right" :router="true">
        <h-btn slot="trigger" icon="fa fa-angle-down" radius="small" semantic="default"> vue-UI</h-btn>
        <h-dropdown-item type="title" to="/base/quote">基础组件</h-dropdown-item>
        <h-dropdown-item to="/base/quote">引用</h-dropdown-item>
        <h-dropdown-item to="/base/code">代码</h-dropdown-item>
      </h-dropdown>

      <h3>参数示例</h3>
      <props-table :data="props" caption="下拉菜单属性"/>
      <props-table :data="eventProps" caption="下拉菜单事件"/>
      <props-table :data="itemProps" caption="下拉菜单列表属性"/>
      <props-table :data="itemEventProps" caption="下拉菜单列表属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'dropdown',

  components: {
    propsTable
  },

  data () {
    return {
      dropdownValue: '',
      props: [{
        para: 'v-model',
        native: 'false',
        desc: 'Dropdown的绑定值',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'min-width',
        native: 'false',
        desc: '默认最小宽度(响应式无效)',
        type: 'String',
        option: '-',
        default: '200px'
      }, {
        para: 'max-height',
        native: 'false',
        desc: '默认最大高度',
        type: 'String',
        option: '-',
        default: '300px'
      }, {
        para: 'hoverable',
        native: 'false',
        desc: 'hover显示(响应式无效)',
        type: 'Boolean',
        option: 'false、true',
        default: 'true'
      }, {
        para: 'position',
        native: 'false',
        desc: '下拉菜单位置(响应式无效)',
        type: 'Boolean',
        option: 'top-right, top-left, bottom-left',
        default: 'bottom-left'
      }, {
        para: 'align',
        native: 'false',
        desc: '对齐(例:在导航中的对齐方式)',
        type: 'String',
        option: 'left、right',
        default: '-'
      }, {
        para: 'router',
        native: 'false',
        desc: '是否使用vue-router路由',
        type: 'Boolean',
        option: 'false、true',
        default: '-'
      }],

      eventProps: [{
        para: 'change',
        native: 'false',
        desc: 'v-model值变化监听事件',
        type: 'Function(newValue)',
        option: '-',
        default: '-'
      }, {
        para: 'open',
        native: 'false',
        desc: '下拉菜单展开时触发',
        type: 'Function()',
        option: '-',
        default: '-'
      }, {
        para: 'close',
        native: 'false',
        desc: '下拉菜收缩时触发',
        type: 'Function()',
        option: '-',
        default: '-'
      }],

      itemProps: [{
        para: 'type',
        native: 'false',
        desc: '列表类型',
        type: 'String',
        option: 'title、separator、custom、list',
        default: 'list'
      }, {
        para: 'disabled',
        native: 'false',
        desc: '禁止点击',
        type: 'String',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'value',
        native: 'false',
        desc: 'value值',
        type: 'String/Number/Boolean/Object/Array/Symbol/Function',
        option: '-',
        default: '-'
      }, {
        para: 'icon',
        native: 'false',
        desc: '图标',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'to',
        native: 'false',
        desc: 'vue-router的路径或者window.loadtion的值',
        type: 'String',
        option: '-',
        default: '-'
      }],

      itemEventProps: [{
        para: 'click',
        native: 'false',
        desc: 'click事件',
        type: 'Function(value)',
        option: '-',
        default: '-'
      }]
    }
  }
}
</script>



