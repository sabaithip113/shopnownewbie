<script>
sessionStorage.removeItem('prod')
var od = sessionStorage.getItem('prod')? JSON.parse(sessionStorage.getItem('prod')) : []


function cal(od,num){
    od[num].qty = od[num].qty+1
}

export default {
  props: ['product', 'name', 'brand'],
  methods:{  
    qty(id){
      return od.filter(el => el.id == id)[0]?.qty
    },
    deleteProduct(e,p1){ 
      if(e.buttons == 1){
        let news = {id:p1.id , name: p1.name, price: p1.price, qty : 1 }
        let num = od.findIndex(el => el.id == p1.id) 
        num < 0 ? od.push(news): cal(od,num)
        sessionStorage.setItem('prod', JSON.stringify(od))
      } else if(e.buttons == 2) {
        let num = od.findIndex(el => el.id == p1.id) 
        if(num >= 0){
          od[num].qty =  od[num].qty-1
          od = od.filter(el => el.qty != 0)
          sessionStorage.setItem('prod', JSON.stringify(od))
        }
      }
      this.$forceUpdate();
    }
  }
}



</script>

<template>
  <div class="product"  v-on:contextmenu.prevent>
    <div v-for="pro in name != '' ?  product['products'].filter(el => el.type == name): brand ? product['products'].filter(el => el.brand == brand) : product['products']" :key="pro.id" class="container box" v-on:mousedown="deleteProduct($event, pro)">
      <span class="qty">{{ qty(pro.id) }}</span>
      <img class="pic" v-bind:src="pro.pic"/>
      <div style="margin:.5rem 0">{{pro.name}}</div>
      <div> </div>
      <div style="font-size:9px;"><span style="color:white">{{pro.price}} </span><span> Bath</span></div>
    </div>
  </div>
</template>



<style scoped>
.product {
  margin: 1rem 2rem 2rem;
  display: grid;
  gap: .2rem;
  grid-template-columns: repeat(auto-fill , minmax(10rem, 1fr));
  justify-items: center;
}

.box {
  height: 15rem;
  width: 10rem;
  border-radius: 5px;
  background-color: rgb(144, 212, 241);
  margin-bottom: 1rem;
  position: relative;
}

.pic{
    margin-top: 1rem;
    width: auto;
    height: 60%;
}

.qty{
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: white;
  color: darkslategray;
  padding: 0px 4px;
  border-radius: 30%;
}
</style>
