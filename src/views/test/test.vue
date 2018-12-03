<template>
  <div>{{message}}</div>
</template>

<script>
  import {
    getCountPageload
  } from '@/api/test'

  export default {
    components: {},
    data() {
      return {
        message: "详情页",
      };
    },

    methods: {
      test() {
        var data = {}
        getCountPageload().then((res) => {
          alert("test" + JSON.stringify(res));

        })
      },
    },

    //created创建完毕状态
    created() {
      this.test()
    },


  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  div {
    font-size: 50px;
  }

</style>
