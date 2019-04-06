<template>
    <div>
      <h3>代码高亮</h3>
      <form action="">
        <label for="">主题: </label>
        <h-select :options="[{
          label: 'light',
          value: 'light'
        }, {
          label: 'dark',
          value: 'dark'
        }]" radius="small" v-model="theme">
        </h-select>
        <label for="">语言: </label>
        <h-select :options="[{
          label: 'javascript',
          value: 'javascript'
        }, {
          label: 'css',
          value: 'css'
        }, {
          label: 'html',
          value: 'html'
        }]"
        v-model="language">
          <option disabled value="">请选择</option>
          <option>javascript</option>
          <option>css</option>
          <option>html</option>
        </h-select>
      </form>

      <h-code :line="!!line" :lang="language" :theme="theme" :shadow="!!shadow" v-if="language === 'javascript'">
 /**
  * @desc: 这是一个JavaScript语言的高亮代码块插件，以下是栅格系统设计的部分源代码
  * @date: 2017/9/27 15:10
  * @author: zhuxiankang
  * @params: 
  */
computed: {
  rowClass () {
    let list = []
    let normals = ['span', 'offset', 'pull', 'push']     // 非响应式参数
    let responses = ['xs', 'sm', 'md', 'lg']             // 响应式参数
    for (let prop of normals) {
      if (this[prop]) {
        list.push(
          prop === 'span' ? `h-col-xs-${this[prop]}` : `h-col-xs-${prop}-${this[prop]}`
        )
      }
    }

    for (let prop of responses) {
      if (typeof this[prop] === 'number') {
        list.push(
          `h-col-${prop}-${this[prop]}`
        )
      } else if (typeof this[prop] === 'object') {
        let obj = this[prop]
        for (let key of Object.keys(obj)) {
          list.push(
            key === 'span' ? `h-col-${prop}-${obj[key]}` : `h-col-${prop}-${key}-${obj[key]}`
          )
        }
      }
    }
    return list
  }
}
      </h-code>

      <h-code  :line="!!line" :lang="language" :theme="theme" :shadow="!!shadow" v-if="language === 'css'">

/* 响应式图片 */
.h-img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

/* 相册图片 */
.h-img-photo {
  height: calc('100%');
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block !important;
  max-width: 100%;
  height: auto;
  background-image: url("/skins/cy/images/icons.png");
}

.ziyi2 {}

@media screen,print{}
      </h-code>  
       <h-code  :line="!!line" :lang="language" :theme="theme" :shadow="!!shadow" v-if="language === 'html'">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;meta charset="utf-8">
    &lt;title>vue-UI&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;div id='app' disabled title=attr_data_no_string>&lt;/div>
    &lt;!-- built files will be auto injected -->
  &lt;/body>
&lt;/html>
      </h-code>  
      <h3>参数示例</h3>
      <props-table :data="props" caption="代码属性"/>
    </div>    
</template>

<script>
import propsTable from '@/components/propsTable'

export default {
  name: 'code',
  components: {
    propsTable
  },
  data () {
    return {
      theme: 'light',
      language: 'html',
      line: true,
      shadow: true,
      props: [{
        para: 'theme',
        native: 'false',
        desc: '主题',
        type: 'String',
        option: 'light、dark',
        default: 'light'
      }, {
        para: 'language',
        native: 'false',
        desc: '语言类型',
        type: 'String',
        option: 'html、css、javascript',
        default: 'javascript'
      }, {
        para: 'line',
        native: 'false',
        desc: '是否显示行数',
        type: 'Boolean',
        option: 'true、false',
        default: 'true'
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
