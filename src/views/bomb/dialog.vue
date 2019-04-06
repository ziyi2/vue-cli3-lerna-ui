<template>
    <div>
      <h3>对话框</h3>
      <h-btn @click="showDefaultDialog">show Dialog</h-btn>
      <h-dialog :visible.sync="visible" />
      <h3>参数示例</h3> 
      <props-table :data="props" caption="对话框属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'dialog',

  components: {
    propsTable
  },

  data () {
    return {
      visible: false,
      props: []
    }
  },

  methods: {
    showDefaultDialog () {
      this.visible = true
    }
  }
}
</script>



