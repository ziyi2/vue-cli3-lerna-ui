<template>
  <div>
    <h3>导航</h3>
    <h5>基本类型</h5>
    <h-nav brand="UI">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>
    <h5>语义类型</h5>
    <h-nav brand="UI" semantic="default">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>
    <br/>
    <h-nav brand="UI" semantic="primary">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>
    <br/>
    <h-nav brand="UI" semantic="success">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>
    <br/>
    <h-nav brand="UI" semantic="info">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>
    <br/>
    <h-nav brand="UI" semantic="warning">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>
    <br/>
    <h-nav brand="UI" semantic="danger">
      <h-nav-item to="/option/color">选项</h-nav-item>
      <h-nav-item to="/layout">布局</h-nav-item>
      <h-nav-item :disabled="true" to="/layout">基础组件</h-nav-item>
      <h-input type="text" radius="small" placeholder="search" icon="fa fa-search" size="large"></h-input>
      <h-btn semantic="danger" radius="small"  size="large">Github</h-btn> 
      <h-dropdown position="bottom-right" align="right" >
        <h-btn slot="trigger" icon="fa fa-angle-down" size="large"> 城市</h-btn>
        <h-dropdown-item type="title">浙江省</h-dropdown-item>
        <h-dropdown-item value="hangzhou">杭州</h-dropdown-item>
        <h-dropdown-item value="shaoxin">绍兴</h-dropdown-item>
        <h-dropdown-item type="separator"></h-dropdown-item>
        <h-dropdown-item type="title">安徽省</h-dropdown-item>
        <h-dropdown-item value="hefei">合肥</h-dropdown-item>
        <h-dropdown-item value="hefei" :disabled="true">合肥</h-dropdown-item>
      </h-dropdown>
      <h-nav-item align="right">复合组件</h-nav-item>
    </h-nav>


    <h3>参数示例</h3>
    <props-table :data="props" caption="导航属性"/>
    <props-table :data="itemProps" caption="导航列表属性"/>
    <props-table :data="itemEventprops" caption="导航列表事件"/>
  </div>
</template>

<script>
import propsTable from '@/components/propsTable'
export default {
  name: 'nav',
  components: {
    propsTable
  },
  data () {
    return {
      props: [ {
        para: 'brand',
        native: 'false',
        desc: '导航brand',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'to',
        native: 'false',
        desc: '导航brand的链接',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'fixed',
        native: 'false',
        desc: '导航是否固定在顶部',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'default、primary、success、info、warning、danger',
        default: '-'
      }, {
        para: 'router',
        native: 'false',
        desc: '是否使用vue-router路由',
        type: 'Boolean',
        option: 'false、true',
        default: '-'
      }],
      itemProps: [{
        para: 'to',
        native: 'false',
        desc: 'vue-router的路径或者window.loadtion的值',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'disabled',
        native: 'false',
        desc: 'disabled',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }, {
        para: 'align',
        native: 'false',
        desc: '对齐方式',
        type: '-',
        option: 'right、left',
        default: '-'
      }],
      itemEventprops: [{
        para: 'click',
        native: 'false',
        desc: 'click事件',
        type: 'Function()',
        option: '-',
        default: '-'
      }]
    }
  }
}
</script>