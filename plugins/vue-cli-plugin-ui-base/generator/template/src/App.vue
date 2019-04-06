<template>
  <div id="app">
    <h1>Vue Cli Lerna UI</h1>
      <h-select
        v-model="language"
        :options="[{
          value: 'zh',
          label: '中文'
        }, {
          value: 'en',
          label: 'English'
        }]"
        placeholder="请选择"
        max-height="200px" 
        radius="small"
        @on-change="changeLang">
    </h-select>
    <h-alert semantic="primary"></h-alert>
    <h-btn semantic="primary"></h-btn>  
  </div>
</template>

<script>

// 引入多语言
import { use } from 'locale'
import en from 'locale/lang/en'
import zh from 'locale/lang/zh_CN'

const lang = {
  zh,
  en
}

export default {
  name: 'app',

  data() {
    return {
      language: 'zh'
    }
  },

  methods: {
    changeLang(value) {
      window.location.href = `/${value}`
    }
  },

  created() {
    this.language = location.pathname.split('/')[1]
  },

  beforeCreate() {
    // 以下代码最好用vue-router实现，这里只是给出一个国际化demo
    if(['/zh', '/en'].includes(location.pathname)) {
      use(lang[location.pathname.split('/')[1]])
    } else {
      location.href = '/zh'
      this.language = 'en'
      use(zh)
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    padding-bottom: 20px;
    text-align: center;
  }

  .h-select {
    margin-bottom: 16px;
  }

</style>
