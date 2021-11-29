<template>
  <div class="recipe">
      <div class="recipe-desc">
          <h1>{{recipe.title}}</h1>
          <img :src="recipe.image" :alt="recipe.title">
      </div>
    <div class="ingredient-list">
        <h4>Ingredients</h4>
        <div class="ingredients" v-for="ingredient in recipe.extendedIngredients" :key="ingredient.name">
            <h4 class="ingredient-amount">{{ingredient.name}} - {{ingredient.measures.us.amount}} {{ingredient.measures.us.unitShort}}</h4>
            <button @click="addToCart(ingredient.name)" class="cart-button" >Add to Cart</button>
        </div>
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

<style scoped>
    .recipe {
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        color: #f8f8f8;
        align-items: center;
    }
    .recipe-desc {
        width: 40%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 3rem 0;
        text-align: center;
        background-color: #5a0e0e;
        height: auto;
        align-items: center;
    }
    img {
        width: 80%;
    }
    .ingredient-list {
        width: 65%;
        margin: 1rem;
        padding: 1rem 2rem;
        background-color: #777;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .ingredients {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        width: 80%;
    }
    .ingredient-amount {
        width: 70%;
    }
    .cart-button{
        width: 20%;
        margin: 1rem;
        border: none;
        background-color: rgb(129, 171, 248) ;
        font-size: 1rem;
    }
    .cart-button:hover {
        text-decoration: underline;
    }
</style>