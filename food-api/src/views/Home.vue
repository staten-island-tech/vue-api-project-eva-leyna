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
    <!-- <Daily/> -->
  </div>
</template>

<script>
// this is page 1
// @ is an alias to /src
// import Daily from "@/components/Daily.vue"
export default {
  name: "Home",
  components: {
    // Daily
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