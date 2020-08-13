<template>
  <div class="topNav">
    <div class="logo">Logo</div>
    <div class="menu">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.topNav {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 15px 20px;
    .menu ul{
        display: flex;
        >li {
            list-style: none;
            margin-left: 20px;
        }
    }
}
</style>