<template>
  <div class="tabbar">
    <van-goods-action>
      <van-goods-action-mini-btn icon="wap-home" text="首页"/>
      <van-goods-action-mini-btn icon="chat" text="消息"/>
      <van-goods-action-mini-btn icon="question" text="话题"/>
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="addCart"/>
      <van-goods-action-mini-btn icon="contact" text="我的" @click="addCenter"/>
    </van-goods-action>
  </div>
</template>

<script>

export default {
  name: 'Tabbar',
  data () {
    return {
    };
  },
  methods: {
    addCart() {
      this.$router.push({'path': '/orders'});
    },
    addCenter() {
      this.$router.push({'path': '/center'});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .van-goods-action-mini-btn{
    width: 20vw;
  }
</style>
