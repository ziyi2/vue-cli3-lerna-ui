import dom from './dom'

export default new class Background {
  constructor () {
    this.background = null      // 非响应式遮幕
    this.resBackground = null   // 响应式遮幕
  }

  create (responsive) {
    if (!responsive && this.background) return
    if (responsive && this.resBackground) return

    let background = document.createElement('div')

    dom.addEventListener(background, 'touchmove', (e) => {
      e.preventDefault()
      e.stopPropagation()
    })

    dom.setClass(background, 'h-background')
    dom.addEventListener(background, 'click', this.hide)
    document.body.appendChild(background)
    !responsive ? this.background = background : this.resBackground = background
  }

  show (responsive) {
    if (!responsive && !this.background) return
    if (responsive && !this.resBackground) return
    !responsive ? dom.addClass(this.background, 'h-background-show')
                : dom.addClass(this.resBackground, 'h-background-responsive-show')
  }

  hide (responsive) {
    if (!responsive && !this.background) return
    if (responsive && !this.resBackground) return
    !responsive ? dom.removeClass(this.background, 'h-background-show')
    : dom.removeClass(this.resBackground, 'h-background-responsive-show')
  }

  destroy (responsive) {
    if (!responsive && !this.background) return
    if (responsive && !this.resBackground) return

    if (!responsive) {
      dom.removeEventListener(this.background, 'click', this.hide)
      document.body.removeChild(this.background)
      this.background = null
    } else {
      dom.removeEventListener(this.resBackground, 'click', this.hide)
      document.body.removeChild(this.resBackground)
      this.resBackground = null
    }
  }
}()

