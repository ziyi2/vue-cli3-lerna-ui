<template>
    <div>
      <h3>选择器</h3>
      <h4>基础类型</h4>
      <h5>适用广泛的基础单选</h5>
      <h-select
        v-model="value"
        :options="options"
        placeholder="请选择"
        max-height="200px" radius="small"
      ></h-select>
      <span>{{ value }}</span>
      <h4>有禁用选项</h4>
      <h-select
        v-model="value1"
        :options="options1"
        placeholder="请选择" radius="base"
      ></h-select>
      <span>{{ value1 }}</span>
      <h4>禁用状态</h4>
      <h5>选择器不可用状态</h5>
      <h-select placeholder="选择器不可用状态" disabled radius="large"></h-select>
      <h4>分组</h4>
      <h5>备选项进行分组展示</h5>
      <h-select :groups="groups"></h-select>
      <props-table :data="props" caption="选择器属性"/>
      <props-table :data="events" caption="选择器事件"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'Select',

  components: {
    propsTable
  },

  data () {
    return {
      props: [{
        para: 'option',
        native: 'false',
        desc: '选项值，默认根据此属性值进行筛选',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'groups',
        native: 'false',
        desc: '选项值，分组时使用',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'placeholder',
        native: 'false',
        desc: '选择框默认文字',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'max-height',
        native: 'false',
        desc: '最大高度',
        type: 'String',
        option: '-',
        default: '300px'
      }, {
        para: 'min-width',
        native: 'false',
        desc: '最小宽度',
        type: 'String',
        option: '-',
        default: '200px'
      }, {
        para: 'max-width',
        native: 'false',
        desc: '最大宽度',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'value',
        native: 'false',
        desc: '定选中项目的value值，可以使用v-model双向绑定数据。目前只接受 String 或 Number',
        type: 'String | Number',
        option: '-',
        default: '-'
      }, {
        para: 'disabled',
        native: 'false',
        desc: '是否禁用 ',
        type: 'Boolean',
        option: '-',
        default: false
      }, {
        para: 'radius',
        native: 'false',
        desc: '圆角',
        type: 'String',
        option: 'small、base、large',
        default: '-'
      }],
      events: [{
        para: 'on-change',
        native: 'false',
        desc: '选中的Option变化时触发，返回 value',
        type: 'Function',
        option: '-',
        default: '-'
      }],
      options: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        },
        {
          value: 123,
          label: '123'
        },
        {
          value: 'asdf',
          label: 'asdf'
        },
        {
          value: 'Canbeasrra',
          label: 'Canbeas'
        }
      ],
      options1: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London',
          disabled: true
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      groups: [
        {
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      value: 123,
      value1: ''
    }
  }
}
</script>
