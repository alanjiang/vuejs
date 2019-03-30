Vue.component('input-number',{
	
  template:
	  
	  
	 '<div class="input-number"> '+
	 
	 '<button @click="handleDown" '+ 
	  
	 '     :disabled="currentValue<=min">-</button> '+
	  
	 ' <input type="text" style="width:30px;" '+
	 '      :value="currentValue" '+
	 '     @change="handleChange"> '+
	         
	  
	        
	  ' <button @click="handleUp" '+
	  '    :diabled="currentValue>=max">+</button> '+
	        
	  
	  '</div>',
	  
	  props:{
		  
		  max:{
			 type:Number,
			 default:Infinity
			  
		  },
		  
		  min:{
			  type:Number,
			  default:-Infinity 
			  
		  },
		  
		  value:{
			  
			  type:Number,
		      default:0
			  
		  }
		  
		  
		  
	  },
	  
	  data:function(){
		  
		    return {
		    	
		    	 currentValue:this.value
		    }
	  },
	  
	  
	  watch:{
		  
		  currentValue:function(newVal,oldVal){
			  alert('--watch--oldVal='+oldVal+',newVal='+newVal);
			  //this.$emit('input',newVal,oldVal);
			  this.$emit('onchange',newVal,oldVal);
		  },
		  value:function(val){
			   this.updateValue(val);
		  }
		  
	  },
	  
	  methods:{
		  
		 updateValue:function(val){
			 
			 if(val > this.max) val=this.max;
			 if(val < this.min) val=this.min;
			 this.currentValue=val;
		 } ,
		 
		 handleDown:function(){
			 
			 if(this.currentValue<this.min) return;
			 this.currentValue-=1;
			 
		 },
		 
		 handleUp:function(){
			 
			 if(this.currentValue>this.max) return;
			 this.currentValue+=1;
			 
		 },
		 handleChange:function(event){
			 
			 var val=event.target.value.trim();
			 
			 var max=this.max;
			 var min=this.min;
			 
			 
			 event.target.value=this.currentValue;
			 
		 }
		 
		 
		 
		 
		  
	  },
	  
	  
	  mounted:function(){
		  alert('--mounted ')
		  //this.updateValue(this.value);
	  }
	  

});



