<template>
    <div>
        <h1>Ajax</h1>


      <button @click="getApiData">Ajax获取数据</button>   
      
            
        <router-link to="/index">Home Page</router-link>
    </div>
</template>
<script>

    import $ from 'jquery';
    
    export default {
       
        methods: {  
           getApiData () 
           {
              
	
        var json={"province":"福建省"};
		var jsondata=JSON.stringify(json);
         $.ajax({
           type:"POST",
           contentType: "application/json; charset=utf-8",
           url:"http://www.dianliaome.com/citys", 
           data:jsondata,
           datatype: "json",
           success: function (message) 
		   {
			   var resMsg=message.resMsg;
			   var resCode=message.resCode;
			  
			   alert(resMsg);
			   
			   alert(message.result);
			   
              
            },
            
            error: function (jqXHR, textStatus, errorThrown) 
		    {
               
			     alert("--error="+jqXHR.readyState); 
            }
              
         });
           }
        }
    }
</script>