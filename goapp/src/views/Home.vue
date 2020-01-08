<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
      city: '',
      swiperList: []
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
              this.city = data.city
              this.swiperList = data.swiperList
          }
        }
    },
    mounted () {
      this.getCityInfo()
    }
}
</script>
