<template>
  <div class="tab-bar-item" @click="changepath()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "#f00",
    },
  },
  data() {
    return {
      // isActive: true,
      // path:'/home'
    };
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
  methods: {
    changepath() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
      }
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
  padding: 5px 0 0;
}
.tab-bar-item img {
  width: 22px;
  height: 22px;
}
</style>