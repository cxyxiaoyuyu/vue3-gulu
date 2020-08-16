<template>
 <div>
   <div>Button Demo</div>

   <Button>默认button</Button>

   <Button theme="link">链接button</Button>

   <Button theme="text">文字button</Button>
 </div>
  
</template>

<script>
import Button from '../lib/Button.vue'
export default {
   components: {
      Button,
   }
}
</script>

<style scoped>
</style>