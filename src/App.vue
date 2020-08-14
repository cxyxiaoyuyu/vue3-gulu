<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide, inject } from 'vue'
import router from './router'
export default {
  name: 'App',
  setup(){
    let width = document.body.clientWidth

    const asideVisible = ref(width > 500 ? true : false) // 如果是电脑的话就显示菜单
    provide('asideVisible',asideVisible)

    router.afterEach( () => {
      console.log('路由切换了')
      if(width <= 500){
        asideVisible.value = false
      }
    })
  },
  components: {
    
  }
}
</script>
