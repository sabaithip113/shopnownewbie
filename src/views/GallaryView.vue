<template>
    <div class="home">
        <h1> {{ brand[this.$route.params.id-1].brand.toLocaleUpperCase() }}
           <span style="color: cornflowerblue; margin-reight: 5px">
            COLLECTION</span>
        </h1>
        <displayProduct name="" :brand="this.$route.params.id" :product="product">  </displayProduct>
      </div>
</template>

<script>
// @ is an alias to /src
import displayProduct from "../components/displayProduct.vue";
import products from "../assets/products.json"

export default {
  name: "HomeView",
  data() {
    return {
      product: products,
      brand: products.brand
    };
  },
  components: {
    displayProduct,
  }
};
</script>
