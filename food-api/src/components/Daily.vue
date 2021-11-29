<template>
  <div id="daily">
    <h1>Daily Recipe</h1>
    <div 
      class="daily-details"
      v-for="recipe in randomRecipe" 
      :key="recipe.name"
      >
      
        <p> {{recipe.title}} </p>
        <img :src="recipe.image" alt="filler">
        <a class="link" :href="recipe.sourceUrl">Take Me There =></a>
        
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Daily",
  data() {
    return {
      randomRecipe: [],
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
        this.randomRecipe = data.recipes
        console.log(this.randomRecipe)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
#daily {
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  background-color: #666;
  color: white;

}
.daily-details {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  font-size: 1.25rem;
}
img {
  width: 60%;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: black;
  margin: 1rem auto;
  font-size: 1.5rem;
}
.link:hover {
  text-decoration: underline;
  transition: all 0.5s;
}
</style>