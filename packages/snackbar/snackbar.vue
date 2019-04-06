<template>
  <transition :name="transition">
    <div class="h-snackbar" :class="[
      `h-snackbar-${position}`,
      semantic ? `h-snackbar-semantic-${semantic}` : '',
    ]" 
      v-show="isActive"
      @mouseenter="clear"
      @mouseleave="start"
    >
      <div class="h-snackbar-message">{{message}}</div>
      <div class="h-snackbar-action" :class="[
        actionSemantic ? `h-snackbar-action-semantic-${actionSemantic}` : '',
      ]" v-if="actionText">
        <button @click="action">{{this.actionText}}</button>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'HSnackbar',
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
      actionSemantic: {
        type: String,
        default: 'primary'
      },
      semantic: {
        type: String,
        default: 'dark'
      },
      actionText: String,
      onAction: {
        type: Function,
        default: () => {}
      }
    },
    computed: {
      transition () {
        switch (this.position) {
          case 'top':
            return 'h-snackbar-fade-center-down'
          case 'top-right':
          case 'top-left':
            return 'h-snackbar-fade-down'
          case 'bottom':
            return 'h-snackbar-fade-center-up'
          case 'bottom-right':
          case 'bottom-left':
            return 'h-snackbar-fade-up'
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