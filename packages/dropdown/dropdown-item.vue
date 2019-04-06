<template>
  <!-- 分隔符 -->
  <a v-if="type === 'separator'" class="h-dropdown-item-separator"></a>
  <!-- 标题 -->
  <a v-else-if="type==='title'" class="h-dropdown-item-title">
    <slot></slot>
  </a>
  <!-- 自定义内容-->
  <div v-else-if="type === 'custom'" class="h-dropdown-item-custom" @click="selectValue" :class="[
    disabled ? 'h-dropdown-item-list-disabled' : ''
  ]">
    <slot></slot>
  </div>
  <!-- 非自定义内容 -->
  <a v-else class="h-dropdown-item-list" :class="[
    disabled ? 'h-dropdown-item-list-disabled' : ''
  ]" @click="selectValue">
    <i v-if="icon" class="h-dropdown-list-icon" :class="icon"></i>
    <slot></slot>
  </a>
</template>
<script>
  
  import Emit from '@ziyi2/utils/emit'

  const type = {
    custom: 'custom',
    separator: 'separator',
    title: 'title',
    list: 'list'
  }

  export default {
    name: 'HDropdownItem',

    mixins: [Emit],

    data () {
      return {
  
      }
    },

    inject: ['close', 'router'],

    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Symbol, Function],
        default: null
      },
      disabled: Boolean,
      type: {
        type: String,
        default: type.list,
        validator (value) {
          return [
            type.custom,
            type.separator,
            type.title,
            type.list
          ].includes(value)
        }
      },
      icon: String,
      to: String
    },

    computed: {
      isClickable () {
        return !this.disabled && this.type !== type.custom && this.type !== type.separator && this.type !== type.title
      }
    },

    methods: {
      selectValue () {
        if (!this.isClickable) return
        this.dispatch('HDropdown', 'input', this.value)
        this.dispatch('HNav', 'close')            // nav to close
        this.$emit('click', this.value)
        this.close ? this.close() : ''            // provide dropdown

        if (!this.to) return
        if (this.router && this.$router) {
          this.$router.push(this.to)
        } else {
          window.location = this.to
        }
      }
    }
  }
</script>