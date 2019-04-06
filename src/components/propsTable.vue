<template>
   <h-table 
    :data="data" 
    :stripe="true" 
    :border="true" 
    :caption="caption" 
    :shadow="true"
    head-style="default">
        <h-table-column 
          prop="para"
          label="参数"
          :width="80">
        </h-table-column>
        <h-table-column 
          prop="native"
          label="是否是原生属性"
          :width="120">
        </h-table-column>
        <h-table-column 
          prop="desc"
          label="描述"
          :width="450">
        </h-table-column>  
        <h-table-column 
          prop="type"
          label="类型"
          :width="100">
        </h-table-column>
        <h-table-column 
          prop="option"
          label="可选值"
          :width="300">
        </h-table-column>
        <h-table-column 
          prop="default"
          label="默认值"
          :width="100">
        </h-table-column>
      </h-table>
</template>

<script>
export default {
  name: 'propsTable',

  props: {
    data: Array,
    caption: String
  }
}
</script>

