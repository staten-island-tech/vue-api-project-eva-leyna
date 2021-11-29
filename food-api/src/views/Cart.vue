<template>
  <div class="">
      <h4>{{cart[0]}}</h4>
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

<style>

</style>