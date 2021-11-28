<template>
  <router-link class="" :to="{name: 'RecipeView', params: {id: result.id}}" >
      <h1>{{result.title}}</h1>
  </router-link>
</template>

<script>
export default {
    props: {
        result: Object
    }
}
</script>

<style>

</style>