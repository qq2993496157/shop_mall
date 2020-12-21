<template>
  <div>
    <navbar class="home_navbar">
      <h2 slot="center">购物街</h2>
    </navbar>
    <homeSwiper :banners='banners'></homeSwiper>
    <recommend :recommends='recommends'></recommend>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import homeSwiper from "./childCommon/homeSwiper";
import recommend from './childCommon/homeRecommend'

import { getHomeMultidata } from "network/home";


export default {
  name: "Home",
  components: {
    Navbar,
    homeSwiper,
    recommend
  },
  data() {
    return {
      // result:null,
      banners: null,
      recommends: [],
    };
  },
  created() {
    //请求多个数据
     getHomeMultidata().then((res) => {
        // console.log(res)
        // this.result = res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.home_navbar {
  background-color: @pinks;
  color: #fff;
}
</style>