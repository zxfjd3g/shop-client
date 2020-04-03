import Mock from 'mockjs'
import bannerList from './bannerList'
import recommendList from './recommendList'

Mock.mock('/mock/getCarouselList',{
    code:200,
    data:bannerList
})

Mock.mock('/mock/getRecommendList',{
    code:200,
    data:recommendList
})
