<template>
  <tabbar>
      <tabbaritem path='/home' activecolor='#d81e06'>
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
         <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.svg" alt="">
        <p slot="item-text">首页</p>
      </tabbaritem>
      <tabbaritem path='/class' activecolor='#d81e06'>
        <img slot="item-icon" src="@/assets/img/tabbar/class.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/class-active.svg" alt="">
        <p slot="item-text">分类</p>
      </tabbaritem>
      <tabbaritem path='/shopcar' activecolor='#d81e06'>
        <img slot="item-icon" src="@/assets/img/tabbar/shopcar.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcar-active.svg" alt="">
        <p slot="item-text">购物车</p>
      </tabbaritem>
      <tabbaritem path='/profile' activecolor='#d81e06'>
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile-active.svg" alt="">
        <p slot="item-text">用户</p>
      </tabbaritem>
    </tabbar>
</template>

<script>

import Tabbar from "@/components/common/tabbar/Tabbar";
import Tabbaritem from "@/components/common/tabbar/Tabbaritem";

export default {
name:'mainTabBar',
components:{
   Tabbar,
    Tabbaritem,
}
}
</script>

<style>

</style>