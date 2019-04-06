<template>
  <figure class="h-code" :class="[shadow ? 'h-code-shadow' : '']">
    <pre class="h-code-lines" :class="[`h-code-lines-${theme}`]" v-if="line"><div class="h-code-line" v-for="(code,index) in codes" :key="index">{{index + 1}}</div></pre>
    <pre class="h-code-codes" :class="[`h-code-codes-${theme}`]"><div class="h-code-line" v-for="(code,index) in codes" :key="index"><div v-html="code"></div></div></pre>
  </figure>
</template>
<script>
  import * as fn from './language'

  export default {
    name: 'HCode',
    data () {
      return {
        fn: fn
      }
    },

    props: {
      line: {
        type: Boolean,
        default: true
      },
      lang: {
        type: String,
        default: 'javascript'
      },
      theme: {
        type: String,
        default: 'light'
      },
      shadow: Boolean
    },

    computed: {
      codes () {
        let lang = 'javascript'
        Array.from(Object.keys(this.fn)).includes(this.lang) ? lang = this.lang : ''
        return this.fn[lang](this.$slots.default && this.$slots.default[0].text.trim()).split('\n')
      }
    }
  }
</script>