<template>
  <div id="app">
    <NavBar :cart="cart"></NavBar>
    <router-view @cart-update="cartList"/>
      
  </div>
</template>

<script>
// i dont know how to pass cart data to the cart view but whatever im improvising
// it works anyways, even if its scuffed
import NavBar from '@/components/NavBar.vue'
export default {
  //apiKey 9e4e20197f7246dc982ddf51354c09fd
  // make variable later\
  data() {
    return {
      cart: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    cartList: function (cart) {
      console.log(cart)
      this.cart.push(cart)
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
