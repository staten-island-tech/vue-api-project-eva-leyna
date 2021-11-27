<template>
  <div id="app">
    <div id="nav">
      <h1 class="title">Spoonacular</h1>
      <div class="cart">Cart (0)</div>
    </div>
    <NavBar/>
    <router-view/>
    <Daily/>
      
  </div>
</template>

<script>
import Daily from "@/components/Daily.vue"
import NavBar from '@/components/NavBar.vue'
export default {
  //apiKey 9e4e20197f7246dc982ddf51354c09fd
  // make variable later\
  components: {
    Daily, NavBar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
