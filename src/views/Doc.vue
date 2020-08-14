<template>
  <Topnav />
  <div class='content'>
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ul>
        <li><roter-link to="/doc/button">Button组件</roter-link></li>
        <li><roter-link to="/doc/switch">Switch组件</roter-link></li>
        <li><roter-link to="/doc/slide">Slide滑块</roter-link></li>
        <li><roter-link to="/doc/dialog">Dialog组件</roter-link></li>
        <li><roter-link to="/doc/tab">Tabs组件</roter-link></li>
      </ul>
    </aside>
    <main>主内容</main>
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