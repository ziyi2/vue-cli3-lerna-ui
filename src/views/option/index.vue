<template>
  <div>
    <h2>选项</h2>
    <ul>
      <li><router-link to="/option/font">字体</router-link></li>
      <li><router-link to="/option/color">色彩</router-link></li>
    </ul>
    <hr>
    <div>   
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'option'
}
</script>

