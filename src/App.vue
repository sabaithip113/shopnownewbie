<template>
  <BNav>
    <router-link to="/"><BNavItem><i-iconoir-home/> Home</BNavItem></router-link>
    <router-link to="/brand"><BNavItem><i-solar-t-shirt-broken/> Catalog</BNavItem></router-link>
    <router-link to="/order"><BNavItem><i-mdi-light-cart/> Cart</BNavItem></router-link>
  </BNav>
  
  <router-view></router-view>
</template>

<style>
svg {
  color: rgb(104, 171, 242); /*สีโลโก้*/
  height: .8rem;
  margin-right: 3px;
}


.nav {
  background-color: #ffffff; /*สีเมนูบาร์*/
  justify-content: space-evenly;
  align-content: center;
  height: 4rem;
  margin-bottom: 0.5rem !important;
}

.nav a {
  font-size: medium;
  color: rgb(4, 171, 236);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav a.router-link-exact-active {
  color: white;  
}

.nav a:hover {
  color: rgb(18, 225, 166);
}

.nav a:focus {
  color: rgb(0, 123, 255);
}

</style>
