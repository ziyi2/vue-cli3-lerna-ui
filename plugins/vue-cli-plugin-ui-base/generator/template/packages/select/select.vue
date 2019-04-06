<template>
  <div ref="select"
    :class="[
      'h-select', radius ? `h-select-radius-${radius}` : '',
      { 'h-select-show h-select-focus': dropdown }, { 'h-select-disabled': disabled }
      ]" :style="{ 'min-width': minWidth, 'max-width': maxWidth }">
    <div class="h-select-default" @click="() => {
        if (!disabled) {
          dropdown = !dropdown
        }
      }">
      <span :class="['h-selected-value', { 'h-select-placeholder': !text && placeholder }]">
        {{ text || placeholder }}
        <!-- <input type="text" name="" v-model=""> -->
      </span>
      <span class="h-select-arrow"><i class="fa fa-angle-down"></i></span>
    </div>
    <transition name="h-dropdown-fade">
      <ul v-show="dropdown" class="h-select-dropdown" :style="{'max-height': maxHeight}">
        <li v-for="option in options"
          :key="option.value"
          :class="['h-select-item', { 'h-selected-item': selected === option.value}, { 'h-select-item-disabled': option.disabled }]"
          @click="handleClick(option)"
          >{{ option.label }}</li>
        <ul v-for="group in groups"
          :key="group.label"
          class="h-select-dropdown-group" 
        >
          <li class="h-select-dropdown-group-title">{{ group.label }}</li>
          <li v-for="option in group.options"
            :key="option.value"
            :class="['h-select-item', { 'h-selected-item': selected === option.value}, { 'h-select-item-disabled': option.disabled }]"
            @click="handleClick(option)"
          >{{ option.label }}</li>
        </ul>
      </ul>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'HSelect',
    inheritAttrs: true,
    props: {
      placeholder: {
        type: String,
        default: '请选择'
      },
      radius: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default: () => ([])
      },
      groups: {
        type: Array,
        default: () => ([])
      },
      value: {
        type: [String, Number],
        default: ''
      },
      maxHeight: {
        type: String,
        default: '300px'
      },
      minWidth: {
        type: String,
        default: '200px'
      },
      maxWidth: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        text: '',
        dropdown: false,
        selected: this.value
      }
    },
    mounted () {
      if (this.disabled) return
      this.options.forEach((opt) => {
        if (opt.value === this.value) {
          this.text = opt.label
          return
        }
      })
      document.addEventListener('click', this.clickOutSide)
    },
    methods: {
      handleClick (opt) {
        if (opt.disabled) return
        this.text = opt.label
        this.dropdown = false
        this.selected = opt.value
        this.$emit('input', opt.value)
        this.$emit('on-change', opt.value)
      },
      // 点击外部隐藏
      clickOutSide (e) {
        if (!this.$refs.select.contains(e.target)) {
          this.dropdown = false
        }
      }
    },
    destroyed () {
      document.removeEventListener('click', this.clickOutSide)
    }
  }
</script>


