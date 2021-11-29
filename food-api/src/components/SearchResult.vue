<template>
  <router-link class="" :to="{name: 'RecipeView', params: {id: result.id}}" >
      <div class="result">
        <h4>{{result.title}}</h4>
      </div>
  </router-link>
</template>

<script>
// displayed on page 2
// clicking takes user to page 3
export default {
    props: {
        result: Object
    }
}
</script>

<style scoped>
    .result {
        background-color: lightblue;
    }
</style>