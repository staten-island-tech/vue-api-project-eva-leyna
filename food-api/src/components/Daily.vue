<template>
  <div id="daily">
    <h1>Daily Recipe</h1>
    <img src="food-api/src/assets/logo.png" alt="filler">
    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis omnis necessitatibus assumenda suscipit quaerat facilis aperiam doloremque ipsam magnam molestiae? Aspernatur quas natus nam! Modi numquam nemo facilis dolorum error.</p>
    <a class="link" href="#">Take Me There =></a>
  </div>
</template>

<script>
export default {
  name: "Daily",
   
}
</script>

<style>
#daily {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  background-color: darksalmon;
}
.desc {
  padding: 1.5rem;
}
img {
  width: 20%;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: black;
  margin: 1rem auto;
  transition: all 0.3s;
}
.link:hover {
  /* border-bottom: .1rem solid black; */
  text-decoration: underline;
}
</style>