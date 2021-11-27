<template>
  <div class="home">
    <h3>View Recipes and Buy Food</h3>
    <form @submit.prevent="" class="search">
      <input 
      v-model="searchInput"
      class="search-input"
      type="text"
      placeholder=" Search..."
      name="search">
      <router-link :to="{name: 'SearchResults', params: {searchInput: searchInput}}" class="search-submit" :searchInput="searchInput" type="submit">Q</router-link>
    </form> 
    <p v-show="searchInput">You're searching for: {{searchInput}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      searchInput: null,
    }
  },
  
};
</script>

<style scoped>

</style>