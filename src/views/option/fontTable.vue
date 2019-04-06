<template>
  <h-table 
    :data="data" 
    :caption="caption"  
    align="center" 
    :row-style="rowStyle" 
    :stripe="true" 
    head-style="default"
    :shadow="true"
    :border="true">
    <h-table-column 
      prop="index"
      label="优先级"
      :ellipsis="true"
      :width="50">
    </h-table-column>
    <h-table-column 
      prop="family"
      label="字体类型"
      :ellipsis="true"
      :width="100">
    </h-table-column>
    <h-table-column 
      prop="type"
      label="文本类型"
      :width="100">
    </h-table-column>
    <h-table-column 
      prop="size"
      label="字体大小"
      :ellipsis="true"
      :width="100">
    </h-table-column> 
    <h-table-column 
      prop="weight"
      label="字体粗细"
      :ellipsis="true"
      :width="100">
    </h-table-column> 
  </h-table>
</template>

<script>
export default {
  name: 'fontTable',

  props: {
    data: Array,
    caption: String,
    rowStyle: Function
  }
}
</script>

