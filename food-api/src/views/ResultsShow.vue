<template>
  <div class="">
      <h1>{{searchInput}}</h1>
  </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        searchInput: String
    },
    data() {
        return {
            randomRecipe: [],
    }
    },
    methods: {
    fetchData: async function () {
      try {
        const apiKey = '9e4e20197f7246dc982ddf51354c09fd'
        const result = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&number=10&apiKey=${apiKey}`)
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

</style>