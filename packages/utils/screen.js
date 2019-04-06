
export default {
  getWindowsScrollOffsets (w) {
    w = w || window                               // 使用指定的窗口，不带参数则是使用当前windows窗口

    if (w.pageXOffset != null) {                  // 除了IE8或者更早的版本以外其他浏览器都可用
      return {
        x: w.pageXOffset,
        y: w.pageYOffset
      }
    }

    let d = w.document
    if (document.compatMode === 'CSS1Compat') {    // 对标准模式下的IE（或任何浏览器）
      return {
        x: d.documentElement.scrollLeft,
        y: d.documentElement.scrollTop
      }
    }

    return {                                        // 怪异模式
      x: d.body.scrollLeft,
      y: d.body.scrollTop
    }
  },

  getViewPortSize (w) {
    w = w || window

    if (w.innerWidth) {
      return {
        x: w.innerWidth,
        y: w.innerHeight
      }
    }

    let d = document
    if (document.compatMode === 'CSS1Compat') {
      return {
        x: d.documentElement.clientWidth,
        y: d.documentElement.clientHeight
      }
    }

    return {
      x: d.body.clientWidth,
      y: d.body.clientHeight
    }
  }

}

