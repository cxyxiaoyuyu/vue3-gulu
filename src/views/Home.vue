<template>
  <Topnav />
  <div class="main">
    <div class="describe">
      <h3>小宇的vue3 UI框架</h3>
    </div>
    
    <div class="link">
      <a class="github" target="_blank" href="https://github.com/cxyxiaoyuyu">GitHub</a>
      <router-link to='/doc'>Get Start</router-link>
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
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  .describe {
    margin: 20px;
  }
  .link a{
    padding: 5px 10px;
    color: #42b983;
    border-radius: 20px;
    text-decoration: none;
    border:1px solid #42b983;
    margin: 5px;
  }
  .link a.github {
    background-color: #f6f6f6;
    color: #4f5959;
    border-color: #f6f6f6;
  }
}
</style>