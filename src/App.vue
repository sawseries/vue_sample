<script>
import Master from './components/Masters.vue'
import Sidebar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    Master,Sidebar
  }
}
</script>

<template>
  <Sidebar/> 
  <Master msg="Welcome to Your Vue.js App"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
