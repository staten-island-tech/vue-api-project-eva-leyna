<template>
  <div id="app">
    <div id="nav">
      <h1 class="title">Spoonacular</h1>
      <div class="cart">Cart (0)</div>
    </div>
    <Daily />
  </div>
</template>

<script>
export default {
  //apiKey 9e4e20197f7246dc982ddf51354c09fd
  // make variable later
  data(){
    return {
      randomRecipe: []
    }
  },
  created: function (){
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=9e4e20197f7246dc982ddf51354c09fd`)
        const data = await result.json();
        this.randomRecipe = data
        console.log(this.randomRecipe)
      } catch (error) {
        console.log(error)
      }
    }
  }
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
