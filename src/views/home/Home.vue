<template>
  <div id="home">
<!--    导航栏-->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :titles="titlesList" class="tabControl" @TabControlClick="TabControlClick" ref="tabControl" v-show="isTabFixed" />
    <!--    轮播图-->
    <scroll class="scroll" ref="scroll" :probeType="3"
            @scroll="cententScroll" :pullUpLoad="true" @pullingUp="cententPullingUp">
      <home-swiper :banners="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
  
      <HomeRecommendView :recommends="recommend"></HomeRecommendView>
  
      <home-feature-view/>
  
      <tab-control :titles="titlesList" class="tab-control" @TabControlClick="TabControlClick" ref="tabControl" :class="{fixed: isTabFixed}" />
  
      <GoodsList :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click="BackClick" v-show="backTopIsShow"/>
  </div>
</template>

<script>
  
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeatureView from "./childComps/HomeFeatureView";
  
  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";
  
  import {getHomeMultidata,getHomeGoods} from "@/network/home";
  
  export default {
      name: "Home",
      components: {
          NavBar,
          HomeSwiper,
          HomeRecommendView,
          HomeFeatureView,
          TabControl,
          GoodsList,
          Scroll,
          BackTop
      },
      data(){
          return {
              isTabFixed: false,
              tabControlOffsetTop: 0,
              backTopIsShow: false,
              titlesList: ['流行', '新款', '精选'],
              currentType: 'pop',
              banner: [],
              recommend: [],
              goods: {
                  pop : {page: 0,list:[]},
                  new : {page: 0,list:[]},
                  sell: {page: 0,list:[]}
              }
              
          }
      },
      created() {
          //请求多个数据
          this.getHomeMultidata()
          //请求商品
          this.getHomeGoods('pop',)
          this.getHomeGoods('new',)
          this.getHomeGoods('sell',)
      },
      methods: {
          swiperImageLoad(){
              this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
          },
          BackClick(){
              this.$refs.scroll.scroll.scrollTo(0,0,500)
          },
          cententPullingUp(){
              this.getHomeGoods(this.currentType)
              this.$refs.scroll.scroll.finishPullUp()
          },
          cententScroll(position){
              this.backTopIsShow = position.y < -1000
              //判断tabControl是否吸顶
              this.isTabFixed = (-position.y ) > this.tabControlOffsetTop
          },
          TabControlClick(index){
              switch (index) {
                  case 0:
                      this.currentType = 'pop'
                      break
                  case 1:
                      this.currentType = 'new'
                      break
                  case 2:
                      this.currentType = 'sell'
                      break
              }
          },
          getHomeMultidata(){
              getHomeMultidata().then(res => {
                  this.banner = res.data.banner.list
                  this.recommend = res.data.recommend.list
              })
          },
          getHomeGoods(type){
              const page = this.goods[type].page + 1
              getHomeGoods(type,page).then(res => {
                  this.goods[type].list.push(...res.data.list)
                  this.goods[type].page += 1
              })
          }
      }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #f6f6f6;
    
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 999;*/
  }

  .scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  
  .tabControl {
    position: relative;
    z-index: 9;
  }

</style>