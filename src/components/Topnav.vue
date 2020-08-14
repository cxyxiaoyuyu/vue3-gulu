<template>
  <div class="topNav">
    <div class="logo" @click="toggleAside">Logo</div>
    <div class="menu">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
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
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 15px 20px;
    .menu ul{
        display: flex;
        >li {
            list-style: none;
            margin-left: 20px;
        }
    }

  @media (max-width: 500px){   // 页面宽度小于500px时隐藏菜单 并居中logo
      justify-content: center;
      >.menu {
          display: none;
      }
  }
}
</style>