<template>
  <div :class="col">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'HCol',
  
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },

    computed: {
      col () {
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
  }
</script>