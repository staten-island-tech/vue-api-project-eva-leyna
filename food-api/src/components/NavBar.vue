<template>
  <div id="nav" class="nav">
    <nav>
        <router-link to="/" >Spoonacular</router-link>
        <router-link :to="{ name: 'Cart', params: {cart: cart}}">
              <div class="" v-if="cart[0]">Cart ({{cart[0].length}})</div>
              <div class="" v-else >Cart (0)</div>
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
    props: {
        cart: Array
    }
}
</script>

<style scoped>
body {
  margin: 0;
}
#nav {
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
  border: 0.1rem black solid;
}
.title {
  width: 80%;
  margin: auto 3rem;
  text-align: center;
}
</style>