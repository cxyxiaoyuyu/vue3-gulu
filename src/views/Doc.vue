<template>
  <Topnav />
  <div class='content'>
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ul>
        <li><router-link to="/doc/button">Button组件</router-link></li>
        <li><router-link to="/doc/switch">Switch组件</router-link></li>
        <li><router-link to="/doc/slide">Slide滑块</router-link></li>
        <li><router-link to="/doc/dialog">Dialog组件</router-link></li>
        <li><router-link to="/doc/tabs">Tabs组件</router-link></li>
      </ul>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
 
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log(asideVisible.value)
    return {asideVisible}
  },
  components: {
    Topnav
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  aside {
    border: 1px solid red;
    padding: 20px 20px;
    width: 160px;
    text-align: left;
    ul {
      padding-top: 10px;
    }
  }
}
</style>