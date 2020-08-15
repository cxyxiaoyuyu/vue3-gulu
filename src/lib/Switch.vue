<template>
  <button :class="{checked:value}" @click="toggleCheck">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props:['value'],
  setup(props,context){
    const toggleCheck = () => {
      context.emit('input',!props.value)
    }
    return {toggleCheck}
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
      transition: left 250ms;
    }
    &.checked {
      background: blue;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    
  }
  
</style>