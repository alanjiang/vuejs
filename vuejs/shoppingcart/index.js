
    
    var app= new Vue({
    	 
    	 el:"#app",
    	 
    	 data:{
    		
    		list:[
    			
    		   {
    			   id:1,
    			   name:'iPhone 7',
    			   
    			   price:6188,
    			   
    			   count:1
    			   
    		   },
    		   
    		   
    		   {
    			   id:2,
    			   name:'iPad Pro',
    			   
    			   price:5688,
    			   
    			   count:1
    			   
    		   },
    		   
    		   {
    			   id:3,
    			   name:'MacBook Pro',
    			   
    			   price:21488,
    			   
    			   count:1
    			   
    		   }
    			
    		]
    
    
    		
    	 },
    	 
    	 
    	 computed:{
    		 
    		totalPrice:function(){
    			var total=0;
    			
    			this.list.forEach(function(d){
    				total+=(d.price)*(d.count);
    			});
    			
    			return total;
    		} 
    		 
    		 
    		 
    	 },
    	 
    	 methods:{
    		 
    		 handleReduce:function(index){
    			 
    			if(this.list[index].count === 1)  return;
    			this.list[index].count--;
    		 },
    		 
             handleAdd:function(index){
    			 
            	 this.list[index].count++;
    		 },
    		 
             handleRemove:function(index){
            	 this.list.splice(index,1);
    			 
    		 }
    		 
    	 }
    	 
    	 
     })
    
 