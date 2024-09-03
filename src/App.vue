<template>
  <div>
    <ShepherdExample/>
  </div>
</template>
<script>
import 'shepherd.js/dist/css/shepherd.css';
import ShepherdExample from './components/ShepherdExample.vue';
export default {
  components: {
    ShepherdExample
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>