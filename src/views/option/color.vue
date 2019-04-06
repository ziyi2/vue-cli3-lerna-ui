<template>
  <div>
    <h3>语义色</h3>
    <color-table 
      :data="semantic" 
      :row-style="rowStyle" 
      :class-default="classDefault"
      :class-gradient="classGradient"
      /> 
  </div>
</template>

<script>
import colorTable from '@/views/option/colorTable'

const semanticVar = {
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  gray: 'gray'
}

export default {
  name: 'color',
  components: {
    colorTable
  },

  data () {
    return {
      classDefault: 'h-td-0',
      classGradient: ['h-td-10', 'h-td-20', 'h-td-30', 'h-td-40', 'h-td-50', 'h-td-60', 'h-td-70', 'h-td-80', 'h-td-85'],

      semantic: [{
        index: '1',
        semantic: '主要',
        var: semanticVar.primary,
        value: '#3273dc'
      }, {
        index: '2',
        semantic: '成功',
        var: semanticVar.success,
        value: '#23d160'
      }, {
        index: '3',
        semantic: '信息',
        var: semanticVar.info,
        value: '#209cee'
      }, {
        index: '4',
        semantic: '警告',
        var: semanticVar.warning,
        value: '#ffdd57'
      }, {
        index: '5',
        semantic: '危险',
        var: semanticVar.danger,
        value: '#ff3860'
      }, {
        index: '6',
        semantic: '辅助',
        var: semanticVar.gray,
        value: '#000'
      }]
    }
  },

  methods: {
    rowStyle (row) {
      return `semantic-${row.var}`
    }
  }
}
</script>




<style lang="less">
               
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


@primary:                       #62a8ea; //hsl(217, 71%, 53%);
@info:	                        #57c7d4; //hsl(204, 86%, 53%);
@success:                       #46be8a; //hsl(141, 71%, 48%);
@warning:                       #f2a654; //hsl(47, 100%, 50%);
@danger:                        #f96868; //hsl(348, 100%, 61%);


.color-primary(@percent) {
  .h-tr-semantic-primary {
    .h-td-@{percent} {
      background-color: lighten(@primary, @percent); 
    } 
  }
}

.color-success(@percent) {
  .h-tr-semantic-success {
    .h-td-@{percent} {
      background-color: lighten(@success, @percent); 
    } 
  }
}

.color-info(@percent) {
  .h-tr-semantic-info {
    .h-td-@{percent} {
      background-color: lighten(@info, @percent); 
    } 
  }
}

.color-warning(@percent) {
  .h-tr-semantic-warning {
    .h-td-@{percent} {
      background-color: lighten(@warning, @percent); 
    } 
  }
}

.color-danger(@percent) {
  .h-tr-semantic-danger {
    .h-td-@{percent} {
      background-color: lighten(@danger, @percent); 
    } 
  }
}

.color-gray(@percent) {
  .h-tr-semantic-gray {
    .h-td-@{percent} {
      background-color: lighten(@gray-10, @percent); 
    } 
  }
}


.color-primary(0);
.color-primary(10);
.color-primary(20);
.color-primary(30);


.color-success(0);
.color-success(10);
.color-success(20);
.color-success(30);

.color-info(0);
.color-info(10);
.color-info(20);
.color-info(30);

.color-warning(0);
.color-warning(10);
.color-warning(20);
.color-warning(30);


.color-danger(0);
.color-danger(10);
.color-danger(20);
.color-danger(30);

.color-gray(0);
.color-gray(10);
.color-gray(20);
.color-gray(30);
.color-gray(40);
.color-gray(50);
.color-gray(60);
.color-gray(70);
.color-gray(80);
.color-gray(85);

</style>

