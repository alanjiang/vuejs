<template>
  <div>
  
  <v-title title="Vue Comonent"></v-title>
  
  <v-button @click="click">Click</v-button>
  <p>
     <img src="images/woman.jpeg" >
  </p>
  
  </div>

</template>

<script>
import vTitle from './title.vue';
import vButton from './button.vue';

export default{

     components:{
     
         vTitle,
         vButton
     },
     
     methods:{
     
      click (e){
      
         console.log(e);
         console.log('---I am clicked---');
      }
     
     
     }


}




</script>