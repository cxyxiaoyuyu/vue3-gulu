<template>
  <button :disabled="disabled"
    :class="['gulu-button',`gulu-theme-${theme}`,`gulu-size-${size}`]">
      <slot />
      <span v-if="loading" class="gulu-loading"></span>
  </button>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false,
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
    display: inline-flex;
    align-items: center;
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
    &[disabled]{
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    &.gulu-theme-primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,&:active {
            background: #66b1ff;
            border-color: #66b1ff;
        }
        &[disabled]{
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
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
        &[disabled]{
            background-color: #b3e19d;
            border-color: #b3e19d;
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
        &[disabled]{
            background-color: #c8c9cc;
            border-color: #c8c9cc;
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
        &[disabled]{
            background-color: #f3d19e;
            border-color: #f3d19e;
        }
    }
    &.gulu-size-big {
        height: 38px;
        padding: 0 18px;
        font-size: 16px;
    }
    &.gulu-size-mini {
        height: 28px;
        padding: 0 10px;
        font-size: 12px;
    }
    > .gulu-loading {
        display: inline-block;
        margin-left: 4px;
        width: 12px;
        height: 12px;
        border-width: 2px;
        border-style: solid;
        border-color: #abcdef #abcdef #abcdef transparent;
        border-radius: 6px;
        animation: gulu-spin 1s infinite linear;
    }
}
@keyframes gulu-spin {
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
}
</style>