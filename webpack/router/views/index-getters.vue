<template>
    <div>
        <h1>首页</h1>
        
         Number: {{ list }} 
         <!--
         <button @click="handleIncrement">+1</button>
         <button @click="handleDecrease">-1</button>
         -->
        <router-link to="/order">跳转到 Order</router-link>
    </div>
</template>
<script>
    export default {
          
          
         computed:{
              
             list () {
             
                return this.$store.getters.filteredList;
             
             }
         
         }
         
        

    }
</script>