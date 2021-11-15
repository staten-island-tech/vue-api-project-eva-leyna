<template>
  <div class="home">
    <header class="header">
      <h1 class="title">Spoonacular</h1>
      <div class="cart">Cart (0)</div>
    </header>
    <h3>View Recipes and Buy Food</h3>
    <form class="search">
      <input class="search-input" type="text" placeholder=" Search..." name="search">
    </form>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    
  },
};
</script>

<style>
 body {
   margin: 0;
 }
 .header {
   width: 100%;
   height: 10vh;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background-color: bisque;
   }
  .cart {
    width: 10%;
    height: 90%;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: .1rem black solid;
   }
  .title {
    width: 80%;
    margin: auto 3rem;
    text-align: center;
  }
</style>