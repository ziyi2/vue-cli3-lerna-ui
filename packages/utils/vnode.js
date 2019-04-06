export default {
  getFirstComponentChild (VNodes) {
    return VNodes && VNodes.length && VNodes.filter(VNode => VNode && VNode.tag)[0]
  }
}

