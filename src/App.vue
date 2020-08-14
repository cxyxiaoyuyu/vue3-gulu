<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide, inject } from 'vue'

export default {
  name: 'App',
  setup(){
    let width = document.body.clientWidth

    const asideVisible = ref(width > 500 ? false : true) // 如果是手机的话就显示菜单
    provide('asideVisible',asideVisible)
  },
  components: {
    
  }
}
</script>
