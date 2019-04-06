<template>
  <div class="hello">
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
    <h-alert ref="alert" semantic="primary"></h-alert>
    <h-btn ref="btn" semantic="primary"></h-btn>
  </div>
</template>

<script>

import { use } from 'locale'
import en from 'locale/lang/en'
import zh from 'locale/lang/zh_CN'

const lang = {
  en,
  zh
}

export default {
  name: 'HelloWorld',

  data () {
    return {
      language: 'zh'
    }
  },

  methods: {
    changeLang (language) {
      use(lang[language])
      this.$refs.alert.$forceUpdate()
      this.$refs.btn.$forceUpdate()
    }
  },

  created () {
    use(zh)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-select {
  margin-bottom: 16px;
}
</style>
