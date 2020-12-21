<template>
  <div class="nav_bar flex">
    <div class="letf">
      <slot name="letf"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
  .nav_bar {
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
  .letf,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>