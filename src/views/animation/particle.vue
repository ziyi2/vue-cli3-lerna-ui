<template>
    <h-row>
      <h3>粒子背景</h3>
      <div>
        <h-particle></h-particle>
      </div>
      <h3>参数示例</h3> 
      <props-table :data="props" caption="粒子背景属性"/>
    </h-row>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'particle',

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


<style lang="less" scoped>
</style>



