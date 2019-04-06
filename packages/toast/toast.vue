<template>
  <transition :name="transition">
    <div class="h-toast" :class="[
      `h-toast-${position}`,
      semantic ? `h-toast-semantic-${semantic}` : '',
    ]" 
      v-show="isActive"
      @mouseenter="clear"
      @mouseleave="start"
    >
      {{message}}
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'HToast',
    data () {
      return {
        isActive: false
      }
    },
    props: {
      message: {
        type: String,
        required: true
      },
      position: {
        default: 'top',
        validator (value) {
          return [
            'top',
            'top-right',
            'top-left',
            'bottom',
            'bottom-left',
            'bottom-right'
          ].includes(value)
        }
      },
      duration: {
        type: Number,
        default: 3000
      },
      semantic: {
        type: String,
        default: 'dark'
      }
    },
    computed: {
      transition () {
        switch (this.position) {
          case 'top':
            return 'h-toast-fade-center-down'
          case 'top-right':
          case 'top-left':
            return 'h-toast-fade-down'
          case 'bottom':
            return 'h-toast-fade-center-up'
          case 'bottom-right':
          case 'bottom-left':
            return 'h-toast-fade-up'
        }
        return ''
      }
    },
    methods: {
      start () {
        if (this.duration < 0) return
        this.isActive = true
        this.timer = setTimeout(() => {
          if (!this.isActive) return
          this.end()
        }, this.duration)
      },

      clear () {
        clearTimeout(this.timer)
      },

      end () {
        clearTimeout(this.timer)
        this.isActive = false
        setTimeout(() => {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }, 250)
      },
      action () {
        this.duration = -1
        this.onAction()
        this.end()
      }
    },

    mounted () {
      this.start()
    }
  }
</script>