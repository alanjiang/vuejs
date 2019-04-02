<template>
    <div>
        <h1>Order message:{{ message }} </h1>
        
        <button @click="handleClick"> Click </button>
        <router-link to="/about">跳转到 about</router-link>
    </div>
</template>
<script>
    export default {
        data (){
        
           return {
             message:'Hello World'
           }
        },
        
        methods:{
        
         handleClick(){
             
              this.message='Hello Vue'
         }
        }
          
    }
</script>