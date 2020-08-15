<template>
  Switch Demo
  <Switch :value="status" @input="status=$event" />

</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
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