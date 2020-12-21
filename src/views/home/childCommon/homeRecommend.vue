<template>
  <div class="recommend flex">
    <div v-for="item in recommends" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name:'homeRecommend',
props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.recommend {
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend_item {
  flex: 1;
  text-align: center;
}
.recommend_item img{
  width: 80%;
  margin-bottom: 5px;
}
</style>