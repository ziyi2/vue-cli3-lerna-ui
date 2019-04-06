<template>
    <div>
      <h3>引用</h3>
      <h5>基础引用</h5>
      <h-quote align="left">
        This is a component of quote! Just made by ziyi2!
        <footer slot="footer">ziyi2</footer>
      </h-quote>
      <h5>语义</h5>
      <h-quote semantic="primary" align="left">
        This is a component of quote! Just made by ziyi2!
        <footer slot="footer">ziyi2</footer>
      </h-quote>
      <h5>圆角</h5>
      <h-quote semantic="success" align="left" radius="small">
        This is a component of quote! Just made by ziyi2!
        <footer slot="footer">ziyi2</footer>
      </h-quote>
      <h-quote semantic="danger" align="left" radius="large">
        This is a component of quote! Just made by ziyi2!
        <footer slot="footer">ziyi2</footer>
      </h-quote>
      <h5>阴影</h5>
      <h-quote semantic="danger" align="left" radius="large" :shadow="true">
        This is a component of quote! Just made by ziyi2!
        <footer slot="footer">ziyi2</footer>
      </h-quote>
      <h3>参数示例</h3> 
      <props-table :data="props" caption="引用属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'quote',

  components: {
    propsTable
  },

  data () {
    return {
      semantic: '',
      align: '',
      props: [{
        para: 'semantic',
        native: 'false',
        desc: '语义类型',
        type: 'String',
        option: 'default、primary、success、info、warning、danger',
        default: 'default'
      }, {
        para: 'radius',
        native: 'false',
        desc: '圆角',
        type: 'String',
        option: 'small、large',
        default: '-'
      }, {
        para: 'shadow',
        native: 'false',
        desc: '阴影',
        type: 'Boolean',
        option: 'false、true',
        default: 'false'
      }]
    }
  }
}
</script>



