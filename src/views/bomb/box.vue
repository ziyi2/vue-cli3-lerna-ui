<template>
    <div>
      <h3>提示框</h3>
      <h3>参数示例</h3> 
      <props-table :data="props" caption="提示框属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'box',

  components: {
    propsTable
  },

  data () {
    return {
      props: []
    }
  }
}
</script>



