<template>
  Switch Demo
  <Switch v-model:value="status" checked-text="启用" unchecked-text="禁用" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  setup(){
    const status = ref(false)
    console.log(status)
    return {status}
  },
  components: {
    Switch
  }
}
</script>

<style lang="scss">

</style>