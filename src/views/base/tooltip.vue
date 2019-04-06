<template>
    <div>
      <h3>提示</h3>
      <h5>基础类型</h5>
      <h-tooltip placement="top" content="this is tooltip this is too long">
        <h-btn class="h-btn-click h-btn-class" semantic="primary" radius="small">Tooltip on top left resize</h-btn> 
      </h-tooltip>
      <h-tooltip placement="right" content="this is tooltip this is too long">
        <h-btn class="h-btn-click h-btn-class" semantic="success" radius="small">Tooltip on right</h-btn> 
      </h-tooltip>
      <h-tooltip placement="bottom" content="this is tooltip this is too long">
        <h-btn class="h-btn-click h-btn-class" semantic="info" radius="small">Tooltip on bottom</h-btn> 
      </h-tooltip>
      <h-tooltip placement="left" content="this is tooltip this is too long">
        <h-btn semantic="danger" radius="small">Tooltip on left</h-btn> 
      </h-tooltip>
      <h-tooltip placement="top" content="this is tooltip this is too long">
        <h-btn semantic="primary" radius="small">Tooltip on top</h-btn> 
      </h-tooltip>
      <h5>语义类型</h5>
      <h-tooltip placement="top" semantic="dark" content="this is tooltip this is too long">
        <h-btn class="h-btn-click h-btn-class" semantic="dark" radius="small">Dark tooltip on top </h-btn> 
      </h-tooltip>
      <h-tooltip placement="right" semantic="primary" content="this is tooltip this is too long">
        <h-btn class="h-btn-click h-btn-class" semantic="primary" radius="small">Primary tooltip on right</h-btn> 
      </h-tooltip>
      <h-tooltip placement="bottom" semantic="success" content="this is tooltip this is too long">
        <h-btn class="h-btn-click h-btn-class" semantic="success" radius="small">Success tooltip on bottom</h-btn> 
      </h-tooltip>
      <h-tooltip placement="left" semantic="info" content="this is tooltip this is too long">
        <h-btn semantic="info" radius="small">Info tooltip on left</h-btn> 
      </h-tooltip>
      <h-tooltip placement="top" semantic="warning" content="this is tooltip this is too long">
        <h-btn semantic="warning" radius="small">Warning Tooltip on top</h-btn> 
      </h-tooltip>
      <h-tooltip placement="top" semantic="danger" content="this is tooltip this is too long">
        <h-btn semantic="danger" radius="small">Danger Tooltip on top</h-btn> 
      </h-tooltip>
      <h5>延时</h5>
      <h-tooltip placement="top" semantic="danger" :delay="1000" content="this is tooltip this is too long">
        <h-btn semantic="danger" radius="small">Danger Tooltip Delay 1000ms</h-btn> 
      </h-tooltip>
      <h5>disabled</h5>
      <h-tooltip disabled semantic="danger"  content="this is tooltip this is too long">
        <h-btn semantic="danger" radius="small">Danger Tooltip Disabled</h-btn> 
      </h-tooltip>
      <h5>圆角</h5>
      <h-tooltip semantic="dark" radius="small" placement="top" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>
      <h-tooltip semantic="dark" radius="large" placement="top" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>
      <h5>大小</h5>
      <h-tooltip semantic="dark" size="small" radius="small" placement="top" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>
      <h-tooltip semantic="dark" radius="small" placement="top" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>
      <h-tooltip semantic="dark" size="large" radius="small" placement="left" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>
      <h5>最大宽度</h5>
      <h-tooltip max-width="100" semantic="dark" radius="small" placement="right" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>
      <h5>内容追加</h5>
      <h-tooltip radius="small" placement="right">
        <div slot="content">
          <h4>content</h4>
          <hr>
          <p>this is slot content</p>
        </div>
        <h-input></h-input>
      </h-tooltip>
      <h5>偏移量</h5>
      <h-tooltip semantic="dark" :offset="offset" :arrow-offset="arrowOffset" radius="small" placement="right" content="this is tooltip this is too long">
        <h-input></h-input>
      </h-tooltip>

      <h3>参数示例</h3> 
      <props-table :data="props" caption="提示框属性"/>
      <props-table :data="eventProps" caption="提示框事件"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'tooltip',

  components: {
    propsTable
  },

  data () {
    return {
      offset: {
        left: 100,
        top: 0
      },
      arrowOffset: {
        left: 0,
        top: 0
      },
      props: [{
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
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'dark、primary、success、info、warning、danger',
        default: '-'
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

  }
}
</script>



