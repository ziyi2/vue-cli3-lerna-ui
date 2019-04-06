
import dom from './dom'

let mousedownEvent
let nodeList = []
const clickout = Symbol('clickout')

dom.addEventListener(document, 'mousedown', e => (mousedownEvent = e))
dom.addEventListener(document, 'mouseup', e => {
  for (let node of nodeList) {
    node[clickout].mouseupHandler(e, mousedownEvent)
  }
})

export default {
  bind (el, binding, vnode) {
    const id = nodeList.push(el) - 1

    const mouseupHandler = (mouseupEvent, mousedownEvent) => {
      const upTarget = mouseupEvent && mouseupEvent.target
      const downTarget = mousedownEvent && mousedownEvent.target

      if (!vnode.context || !upTarget || !downTarget || el.contains(downTarget)) return

      // if (upTarget && el === upTarget) return
      // if ((upTarget && el.contains(upTarget)) || (downTarget && el.contains(downTarget))) return

      if (binding.expression && vnode.context[el[clickout].methodName]) {
        vnode.context[el[clickout].methodName]()
      } else {
        el[clickout].method && el[clickout].method()
      }
    }

    el[clickout] = {
      id,
      mouseupHandler,
      methodName: binding.expression,
      method: binding.value
    }
  },

  update (el, binding) {
    el[clickout].methodName = binding.expression
    el[clickout].method = binding.value
  },

  /* 通过v-if可以触发当前组件的指令解绑监听事件 */
  unbind (el) {
    for (let index of nodeList.keys()) {
      if (nodeList[index][clickout].id === el[clickout].id) {
        nodeList.splice(index, 1)
      }
    }
  }
}
