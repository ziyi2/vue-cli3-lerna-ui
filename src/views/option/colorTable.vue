<template>
  <h-table :data="data" :caption="caption"  align="center" :row-style="rowStyle"   :shadow="true" :border="true">
     <h-table-column 
      prop="index"
      label="序号"
      :width="100"
      :border="true">
    </h-table-column>
    <h-table-column 
      prop="semantic"
      label="语义"
      :width="100">
    </h-table-column>
    <h-table-column 
      prop="var"
      label="变量"
      :ellipsis="true"
      :width="200">
    </h-table-column>
    <h-table-column 
      prop="color"
      label="颜色"
      :ellipsis="true"
      :width="50"
      :custom-class="classDefault">
    </h-table-column>  
    <h-table-column v-for="(value, index) in classGradient" :key="index" 
      :prop="`color${index}`"
      label=""
      :ellipsis="true"
      :width="50"
      :custom-class="classGradient[index]"
    ></h-table-column>
    <h-table-column 
      prop="value"
      label="初始值"
      :ellipsis="true"
      :width="100"></h-table-column>
  </h-table>
</template>

<script>
export default {
  name: 'colorTable',

  props: {
    data: Array,
    caption: String,
    classDefault: String,
    classGradient: Array,
    rowStyle: Function
  }
}
</script>

