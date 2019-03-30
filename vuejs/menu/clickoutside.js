Vue.directive('clickoutside',{
	
	bind:function(el,binding,vnode){
		 alert(binding.value);
		function docHandler(e){
			
			 
			
			 if(e1.contains(e.target)){
				 
				 return false;
			 }
			 
             if(binding.expression){
				 
				 binding.value(e);
			 }
		}
		
		el.__vueClickOutside__=docHandler;
		
		document.addEventListener('click', docHandler);
		
		
	},
	
	unbind:function(el,binding){
		
		document.removeEventListener('click', el.__vueClickOutside__);
		
		delete el.__vueClickOutside__;
		
	}



});



