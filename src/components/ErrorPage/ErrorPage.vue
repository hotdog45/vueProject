<template>
  <div class="error-page flex-column-center">
    <div class="desc">哎呀，出错啦！</div>
    <div class="info">抱歉，你访问的页面不存在！</div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style lang="scss" scoped>
  .error-page {
    padding: 64px 0 32px;
    text-align: center;

    img {
      width: 480px;
      height: auto;
    }

    .desc {
      margin-top: 102px;
      font-size: 32px;
    }

    .info {
      margin-top: 20px;
      font-size: 20px;
    }
  }
</style>
