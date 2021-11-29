<template>
  <div class="">
      <h1>{{id}}</h1>
    <div v-for="ingredient in recipe.extendedIngredients" :key="ingredient.name">
        <h4>{{ingredient.name}} - {{ingredient.measures.us.amount}} {{ingredient.measures.us.unitShort}}</h4>
        <button @click="addToCart(ingredient.name)" class="" >Add to Cart</button>
    </div>
      
  </div>
</template>

<script>
// this is page 3
export default {
    props: ['id'],
    data() {
        return {
            recipe: [],
            cart: [],
        }
    },
    created: function (){
        this.fetchRecipeData();
    },
    methods: {
        addToCart: function (ingredient) {
          this.cart.push(ingredient)
          this.$emit('cart-update', this.cart)
          console.log(this.cart)
        },
        fetchRecipeData: async function () {
        try {
            const apiKey = '9e4e20197f7246dc982ddf51354c09fd'
            const recipeQuery = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${this.id}&apiKey=${apiKey}`)
            const recipeData = await recipeQuery.json();
            this.recipe = recipeData[0]
            console.log(this.recipe)
        } catch (error) {
            console.log(error)
        }
        }
    }
}
</script>

<style>

</style>