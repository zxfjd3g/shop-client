<template>
  <div id="addCartSuccess">
    <div class="success-cart">
      <div class="py-container ">
        <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
        <div class="goods">
          <div class="left-good">
            <div class="left-pic"><img :src="good.skuDefaultImg" /></div>
            <div class="right-info">
              <p class="title">{{ good.skuName }}</p>
              <p class="attr">
                颜色：WFZ5099IH/5L钛金釜内胆 数量：{{ skuNum }}
              </p>
            </div>
          </div>
          <div class="right-gocart">
            <a
              href="javascript:;"
              class="sui-btn btn-xlarge"
              @click="
                $router.replace({ path: '/detail', query: { skuId, skuNum } })
              "
              >查看商品详情</a
            >
            <router-link to="/shopcart">去购物车结算 > </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCartSuccess',
  data() {
    return {
      good: {}
    }
  },
  props: ['skuId', 'skuNum'],
  mounted() {
    let good = window.sessionStorage.getItem('addGood')
    this.good = JSON.parse(good)
  }
}
</script>

<style scoped>
a {
  color: #666;
}
.success-cart {
  background-color: #f4f4f4;
}
.success-cart h3 {
  font-weight: 400;
  font-size: 16px;
  color: #6aaf04;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
}
.success-cart .icon-pc-right {
  background-color: #fff;
  border: 2px solid #6aaf04;
  padding: 3px;
  margin-right: 8px;
  border-radius: 15px;
}
.success-cart .goods {
  overflow: hidden;
  padding: 10px 0;
}
.success-cart .goods .left-good {
  float: left;
}
.success-cart .goods .right-gocart {
  float: right;
}
.other-item.py-container {
  margin-bottom: 15px;
}
.left-good .left-pic {
  border: 1px solid #dfdfdf;
  width: 60px;
  float: left;
}
.left-good .right-info {
  color: #444;
  float: left;
  margin-left: 10px;
}
.left-good .right-info p {
  margin-bottom: 0;
  margin-top: 0;
}
.right-info .title {
  width: 100%;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.right-info .attr {
  color: #aaa;
}
.right-gocart a {
  padding: 7px 36px;
  font-size: 15px;
}
.right-gocart .btn-danger {
  background-color: #e1251b;
}
.right-gocart .btn-danger:hover {
  background-color: #e1251b;
}
.btn-danger {
  border: 1px solid #e1251b;
}
.banner-goods {
  padding: 10px;
}
.banner-goods ul li {
  margin-bottom: 20px;
}
.banner-goods .banner-item {
  font-family: "微软雅黑";
}
.banner-goods .banner-item .p-img {
  float: left;
  border: 1px solid #eaeaea;
  margin-right: 10px;
}
.banner-goods .banner-item .p-name {
  overflow: hidden;
  padding-right: 35px;
}
.banner-goods .banner-item .p-price {
  line-height: 26px;
  font-size: 14px;
  color: #c81623;
}
.banner-goods .banner-item .p-btn {
  margin-top: 12px;
}
.banner-item .p-name a {
  color: #555;
  text-decoration: none;
}
.banner-item .p-name a:hover {
  color: #c81623;
}
.sui-carousel .carousel-indicators {
  color: #444;
  width: 100px;
  height: 20px;
  position: relative;
  margin: 0 auto;
}
.sui-carousel .carousel-indicators li {
  background-color: #fc9672;
  width: 25px;
  cursor: pointer;
}
.sui-carousel .carousel-indicators .active {
  background-color: #e1251b;
}
ul li .buy-list {
  border: 1px solid #eaeaea;
  width: 90%;
}
.buy-list {
  text-align: center;
  overflow: hidden;
}
.buy-list p {
  margin-bottom: 0;
  margin-top: 0;
  color: #c81623;
}
.buy-list .operate {
  width: 80%;
  margin: 0 auto;
  color: #555;
  overflow: hidden;
  line-height: 32px;
  font-size: 15px;
}
.buy-list .operate i {
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 4px;
}
.buy-list .operate a {
  color: #555;
  text-decoration: none;
}
.buy-list .operate a:hover {
  color: #c81623;
}
.buy-list .operate .point {
  float: left;
}
.buy-list .operate .zan {
  float: right;
}
.buy-goods .buy-list .imgs {
  overflow: hidden;
  width: 80%;
  margin: 10px auto;
}
.buy-goods .buy-list .imgs .ab-cover {
  width: 155px;
  height: 155px;
  float: left;
  border: 1px solid #eaeaea;
}
.buy-goods .buy-list .imgs .ab-list {
  border: 1px solid #eaeaea;
  width: 52px;
  float: left;
}
.imgs .ab-list ul li {
  list-style: none;
  width: 52px;
  height: 52px;
}
</style>
