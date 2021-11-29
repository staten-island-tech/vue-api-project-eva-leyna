<template>
  <div class="cart">
      <h1 class="header">Cart:</h1>   
      <div class="cart-list">
          <h2 class="sub-header">You Need:</h2>
        <h4 class="cart-content" v-for="ingredient in cart[0]" :key="ingredient" >- {{ingredient}}</h4>
      </div>
  </div>
</template>

<script>
export default {
    props: ['cart']
    
}
// my terrible solution to having the cart be an array of arrays? 
// just use the first thing bc everything repeats for some reason :)
// ALSO it doesnt work with more than 1 recipe and i am disappointed but too lazy to fix it
</script>

<style scoped>
    .cart {
        color: #f7f7f7;
    }
    .sub-header {
        margin: 2rem auto;
        padding: 0;
    }
    .cart-content {
        font-size: 1.5rem;
        text-align: center;
        margin: 1rem auto;
        
    }
    .cart-list {
        display: flex;
        flex-direction: column;
        background-color: #666;
        width: 40%;
        margin: 2rem auto;
        padding-bottom: 3rem;
    }
    .header {
        width: 20%;
        border-bottom: .5rem solid #f7f7f7;
        margin: 3rem auto;
        text-align: center;
    }
</style>