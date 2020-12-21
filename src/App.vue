<template>
  <div id="app">
  <router-view/>
  <maintabbar/>
  </div>
</template>

<script>
import maintabbar from "@/components/content/mainTabbar/mainTabBar";
export default {
  name: "App",
  components: {
    maintabbar
  }
};
</script>

<style lang='less'>
@import "assets/css/base.css";
// body{
//   height: 1500px;
// }
</style>
