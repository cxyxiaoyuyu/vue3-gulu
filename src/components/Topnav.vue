<template>
  <div class="topNav">
    <div class="logo">
      <router-link to="/">Logo</router-link>
    </div>

    <div class="menu">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="toggle" @click="toggleAside"></div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        console.log(asideVisible.value)
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value
        }
        return {toggleAside}
    }

}
</script>

<style lang="scss">
.topNav {
  background: pink;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  .menu ul{
      display: flex;
      >li {
          list-style: none;
          margin-left: 20px;
      }
  }
  .toggle {
    position: absolute;
    width: 16px;
    height: 16px;
    background: red;
    left: 10px;
    top: 50%;
    transform: translateY(-8px);
    display: none;
  }

  @media (max-width: 500px){   // 页面宽度小于500px时隐藏菜单 并居中logo
      justify-content: center;
      >.menu {
          display: none;
      }
      > .toggle {
        display: block;
      }
  }
}
</style>