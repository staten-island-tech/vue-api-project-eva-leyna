<template>
  <router-link class="result-link" :to="{name: 'RecipeView', params: {id: result.id}}" >
      <div class="result">
        <img :src="result.image" :alt="result.title">
        <h4 class="result-title">{{result.title}}</h4>
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
        background-color: #888;
        border-bottom: #444 solid .25rem;
        text-decoration: none;
        color: #f5f5f5;
        display: flex;
        flex-direction: row;
        width: 80%;
        margin: .5rem auto;
        align-items: center;
    }
    .result-link {
        text-decoration: none;
    }
    img {
        width: 20%;
        padding: 1rem;
    }
    .result-title {
        width: 80%;
        font-size: 1.75rem;
        padding: 0 2rem;
    }
</style>