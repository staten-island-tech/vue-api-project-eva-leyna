<template>
  <div id="daily">
    <h1>Daily Recipe</h1>
    <div 
      v-for="recipe in randomRecipe" 
      :key="recipe.name">
        {{ recipe.title }}
        <img :src="recipe.image" alt="filler">
    </div>
    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis omnis necessitatibus assumenda suscipit quaerat facilis aperiam doloremque ipsam magnam molestiae? Aspernatur quas natus nam! Modi numquam nemo facilis dolorum error.</p>
    <a class="link" href="#">Take Me There =></a>
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
        const result = await fetch(`https://api.spoonacular.com/recipes/random?number=2&apiKey=9e4e20197f7246dc982ddf51354c09fd`)
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
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  background-color: darksalmon;
}
.desc {
  padding: 1.5rem;
}
img {
  width: 20%;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: black;
  margin: 1rem auto;
  transition: all 0.3s;
}
.link:hover {
  /* border-bottom: .1rem solid black; */
  text-decoration: underline;
}
</style>