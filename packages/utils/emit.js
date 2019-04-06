export default {
  methods: {
   /*
    * @Desc: 子组件向父级组件分发数据
    * @Parm: parent -> 父组件的name
             e      -> 事件名称
             value  -> 数据
    */
    dispatch (parentName, e, value) {
      let parent = this.$parent || this.$root   // $root可能是自己, 如果当前组件没有根Vue实例
      let name = parent.$options.name

      while (parent && (!name || name !== parentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }

      if (parent) {
        parent.$emit(e, value)
      }
    }
  }
}
