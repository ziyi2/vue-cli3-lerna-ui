<template>
    <div>
      <h3>通知</h3>
      <h5>位置</h5>
      <h-btn @click="ShowTopSnackbar">Top Toast</h-btn>
      <h-btn @click="ShowTopLeftSnackbar">Top Left Toast</h-btn>
      <h-btn @click="ShowTopRightSnackbar">Top Right Toast</h-btn>
      <h-btn @click="ShowBottomSnackbar">Bottom Toast</h-btn>
      <h-btn @click="ShowBottomLeftSnackbar">Bottom Left Toast</h-btn>
      <h-btn @click="ShowBottomRightSnackbar">Bottom Right Toast</h-btn>
      <h5>语义类型</h5>
      <h-btn @click="ShowDefaultSnackbar">Default Toast</h-btn>
      <h-btn @click="ShowPrimarySnackbar">Primary Toast</h-btn>
      <h-btn @click="ShowSuccessSnackbar">Success Toast</h-btn>
      <h-btn @click="ShowInfoSnackbar">Info Toast</h-btn>
      <h-btn @click="ShowWarningSnackbar">Warning Toast</h-btn>
      <h-btn @click="ShowDangerSnackbar">Danger Toast</h-btn>

      <h3>参数示例</h3> 
      <props-table :data="props" caption="通知属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'toast',

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
      }]
    }
  },

  methods: {
    ShowTopSnackbar () {
      this.$toast('hello world')
    },

    ShowTopLeftSnackbar () {
      this.$toast({
        message: 'hello world',
        position: 'top-left'
      })
    },

    ShowTopRightSnackbar () {
      this.$toast({
        message: 'hello world',
        position: 'top-right'
      })
    },

    ShowBottomLeftSnackbar () {
      this.$toast({
        message: 'hello world',
        position: 'bottom-left'
      })
    },

    ShowBottomSnackbar () {
      this.$toast({
        message: 'hello world',
        position: 'bottom'
      })
    },

    ShowBottomRightSnackbar () {
      this.$toast({
        message: 'hello world',
        position: 'bottom-right'
      })
    },

    ShowDefaultSnackbar () {
      this.$toast({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'default'
      })
    },

    ShowPrimarySnackbar () {
      this.$toast({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'primary'
      })
    },

    ShowSuccessSnackbar () {
      this.$toast({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'success'
      })
    },

    ShowInfoSnackbar () {
      this.$toast({
        message: 'hello world',
        actionText: 'ENTRY',
        semantic: 'info'
      })
    },

    ShowWarningSnackbar () {
      this.$toast({
        message: 'hello world',
        semantic: 'warning'
      })
    },

    ShowDangerSnackbar () {
      this.$toast({
        message: 'hello world',
        semantic: 'danger'
      })
    }
  }
}
</script>



