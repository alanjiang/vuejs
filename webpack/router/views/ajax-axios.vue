<template>
    <div>
        <h1>Ajax</h1>


      <button @click="getApiData">Ajax获取数据</button>   
      
            
        <router-link to="/index">Home Page</router-link>
    </div>
</template>
<script>

    import $ from 'jquery';
    import Ajax from '../utils/util.js';
   
    export default {
       
        methods: {  
           getApiData () 
           {
                //alert(JSON.stringify({province:'福建省'}));
               Ajax({
                  method:'post',
                  url:'/citys',
                  data:{province:'福建省'}
                 
               }).then(res => {
                    console.log(res);
                }).catch(error =>{
                    alert(error);
                });
          
           }
      }//end of methods
 }        
</script>