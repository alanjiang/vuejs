<template>
    <div>
        <h1>首页</h1>
        
         {{ count }} 
         <button @click="handleIncrement">+1</button>
         <button @click="handleDecrease">-1</button>
        <router-link to="/order">跳转到 Order</router-link>
    </div>
</template>
<script>
    export default {
          
          
         computed:{
              
             count () {
              
                 return this.$store.state.count;
             
             }
         
         },
         
         methods:{
            
             handleIncrement (){
                   console.log('---increment--');
                   this.$store.commit('increment');
             },
             
             handleDecrease() {
             
                   this.$store.commit('decrease');
             }
         
         }

    }
</script>