<template>
  <div>
    <h3>页面字体类型</h3>
    <font-table 
      :data="data" 
      :row-style="rowStyle" 
    /> 
    <h3>标题类型</h3>
    <font-table 
      :data="titleDate" 
      :row-style="titleRowStyle" 
    /> 

  </div>
</template>

<script>

import fontTable from '@/views/option/fontTable'

export default {
  name: 'font',

  components: {
    fontTable
  },

  data () {
    return {
      data: [{
        index: '1',
        type: '正文中英文',
        family: 'BlinkMacSystemFont',
        size: '36px',
        weight: '400'
      }, {
        index: '2',
        type: '正文中英文',
        family: '-apple-system',
        size: '14px',
        weight: '400'
      }, {
        index: '3',
        type: '正文英文',
        family: 'Segoe UI',
        size: '14px',
        weight: '400'
      }, {
        index: '4',
        type: '正文英文',
        family: 'Roboto',
        size: '14px',
        weight: '400'
      }, {
        index: '5',
        type: '正文英文',
        family: 'Oxygen',
        size: '14px',
        weight: '400'
      }, {
        index: '6',
        type: '正文英文',
        family: 'Ubuntu',
        size: '14px',
        weight: '400'
      }, {
        index: '7',
        type: '正文英文',
        family: 'Cantarell',
        size: '14px',
        weight: '400'
      }, {
        index: '8',
        type: '正文英文',
        family: 'Fira Sans',
        size: '14px',
        weight: '400'
      }, {
        index: '9',
        type: '正文英文',
        family: 'Droid Sans',
        size: '14px',
        weight: '400'
      }, {
        index: '10',
        type: '正文英文',
        family: 'Helvetica Neue',
        size: '14px',
        weight: '400'
      }, {
        index: '11',
        type: '正文英文',
        family: 'Helvetica',
        size: '14px',
        weight: '400'
      }, {
        index: '12',
        family: 'Arial',
        type: '正文英文',
        size: '14px',
        weight: '400'
      }, {
        index: '13',
        family: 'Tahoma',
        type: '正文英文',
        size: '14px',
        weight: '400'
      }, {
        index: '14',
        family: 'Microsoft YaHei',
        type: '正文中英文',
        size: '14px',
        weight: '400'
      }, {
        index: '1',
        family: 'Menlo',
        type: '代码',
        size: '14px',
        weight: '400'
      }, {
        index: '2',
        family: 'Monaco',
        type: '代码',
        size: '14px',
        weight: '400'
      }, {
        index: '3',
        family: 'Consolas',
        type: '代码',
        size: '14px',
        weight: '400'
      }, {
        index: '4',
        family: 'Courier New',
        type: '代码',
        size: '14px',
        weight: '400'
      }],

      titleDate: [
        {
          index: '1',
          family: '-',
          type: 'h1',
          size: '36px',
          weight: '500'
        }, {
          index: '2',
          family: '-',
          type: 'h2',
          size: '30px',
          weight: '500'
        }, {
          index: '3',
          family: '-',
          type: 'h3',
          size: '24px',
          weight: '500'
        }, {
          index: '4',
          family: '-',
          type: 'h4',
          size: '16px',
          weight: '500'
        }, {
          index: '5',
          family: '-',
          type: 'h5',
          size: '12px',
          weight: '500'
        }, {
          index: '6',
          family: '-',
          type: 'small',
          size: '65%',
          weight: '400'
        }
      ]
    }
  },

  methods: {
    rowStyle (row) {
      return row.family
    },

    titleRowStyle (row) {
      return row.type
    }
  }
}
</script>


<style lang="less">
@font-family-sans-serif:          "Helvetica Neue",Helvetica,Tahoma,"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
@font-family-base:                @font-family-sans-serif;
@font-family-monospace:           Menlo, Monaco, Consolas, "Courier New", monospace;
@font-family-bulma:               BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;



.h-tr-BlinkMacSystemFont {
  td {
    font-family: BlinkMacSystemFont;
  }
}

.h-tr-Segoe {
  td {
    font-family: "Segoe UI";
  }
}

.h-tr--apple-system {
  td {
    font-family: -apple-system;
  }
}

.h-tr-Roboto {
  td {
    font-family: Roboto;
  }
}


.h-tr-Oxygen {
  td {
    font-family: Oxygen;
  }
}

.h-tr-Ubuntu {
  td {
    font-family: Ubuntu;
  }
}

.h-tr-Cantarell {
  td {
    font-family: Cantarell;
  }
}


.h-tr-Fira {
  td {
    font-family: "Fira Sans";
  }
}

.h-tr-Droid {
  td {
    font-family: "Droid Sans";
  }
}


.h-tr-Helvetica {
  td {
    font-family: Helvetica;
  }
}

.Neue {
  td {
    font-family: "Helvetica Neue"
  }
}

.h-tr-Arial {
  td {
    font-family: Arial;
  }
}

.h-tr-Tahoma {
  td {
    font-family: Tahoma;
  }
}

.h-tr-Microsoft {
  td {
    font-family: "Microsoft YaHei";
  }
}

.h-tr-Menlo {
  td {
    font-family: Menlo;
  }
}


.h-tr-Monaco {
  td {
    font-family: Monaco;
  }
}


.h-tr-Consolas {
  td {
    font-family: Consolas;
  }
}


.h-tr-Courier {
  td {
    font-family: "Courier New";
  }
}


.h-tr-h(@index, @size) {
  .h-tr-h@{index} {
    font-weight: 500;
    font-size: @size;
  }
}

.h-tr-h(1, 36px);
.h-tr-h(2, 30px);
.h-tr-h(3, 24px);
.h-tr-h(4, 18px);
.h-tr-h(5, 12px);
.h-tr-small {
  font-size: 12px;
  color: #999999;
}
</style>



