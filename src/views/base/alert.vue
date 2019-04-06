<template>
    <h-row>
      <h3>警告</h3>
      <h5>基本类型</h5>
      <h-alert :closeable="true">
        this is alert
      </h-alert>
      <h5>语义类型</h5>
      <h-alert :closeable="true" semantic="primary">
        this is alert
      </h-alert>
      <h-alert :closeable="true" semantic="success">
        this is alert
      </h-alert>
      <h-alert :closeable="true" semantic="info">
        <h4>alert</h4>
        <hr>
        <p>this is alert <a href="/base/alert">this is a link</a></p>
      </h-alert>
      <h-alert :closeable="true" semantic="warning">
        this is alert
      </h-alert>
      <h-alert :closeable="true" semantic="danger">
        this is alert
      </h-alert>
      <h5>圆角</h5>
      <h-alert :closeable="true" semantic="danger" radius="small">
        this is alert
      </h-alert>
      <h-alert :closeable="true" semantic="danger" radius="large">
        this is alert
      </h-alert>
      <h-alert :closeable="true" semantic="danger" radius="circle">
        this is alert
      </h-alert>
      <h5>默认大小</h5>
      <h-alert :closeable="true" semantic="danger" size="large">
        this is alert
      </h-alert>
      <h-alert :closeable="true" semantic="danger" size="small">
        this is alert
      </h-alert>

      <h3>参数示例</h3> 
      <props-table :data="props" caption="警告属性"/>
      <props-table :data="eventProps" caption="警告事件"/>
    </h-row>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'select',

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
        desc: '最小尺寸',
        type: 'String',
        option: 'small、large',
        default: '-'
      }],

      eventProps: [{
        para: 'close',
        native: 'false',
        desc: '警告关闭时候触发',
        type: 'Function()',
        option: '-',
        default: '-'
      }]
    }
  }
}
</script>



