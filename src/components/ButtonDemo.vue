<template>
 <div>
   <div>Button Demo</div>
   
   
  
   <div class="block">theme: 默认 primary success info warning </div>
   <div class="row">
      <Button>默认button</Button>
      <Button theme="primary">主要button</Button>
      <Button theme="success">成功button</Button>
      <Button theme="info">信息button</Button>
      <Button theme="warning">警告button</Button>
   </div>

   <div class="block">size: big normal small 默认为normal</div>
   <div class="row">
      <Button size="big">大 Button</Button>
      <Button size="big" theme="primary">大 Button</Button>
      <Button>中 Button</Button>
      <Button theme="success">中 Button</Button>
      <Button size="mini">小 Button</Button>
      <Button size="mini" theme="warning">小Button</Button>
   </div>

   <div class="block">支持disabled</div>
   <div class="row">
      <Button disabled>disabled</Button>
      <!-- <Button :disabled="true">disabled</Button> -->
      <Button disabled theme="primary">disabled</Button>
      <Button disabled theme="success">disabled</Button>
      <Button disabled theme="info">disabled</Button>
      <Button disabled theme="warning">disabled</Button>
   </div>

   <div class="block">支持加载动画</div>
   <div class="row">
      <Button :loading="loading1" @click="showLoading">{{text}}</Button>
      <Button :loading="loading2">加载中</Button>
   </div>

 </div>
  
</template>

<script>
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
   setup(){
      const loading1 = ref(false)
      const loading2 = ref(true)
      const text = ref('点我出现loading')

      const showLoading = () => {
         loading1.value = true
         text.value = '加载中'
         setTimeout(()=>{
            loading1.value = false
            text.value = '点我出现loading'
         },5000)
      }
      return { text,loading1, loading2, showLoading }
   },
   components: {
      Button,
   }
}
</script>

<style scoped>
.block {
   margin: 30px 0 10px;
}
</style>