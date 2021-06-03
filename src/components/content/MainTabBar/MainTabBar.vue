<template>
  <TabBar>
    <TabBarItem path="/home">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/home_active.png">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/category_active.png">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopcart.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/shopcart_active.png">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.png">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>