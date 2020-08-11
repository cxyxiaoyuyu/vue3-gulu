<template>
  <div>导航栏 | <router-link to="/">xiaoyu1</router-link> | <router-link to="/2">xiaoyu2</router-link></div>
  <hr />
  <router-view></router-view>
</template>

<script>
import xiaoyu from './components/xiaoyu.vue'

export default {
  name: 'App',
  components: {
    xiaoyu
  }
}
</script>
