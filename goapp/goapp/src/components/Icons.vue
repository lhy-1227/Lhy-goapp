<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgurl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide >
        </swiper> 
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [{
                id: '001',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },
            {
                id: '002',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
                desc: '万龙滑雪'
            },
            {
                id: '003',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                desc: '故宫'
            },
            {
                id: '004',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
                desc: '静之湖滑雪'
            },
            {
                id: '005',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            },
            {
                id: '006',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
                desc: '古北水镇'
            },
            {
                id: '007',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
                desc: '北京滑雪'
            },
            {
                id: '008',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
                desc: '颐和园'
            },
            {
                id: '009',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                desc: '泡温泉'
            }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '../assets/styles/varibles.styl'
    @import '../assets/styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .1rem
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>