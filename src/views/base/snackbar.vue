<template>
    <div>
      <h3>通知处理</h3>
      <h5>位置</h5>
      <h-btn @click="ShowTopSnackbar">Top Snackbar</h-btn>
      <h-btn @click="ShowTopLeftSnackbar">Top Left Snackbar</h-btn>
      <h-btn @click="ShowTopRightSnackbar">Top Right Snackbar</h-btn>
      <h-btn @click="ShowBottomSnackbar">Bottom Snackbar</h-btn>
      <h-btn @click="ShowBottomLeftSnackbar">Bottom Left Snackbar</h-btn>
      <h-btn @click="ShowBottomRightSnackbar">Bottom Right Snackbar</h-btn>
      <h5>语义类型</h5>
      <h-btn @click="ShowDefaultSnackbar">Default Snackbar</h-btn>
      <h-btn @click="ShowPrimarySnackbar">Primary Snackbar</h-btn>
      <h-btn @click="ShowSuccessSnackbar">Success Snackbar</h-btn>
      <h-btn @click="ShowInfoSnackbar">Info Snackbar</h-btn>
      <h-btn @click="ShowWarningSnackbar">Warning Snackbar</h-btn>
      <h-btn @click="ShowDangerSnackbar">Danger Snackbar</h-btn>
      <h5>动作语义类型</h5>
      <h-btn @click="ShowActionPrimarySnackbar">Action Primary</h-btn>
      <h-btn @click="ShowActionSuccessSnackbar">Action Success</h-btn>
      <h-btn @click="ShowActionInfoSnackbar">Action Info</h-btn>
      <h-btn @click="ShowActionWarningSnackbar">Action Warning</h-btn>
      <h-btn @click="ShowActionDangerSnackbar">Action Danger</h-btn>

      <h3>参数示例</h3> 
      <props-table :data="props" caption="通知处理属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'snackbar',

  components: {
    propsTable
  },

  data () {
    return {
      semantic: '',
      align: '',
      props: [{
        para: 'message',
        native: 'false',
        desc: '弹框信息',
        type: 'String',
        option: '',
        default: ''
      }, {
        para: 'position',
        native: 'false',
        desc: '弹框信息位置',
        type: 'Boolean',
        option: 'top, top-right, top-left, bottom, bottom-left, bottom-right',
        default: 'top'
      }, {
        para: 'duration',
        native: 'false',
        desc: '弹框信息持续时间',
        type: 'Number',
        option: '-',
        default: '3000'
      }, {
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'default、dark、primary、success、info、warning、danger',
        default: 'dark'
      }, {
        para: 'actionSemantic',
        native: 'false',
        desc: '动作语义类型',
        type: 'String',
        option: 'primary、success、info、warning、danger',
        default: 'primary'
      }, {
        para: 'actionText',
        native: 'false',
        desc: '动作文本(也可以用来当做关闭)',
        type: 'String',
        option: '-',
        default: '-'
      }, {
        para: 'onAction',
        native: 'false',
        desc: '动作触发事件',
        type: 'Function',
        option: '-',
        default: '-'
      }]
    }
  },

  methods: {
    ShowTopSnackbar () {
      this.$snackbar('hello world')
    },

    ShowTopLeftSnackbar () {
      this.$snackbar({
        message: 'hello world',
        position: 'top-left'
      })
    },

    ShowTopRightSnackbar () {
      this.$snackbar({
        message: 'hello world',
        position: 'top-right'
      })
    },

    ShowBottomLeftSnackbar () {
      this.$snackbar({
        message: 'hello world',
        position: 'bottom-left'
      })
    },

    ShowBottomSnackbar () {
      this.$snackbar({
        message: 'hello world',
        position: 'bottom'
      })
    },

    ShowBottomRightSnackbar () {
      this.$snackbar({
        message: 'hello world',
        position: 'bottom-right'
      })
    },

    ShowDefaultSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'default'
      })
    },

    ShowPrimarySnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'primary'
      })
    },

    ShowSuccessSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'success'
      })
    },

    ShowInfoSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'info'
      })
    },

    ShowWarningSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'warning'
      })
    },

    ShowDangerSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'danger'
      })
    },

    ShowActionPrimarySnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'CONSOLE',
        onAction () { 
          console.log('this is a action')  // eslint-disable-line
        }
      })
    },

    ShowActionSuccessSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'CLOSE',
        actionSemantic: 'success'
      })
    },

    ShowActionInfoSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'CLOSE',
        actionSemantic: 'info'
      })
    },

    ShowActionWarningSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'CLOSE',
        actionSemantic: 'warning'
      })
    },

    ShowActionDangerSnackbar () {
      this.$snackbar({
        message: 'hello world',
        actionText: 'CLOSE',
        actionSemantic: 'danger'
      })
    }
  }
}
</script>



