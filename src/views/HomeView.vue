<template>
  <div>
      <Navbar />
      <section class="home">
          <div class="wallpaper">
            <h1 class="text">Wellcome To BU STORE</h1>
            <p class="text-2">clothes & accessories.</p>
              <router-link to="/brand" class="button-h"> 
                  <BButton block variant="primary"> SHOP NOW !</BButton>
              </router-link>
          </div>  
                
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  data() {
    return {
    
    };
  },
  components: {
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wallpaper {
  background-image: url(https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
}

.text {
  text-shadow: 2px 1px rgb(0, 0, 0);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.text-2 {
  text-shadow: 2px 1px rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-weight: 800;
  font-size: larger;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
