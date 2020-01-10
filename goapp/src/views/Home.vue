<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/components/Header.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/Icons.vue'
import HomeRecommend from '@/components/Recommend.vue'
import HomeWeekend from '@/components/Weekend.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
      getCityInfo () {
          axios.get('/data/index.json')
              .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.swiperList = data.swiperList,
              this.iconList = data.iconList,
              this.recommendList = data.recommendList,
              this.weekendList = data.weekendList
          }
        }
    },
    mounted () {
      this.getCityInfo()
    }
}
</script>
