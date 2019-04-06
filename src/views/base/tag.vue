<template>
  <div>
    <h3>标签</h3>
    <h5>基础</h5>
    <h-tag :closeable="true">version</h-tag>
    <h-tag semantic="dark">version</h-tag>
    <h-tag semantic="primary">version</h-tag>
    <h-tag semantic="success">version</h-tag>
    <h-tag semantic="info">version</h-tag>
    <h-tag semantic="warning">version</h-tag>
    <h-tag semantic="danger">version</h-tag>
    <h5>圆角</h5>
    <h-tag :closeable="true" semantic="dark" radius="small">version</h-tag>
    <h-tag semantic="dark" radius="large">version</h-tag>
    <h-tag :closeable="true" semantic="dark" radius="circle">version</h-tag>
    <h5>尺寸</h5>
    <h-tag :closeable="true" semantic="dark" radius="small">version</h-tag>
    <h-tag semantic="dark" radius="large"  size="large">version</h-tag>
    <h-tag :closeable="true" semantic="dark" radius="circle" size="larger">version</h-tag>
    <h3>标签组</h3>
    <h-tag-group radius="large" :closeable="true">
      <h-tag radius="circle">version</h-tag>
      <h-tag semantic="success" size="larger">1.0.0</h-tag>
    </h-tag-group>
    <h3>参数示例</h3> 
    <props-table :data="props" caption="标签属性"/>
    <props-table :data="groupProps" caption="标签组属性"/>
  </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'tag',

  components: {
    propsTable
  },

  data () {
    return {
      props: [{
        para: 'closeable',
        native: 'false',
        desc: '是否可关闭',
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
        option: 'large、larger',
        default: '-'
      }],
      groupProps: [{
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
        option: 'large、larger',
        default: '-'
      }]
    }
  }
}
</script>



