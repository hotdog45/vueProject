<template>
  <div>{{message}}</div>
</template>

<script>
  import {
    getCountPageload,
    getCheckPhone,
    getCheckPhone2
  } from '@/api/test'

  export default {
    components: {},
    data() {
      return {
        message: "详情页",
      };
    },

    methods: {
      //from表单调用接口形式 application/x-www-form-urlencoded
      test() {
        var data = {
          phone: '15829554591'
        }
        getCheckPhone2(data).then((res) => {
          alert("test" + JSON.stringify(res));

        })
      },
      //from表单调用接口形式 application/x-www-form-urlencoded
      test2() {

        getCheckPhone('15829554591').then((res) => {
          alert("test" + JSON.stringify(res));

        })
      },

      //application/json
      test3() {
        var data = {}
        getCountPageload(data).then((res) => {
          alert("test" + JSON.stringify(res));

        })


      },
    },

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
