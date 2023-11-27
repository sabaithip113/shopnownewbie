<template>
  <h1>
    FASION STORE <span style="color: cornflowerblue; margin-reight: 5px"> COLLECTION</span>
  </h1>
  <div class="brand-gal">
    <div class="brand" v-for="brand in brands" :key="brand.id">
      <router-link :to="'/gallary/'+brand.id">
        <img class="img-brand" :src="brand.pic" />
        <div style="text-decoration:inherit">{{ brand.brand.toLocaleUpperCase() }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import products from "../assets/products.json";

export default {
  name: "HomeView",
  data() {
    return {
      brands: products.brand,
    };
  },
};
</script>

<style>
a div{
  font-size: smaller;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: rgb(20, 153, 236);
  text-decoration: none;
}


.brand {
  height: 150px;
}

.img-brand {
  height: 70%;
  width: auto;
  overflow: hidden;
  border-radius: 25%;
}

.brand-gal {
  margin: 1rem 2rem 2rem;
  display: grid;
  gap: 0.2rem;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  justify-items: center;
}
</style>
