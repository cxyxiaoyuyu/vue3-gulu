<template>
  <button>
    <span></span>
  </button>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h * 2;
    border: none;
    background: blue;
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
    &:hover > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  
</style>