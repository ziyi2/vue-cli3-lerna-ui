export default {
  addEventListener (element, event, handler) {
    if (typeof window === 'undefined' || !element || !event) return
    if (document.removeEventListener) {
      element.addEventListener(event, handler, false)
    } else {
      element.attachEvent(`on${event}`, handler)
    }
  },

  removeEventListener (element, event, handler) {
    if (typeof window === 'undefined' || !element || !event) return

    if (document.removeEventListener) {
      element.removeEventListener(event, handler, false)
    } else {
      element.detachEvent(`on${event}`, handler)
    }
  },

  setClass (el, cls) {
    if (typeof cls !== 'string' || !cls) return
    if (el.nodeType !== 1 && !el.className) return
    let clses = (cls || '').match(/\S+/g) || []
    let cur = ''
    for (let cls of clses) {
      cur += `${cls} `
    }
    el.className = cur.trim()
  },

  addClass (el, cls) {
    if (!(typeof cls === 'string' && cls)) return
    let cur = el.nodeType === 1 && (el.className          // 将html中元素的class的值的制表符等转换为空字符
      ? (` ${el.className} `).replace(/[\t\r\n\f]/g, ' ')
      : ' '
    )
    if (!cur) return

    let clses = (cls || '').match(/\S+/g) || []

    for (let cls of clses) {
      if (cur.includes(` ${cls} `)) continue              // 如果html的class中没有需要设置的class
      cur += `${cls} `
    }
    el.className = cur.trim()                             // 去掉之前加上的两边的空格
  },

  removeClass (el, cls) {
    if (!(typeof cls === 'string' && cls)) return
    let cur = el.nodeType === 1 && (el.className
      ? (` ${el.className} `).replace(/[\t\r\n\f]/g, ' ')
      : ' '
    )
    if (!cur) return

    let clses = (cls || '').match(/\S+/g) || []

    for (let cls of clses) {
      if (!cur.includes(` ${cls} `)) continue
      cur = cur.replace(` ${cls} `, ' ')
    }
    el.className = cls ? cur.trim() : ''                  // 如果不传参数就是清除全部class
  }
}
