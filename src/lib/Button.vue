<template>
  <button :class="['gulu-button',`theme-${theme}`]">
      <slot />
  </button>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    }
}
</script>

<style lang="scss" scoped>
$h: 32px;
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-button {
    height: $h;
    padding: 0 12px;
    border: 1px solid $border-color;
    color: $color;
    outline: none;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 0 1px 0 fade-out(black,0.95);
    &+& {
        margin-left: 12px;
    }
    &:focus,&:hover {
        color: $blue;
        border-color: $blue;
    }
}
</style>