
import dom from './dom'

export default {

  addEvent (handler) {
    dom.addEventListener(document, 'scroll', handler)
  },

  removeEvent (handler) {
    dom.removeEventListener(document, 'scroll', handler)
  },

  positionToTop (element) {
    if (!element.scrollTop) return
    element.scrollTop = 0
  },

  isHtmlScrollY () {
    return document.documentElement.scrollHeight > document.documentElement.clientHeight
  }

}

