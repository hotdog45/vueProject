<template>
  <div id="app">
    <router-view/>
    <!--<grid></grid>-->
  </div>
</template>

<script>
import Grid from '@/components/Grid';

export default {
  name: 'App',
  components: {
    Grid,
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
