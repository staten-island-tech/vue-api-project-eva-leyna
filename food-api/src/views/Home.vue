<template>
  <div class="home">
    <h3 class="header">View Recipes and Buy Food</h3>
    <form @submit.prevent="" class="search">
      <input 
      v-model="searchInput"
      class="search-input"
      type="text"
      placeholder=" Search..."
      name="search">
      <router-link :to="{name: 'SearchResults', params: {searchInput: searchInput}}" class="search-submit" :searchInput="searchInput" type="submit">Go</router-link>
    </form> 
    <Daily/>
  </div>
</template>

<script>
// this is page 1
// @ is an alias to /src
import Daily from "@/components/Daily.vue"
export default {
  name: "Home",
  components: {
    Daily
  },
  data() {
    return {
      searchInput: null,
    }
  },
  
};
</script>

<style scoped>
  
  .search-input {
    border: none;
    padding: .5rem;
    text-align: center;
    font-size: 1.5rem;
    width: 80%;
    height: 100%;
  }
  .search-submit {
    text-decoration: none;
    width: 20%;
    padding: .75rem;
    height: 100%;
    background-color: rgb(129, 171, 248);
    border-radius: 0 .5rem .5rem 0;
    color: #555;
  }
  .search {
    display: flex;
    flex-direction: row;
    width: 40%;
    font-size: 1.25rem;
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
  }
  .home {
    color: white;
  }
</style>