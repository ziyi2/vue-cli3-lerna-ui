<template>
  <div>
    <h-nav brand="UI" to="/" :router="true">
      <h-dropdown :router="true" :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">选项</h-btn>
        <h-dropdown-item to="/option/font">字体(font)</h-dropdown-item>
        <h-dropdown-item to="/option/color">色彩(color)</h-dropdown-item>
      </h-dropdown>
      <h-nav-item to="/layout/grid">栅格</h-nav-item>
      <h-dropdown :router="true"  :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">基础</h-btn>
        <h-dropdown-item to="/base/code">代码高亮(code)</h-dropdown-item>
        <h-dropdown-item to="/base/btn">按钮(btn)</h-dropdown-item>
        <h-dropdown-item to="/base/table">表格(table)</h-dropdown-item>
        <h-dropdown-item to="/base/pagination">分页(pagination)</h-dropdown-item>
      </h-dropdown>
      <h-dropdown :router="true"  :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">表单</h-btn>
        <h-dropdown-item to="/base/radio">单选框(radio)</h-dropdown-item>
        <h-dropdown-item to="/base/checkbox">多选框(checkbox)</h-dropdown-item>
        <h-dropdown-item to="/base/input">输入框(input)</h-dropdown-item>
        <h-dropdown-item to="/base/select">选择器(select)</h-dropdown-item>
      </h-dropdown>
      <h-dropdown :router="true"  :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">消息</h-btn>
        <h-dropdown-item to="/base/quote">引用(quote)</h-dropdown-item>
        <h-dropdown-item to="/base/alert">警告(alert)</h-dropdown-item>
        <h-dropdown-item to="/base/tooltip">提示(tooltip)</h-dropdown-item>
        <h-dropdown-item to="/base/tag">标签(tag)</h-dropdown-item>
        <h-dropdown-item to="/base/toast">通知(toast)</h-dropdown-item>
        <h-dropdown-item to="/base/snackbar">通知处理(snackbar)</h-dropdown-item>
      </h-dropdown>
      <h-dropdown :router="true"  :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">弹框</h-btn>
        <h-dropdown-item to="/bomb/poper">弹出框(poper)</h-dropdown-item>
        <h-dropdown-item to="/bomb/dialog">对话框(dialog)</h-dropdown-item>
        <h-dropdown-item to="/bomb/box">提示框(messageBox)</h-dropdown-item>
      </h-dropdown>
      <h-dropdown :router="true"  :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">复合</h-btn>
        <h-dropdown-item to="/compound/dropdown">下拉菜单(dropdown)</h-dropdown-item>
        <h-dropdown-item to="/compound/nav">导航(nav)</h-dropdown-item>
      </h-dropdown>
      <h-dropdown :router="true"  :hoverable="true" >
        <h-btn slot="trigger" icon="fa fa-angle-down">动画</h-btn>
        <h-dropdown-item to="/animation/particle">粒子背景(particle)</h-dropdown-item>
      </h-dropdown>
      <h-btn to="https://github.com/ziyi2/vue-cli3-lerna-ui" class="right" left-icon="fa fa-github" semantic="black" radius="small">Github</h-btn>
    </h-nav>
    <div class="main-content">   
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },

  methods: {

  }
}
</script>

<style lang="less" scoped>
.right {
  float: right !important;
}
.main-content {
  padding: 10px 40px;
}

</style>
