import screen from './screen'
import scroll from './scroll'

export default {
  data () {
    return {
      updatedPlacement: 'right'
    }
  },

  props: {
    placement: {
      type: String,
      default: 'right'
    },
    offset: {
      default () {
        return {
          left: 0,
          top: 0
        }
      },
      validator (value) {
        return typeof value.left === 'number' && typeof value.top === 'number'
      }
    },

    arrowOffset: {
      default () {
        return {
          left: 0,
          top: 0
        }
      },
      validator (value) {
        return typeof value.left === 'number' && typeof value.top === 'number'
      }
    }
  },

  methods: {
    show (tooltipElm, referenceElm) {
      if (!this.tooltipElm) this.create(tooltipElm, referenceElm)
      this.update()
    },

    create (tooltipElm, referenceElm) {
      if (!/^(top|bottom|left|right)/g.test(this.placement)) return
      this.referenceElm = referenceElm                  // 触发元素
      this.tooltipFragment = tooltipElm                 // 文档碎片
      this.tooltipElm = (document.body.appendChild(this.tooltipFragment))
      this.preventSizeRecalcaulate()
    },

    update () {
      this.referencElmPos = this.referenceElm.getBoundingClientRect()
      this.tooltipElmPos = this.tooltipElm.getBoundingClientRect()
      this.viewPortSize = screen.getViewPortSize()
      this.scrollOffset = screen.getWindowsScrollOffsets()
      this.updatePlacement()    // 更新placement
      this.calculateOffset()    // 计算offset
      this.applyPlacement()     // 应用更新的placement和计算的offset
      this.updateArrow()        // 更新箭头位置
    },

    updatePlacement () {
      let placementValid = 0
      let placement = this.placement

      let referencElmPos = this.referencElmPos
      let tooltipElmPos = this.tooltipElmPos
      let viewPortSize = this.viewPortSize
      /* 重新计算placement */
      // if (referencElmPos.left < tooltipElmPos.width) placementValid |= 0x01
      // if (viewPortSize.x - referencElmPos.right < tooltipElmPos.width) placementValid |= 0x02
      // if (referencElmPos.top < tooltipElmPos.height) placementValid |= 0x04
      // if (viewPortSize.y - referencElmPos.bottom < tooltipElmPos.height) placementValid |= 0x08
      // 相对触发元素的距离10px(这10px的距离用于显示箭头)
      if (referencElmPos.left < (tooltipElmPos.width + 10)) placementValid |= 0x01
      if (viewPortSize.x - referencElmPos.right < (tooltipElmPos.width + 10) / 2) placementValid |= 0x02
      if (referencElmPos.top < (tooltipElmPos.height + 10)) placementValid |= 0x04
      if (viewPortSize.y - referencElmPos.bottom < (tooltipElmPos.height + 10)) placementValid |= 0x08

      if (placementValid === 0 || placementValid === 15) {
        this.updatedPlacement = placement
        return
      }

      switch (placement) {
        // left -> right -> bottom -> top
        case 'left':
          if (placementValid & 0x01) {
            if (!(placementValid & 0x02)) {
              placement = 'right'
            } else if (!(placementValid & 0x08)) {
              placement = 'bottom'
            } else if (!(placementValid & 0x04)) {
              placement = 'top'
            }
          }
          break
        // right -> left -> bottom -> top
        case 'right':
          if (placementValid & 0x02) {
            if (!(placementValid & 0x01)) {
              placement = 'left'
            } else if (!(placementValid & 0x08)) {
              placement = 'bottom'
            } else if (!(placementValid & 0x04)) {
              placement = 'top'
            }
          }
          break
        // top -> bottom -> right -> left
        case 'top':
          if (placementValid & 0x04) {
            if (!(placementValid & 0x08)) {
              placement = 'bottom'
            } else if (!(placementValid & 0x02)) {
              placement = 'right'
            } else if (!(placementValid & 0x01)) {
              placement = 'left'
            }
          }
          break
        // bottom -> top -> right -> left
        case 'bottom':
          if (placementValid & 0x08) {
            if (!(placementValid & 0x04)) {
              placement = 'top'
            } else if (!(placementValid & 0x02)) {
              placement = 'right'
            } else if (!(placementValid & 0x01)) {
              placement = 'left'
            }
          }
          break
        default:
          break
      }

      this.updatedPlacement = placement
    },

    calculateOffset () {
      let offset = {}
      let referencElmPos = this.referencElmPos
      let tooltipElmPos = this.tooltipElmPos
      let scrollOffset = this.scrollOffset

      switch (this.updatedPlacement) {
        case 'left':
          offset.top = referencElmPos.top + scrollOffset.y + (referencElmPos.height - tooltipElmPos.height) / 2
          offset.left = referencElmPos.left + scrollOffset.x - tooltipElmPos.width - 10   // 相对触发元素的距离10px
          break
        case 'right':
          offset.top = referencElmPos.top + scrollOffset.y + (referencElmPos.height - tooltipElmPos.height) / 2
          offset.left = referencElmPos.left + scrollOffset.x + referencElmPos.width + 10
          break
        case 'top':
          offset.top = referencElmPos.top + scrollOffset.y - tooltipElmPos.height - 10
          offset.left = referencElmPos.left + scrollOffset.x + (referencElmPos.width - tooltipElmPos.width) / 2
          break
        case 'bottom':
          offset.top = referencElmPos.bottom + scrollOffset.y + 10
          offset.left = referencElmPos.left + scrollOffset.x + (referencElmPos.width - tooltipElmPos.width) / 2
          break
        default:
          break
      }
      this.calculationOffset = offset
    },

    applyPlacement () {
      let offset = this.calculationOffset
      let tooltipElmOldPos = this.tooltipElmPos

      let style = window.getComputedStyle(this.tooltipElm, null)
      let marginLeft = Number.parseInt(style.getPropertyValue('margin-left'))
      let marginTop = Number.parseInt(style.getPropertyValue('margin-top'))

      if (Number.isNaN(marginLeft)) marginLeft = 0
      if (Number.isNaN(marginTop)) marginTop = 0

      offset.left += marginLeft
      offset.top += marginTop

      /* 如果tooltip位置超出左视口 */
      if (offset.left < 0 && (this.updatedPlacement === 'top' || this.updatedPlacement === 'bottom')) {
        /* 如果参考元素的左偏移量不为负值则和参考元素左对齐 */
        offset.left = this.referencElmPos.left > 0 ? this.referencElmPos.left : 0
      }

      style = this.tooltipElm.style
      style.top = `${offset.top + this.offset.top}px`
      style.left = `${offset.left + this.offset.left}px`

      /* 如果tooltip压缩导致换行此时需要重新调整偏移量 */
      this.tooltipElmPos = this.tooltipElm.getBoundingClientRect()

      if (this.tooltipElmPos.height !== tooltipElmOldPos.height) {
        /* 如果受到窗口压缩导致高度变大宽度变小等, 则偏移上移 */
        if (this.updatedPlacement === 'top') {
          offset.top = offset.top + tooltipElmOldPos.height - this.tooltipElmPos.height
        } else if (this.updatedPlacement === 'right') {
          offset.top = offset.top + (tooltipElmOldPos.height - this.tooltipElmPos.height) / 2
        }
        style.top = `${offset.top + this.offset.top}px`
        style.left = `${offset.left + this.offset.left}px`
      }
    },

    updateArrow () {
      let tooltipElmPos = this.tooltipElmPos
      let referencElmPos = this.referencElmPos
      let viewPortSize = this.viewPortSize
      let isScrollY = scroll.isHtmlScrollY()                            // 是否有竖向滚动条
      let offset = {}

      let arrowElm = this.tooltipElm.getElementsByClassName('h-tooltip-arrow')[0]
      if (!arrowElm) return

      switch (this.updatedPlacement) {
        case 'left':
          offset.top = (tooltipElmPos.height - 20) / 2                  // arrow的高度默认是20px
          offset.left = tooltipElmPos.width - 1                         // tooltip的padding是12px
          break
        case 'right':
          offset.top = (tooltipElmPos.height - 20) / 2
          offset.left = -11
          break
        case 'top':
          offset.top = tooltipElmPos.height - 1

          /* 如果不与左右视口紧贴(注意6px是竖向滚动条的宽度) */
          if (this.calculationOffset.left > 0 && this.calculationOffset.left !== referencElmPos.left && viewPortSize.x !== tooltipElmPos.right + (isScrollY ? 6 : 0)) {
            offset.left = (tooltipElmPos.width - 20) / 2
          /* 如果tooltip超出左视口 */
          } else if (this.calculationOffset.left <= 0 || this.calculationOffset.left === referencElmPos.left) {
            offset.left = (referencElmPos.width - 20) / 2
          /* 如果tooltip和右视口紧贴(注意12px是tooltip的padding值) */
          } else {
            offset.left = referencElmPos.left - tooltipElmPos.left + referencElmPos.width / 2 - 12
          }
          break
        case 'bottom':
          offset.top = -11

          /* 如果不与左右视口紧贴 */
          if (this.calculationOffset.left > 0 && this.calculationOffset.left !== referencElmPos.left && viewPortSize.x !== tooltipElmPos.right + (isScrollY ? 6 : 0)) {
            offset.left = (tooltipElmPos.width - 20) / 2
          /* 如果tooltip超出左视口 */
          } else if (this.calculationOffset.left <= 0 || this.calculationOffset.left === referencElmPos.left) {
            offset.left = (referencElmPos.width - 20) / 2
          /* 如果tooltip和右视口紧贴 */
          } else {
            offset.left = referencElmPos.left - tooltipElmPos.left + referencElmPos.width / 2 - 12
          }
          break
        default:
          break
      }

      arrowElm.style.left = offset.left + this.arrowOffset.left + 'px'
      arrowElm.style.top = offset.top + this.arrowOffset.top + 'px'
    },

    preventSizeRecalcaulate () {
      if (!this.tooltipElm) return
      /* 如果tooltip不强制设置成无法换行，那么随着滚动条移动tooltip尽管display:none, 但是大小会被压缩，导致宽度和高度计算不是非换行情况下的偏移计算就会出错 */
      /* 隐藏的同时移出视界之外，避免受到窗口的压缩影响导致内容换行高宽变化 */
      this.tooltipElm.style.top = '-10000px'
      this.tooltipElm.style.left = '-10000px'
    },

    hide () {
      this.preventSizeRecalcaulate()
    }
  }
}
