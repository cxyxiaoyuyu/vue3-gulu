<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide, inject } from 'vue'

export default {
  name: 'App',
  setup(){
    const asideVisible = ref(false)
    provide('asideVisible',asideVisible)
  },
  components: {
    
  }
}
</script>
