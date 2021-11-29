<template>
  <div class="header"> 
      <h2 class="results-page" v-show="searchInput">Top 10 results for your search: {{searchInput}}</h2>
      <h2 class="results-page" v-show="!searchInput">Nothing was searched</h2>
      <div class="results">
        <SearchResult v-for="result in searchResults" :key="result.id" :result="result"/>
      </div>
  </div>
</template>

<script>
// This is page 2
import SearchResult from '@/components/SearchResult.vue';
export default {
    components: {
        SearchResult,
    },
    props: ["searchInput"],
    data() {
        return {
            searchResults: [],
    }
    },
    created: function (){
        this.fetchSearchData();
    },
    methods: {
    fetchSearchData: async function () {
      try {
        const apiKey = '9e4e20197f7246dc982ddf51354c09fd'
        const searchQuery = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${this.searchInput}&number=10&apiKey=${apiKey}`)
        const searchData = await searchQuery.json();
        this.searchResults = searchData.results
        console.log(this.searchResults)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
  .results-page {
    font-size: 2rem;
    color: white;
  }
  .results {
    padding: 1rem;
  }
</style>