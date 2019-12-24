<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components:{
    Layout
  },
  //delete after testing
//   mounted(){
//     window.onbeforeunload = function (e) {
//                 var storage = window.localStorage;
//                 storage.clear()
//   }
// }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
