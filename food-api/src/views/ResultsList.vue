<template>
  <div class="">
      <h1>Top 10 results for: {{searchInput}}</h1>
      <h1 v-show="searchInput">You're searching for: {{searchInput}}</h1>
      <SearchResult v-for="result in searchResults" :key="result.id" :result="result"/>
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

<style>

</style>