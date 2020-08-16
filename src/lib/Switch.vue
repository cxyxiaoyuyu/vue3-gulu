<template>
  <div class="switch" :class="{checked:value}" @click="toggleCheck">
    <span class="unchecked-text">{{ uncheckedText }}</span>
    <button>
      <span></span>
    </button>
    <span class="checked-text">{{ checkedText }}</span>
  </div>
  
</template> 

<script lang="ts">
import { ref } from 'vue'
export default {
  props:['value','checkedText','uncheckedText'],
  setup(props,context){
    const toggleCheck = () => {
      context.emit('update:value',!props.value)
    }
    return {toggleCheck}
  }
  
}
</script>

<style lang="scss">
  $checked-color: blue;
  $unchecked-color: grey;
  $h: 22px;
  $h2: $h - 4px;
  .switch {
    display: flex;
    align-items: center;
    > span {
      font-size: 13px;
      padding: 0 5px;
      &.unchecked-text{
        color: $checked-color;
      }
    }
    > button {
      height: $h;
      width: $h * 2;
      border: none;
      outline: none;
      background: $unchecked-color;
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
      &:active > span {
        width: $h2 + 4px;
      }
      &.checked:active > span {
        margin-left: -4px;
      }
    }
    &:active button span{
      width: $h2 + 4px;
    }
    &.checked {
      button {
        background: $checked-color;
        > span {
          left: calc(100% - #{$h2} - 2px);
        }
      }
      > .checked-text {
        color: $checked-color;
      }
      > .unchecked-text {
        color: $unchecked-color;
      }
      &:active button span{
        margin-left: -4px;
      }
    }
  }  
</style>