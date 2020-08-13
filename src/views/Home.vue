<template>
  <Topnav />
  <div class="main">
    <div class="describe">
      <h3>小宇的vue3 UI框架</h3>
    </div>
    
    <div class="link">
      <a href="">GitHub</a>
      <router-link to='/doc'>文档</router-link>
      <a>Get Start</a>
    </div>
    
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  }
}
</script>

<style lang="scss" scoped>

</style>