<template>
  <button :class="{checked}" @click="toggleCheck">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const checked = ref(false)
    const toggleCheck = () => {
      checked.value = !checked.value
    }
    return {checked,toggleCheck}
  }
  
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h * 2;
    border: none;
    outline: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    > span {
      height: $h2;
      width: $h2;
      border-radius: $h2/2;
      background: #fff;
      position: absolute;
      top: 2px;
      left: 2px;
    }
    &.checked {
      background: blue;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    
  }
  
</style>