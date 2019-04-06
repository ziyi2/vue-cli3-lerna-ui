<template>
  <div>
    <h3>基础布局</h3>
    <div class="container">
      <h-row class="row">
        <h-col :span='24' class="col" />
      </h-row>
      <h-row class="row">
        <h-col :span='12' class="col" />
        <h-col :span='12' class="col col-dark" />
      </h-row>
      <h-row class="row">
        <h-col :span='6' class="col" />
        <h-col :span='6' class="col col-dark" />
        <h-col :span='6' class="col" />
        <h-col :span='6' class="col col-dark" />
      </h-row>
    </div>  
    <h3>分栏偏移</h3>
    <div class="container">
      <h-row class="row">
        <h-col :span='12' :offset='12' class="col" />
      </h-row>
      <h-row class="row">
        <h-col :span='6' :offset='6' class="col" />
      </h-row>
    </div>  
    <h3>分栏移动</h3>
    <div class="container">
      <h-row class="row">
        <h-col :span='6' class="col" />
        <h-col :span='6' :push='6' class="col" />
      </h-row>
      <h-row class="row">
        <h-col :span='6' :push='6' class="col" />
        <h-col :span='6' :push='12' class="col" />
      </h-row>
    </div>  
    <h3>响应式布局</h3>
    <div class="container">
      <h-row class="row">
        <h-col :xs='16' :sm="12" :md="10" :lg="6" class="col" />
        <h-col :xs='3' :sm="4" :md="8" :lg="6" class="col col-dark" />
        <h-col :xs='3' :sm="4" :md="4" :lg="6" class="col" />
        <h-col :xs='2' :sm="4" :md="2" :lg="6" class="col col-dark" />
      </h-row>
      <h-row class="row">
        <h-col :md="{span: 6, offset: 6}"  class="col" />
        <h-col :md="{span: 6, offset: 6}" class="col col-dark" />
      </h-row>
      <h-row class="row">
        <h-col :md="{span: 6, push: 6}"  class="col" />
        <h-col :md="{span: 6, pull: 6}" class="col col-dark" />
      </h-row>
    </div>  
    <h3>参数示例</h3>
     <props-table :data="props" caption="栅格参数"/>
  </div>
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'grid',

  components: {
    propsTable
  },

  data () {
    return {
      props: [{
        para: 'span',
        native: 'false',
        desc: '列数',
        type: 'Number',
        option: '1-24',
        default: '24'
      }, {
        para: 'offset',
        native: 'false',
        desc: '向右侧偏移的列数',
        type: 'Number',
        option: '1-24',
        default: '-'
      }, {
        para: 'pull',
        native: 'false',
        desc: '列排序(向左排序)',
        type: 'Number',
        option: '1-24',
        default: '-'
      }, {
        para: 'push',
        native: 'false',
        desc: '列排序(向右排序)',
        type: 'Number',
        option: '1-24',
        default: '-'
      }, {
        para: 'xs',
        native: 'false',
        desc: '超小屏幕手机(<768px)的span、offset、pull、push设置',
        type: 'Number、Object',
        option: '-',
        default: '-'
      }, {
        para: 'sm',
        native: 'false',
        desc: '小屏幕平板(≥768px)的span、offset、pull、push设置',
        type: 'Number、Object',
        option: '-',
        default: '-'
      }, {
        para: 'md',
        native: 'false',
        desc: '中等屏幕桌面显示器(≥992px)的span、offset、pull、push设置',
        type: 'Number、Object',
        option: '-',
        default: '-'
      }, {
        para: 'lg',
        native: 'false',
        desc: '大屏幕大桌面显示器(≥1200px)的span、offset、pull、push设置',
        type: 'Number、Object',
        option: '-',
        default: '-'
      }]
    }
  }
}
</script>

<style scoped lang="less">

@gray-10:                         lighten(#000, 10%); 
@gray-20:                         lighten(#000, 20%); 
@gray-30:                         lighten(#000, 30%); 
@gray-40:                         lighten(#000, 40%); 
@gray-50:                         lighten(#000, 50%); 
@gray-60:                         lighten(#000, 60%); 
@gray-70:                         lighten(#000, 70%); 
@gray-80:                         lighten(#000, 80%); 
@gray-90:                         lighten(#000, 90%); 
@gray-95:                         lighten(#000, 95%); 

@margin:                          10px;
@padding:                         10px;
@box-shadow-base:                 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);



.box-shadow(@shadow) {
  -webkit-box-shadow: @shadow; // iOS <4.3 & Android <4.1
          box-shadow: @shadow;
}




.container {
  .box-shadow(@box-shadow-base);
  padding: @padding;
}

.row {
  margin-bottom: @margin;

  &:last-child {
    margin-bottom: 0;
  }
}

.col {
  border-radius: 4px;
  min-height: 36px;
  background: @gray-90;
  line-height: 36px;
}

.col-dark {
  background: @gray-80;
}

</style>


