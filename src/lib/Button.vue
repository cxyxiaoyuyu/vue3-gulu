<template>
  <button :class="['gulu-button',`gulu-theme-${theme}`]">
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

<style lang="scss">
$h: 32px;
$color: #333;
$border-color: #d9d9d9;
.gulu-button {
    height: $h;
    padding: 0 12px;
    border: 1px solid $border-color;
    color: $color;
    background: #fff;
    outline: none;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 0 1px 0 fade-out(black,0.95);
    &+& {
        margin-left: 12px;
    }
    &:focus,&:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    &.gulu-theme-primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,&:active {
            background: #66b1ff;
            border-color: #66b1ff;
        }
    }
    &.gulu-theme-success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,&:active {
            background: #85ce61;
            border-color: #85ce61;
        }
    }
    &.gulu-theme-info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,&:active {
            background: #a6a9ad;
            border-color: #a6a9ad;
        }
    }
    &.gulu-theme-warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,&active {
            background: #ebb563;
            border-color: #ebb563;
        }
    }
}
</style>