Vue.component('tabs',{
	
	template:'<div class="tabs"> '+
	
	
	'<div class="tabs-bar"> '+
	
	   ' <div :class="tabCls(item)"    v-for="(item,index) in navList"  @click="handleChange(index)">'+
	
	    '{{ item.label }} '+
	
	    '</div>'+
	
	 '</div>'+
	 
	 '<div class="tabs-content"> '+
	 
	 '<slot></slot>'+
	 
	 '</div>'+
	 
	 '</div>',
	 
	 
	 props:{
		 
		value:{
			
			type:[String]
		} 
		 
		 
	 },
	 
	 data:function(){
		 
		return {
			
			currentValue:this.value,
			navList:[]
			
		} 
		 
		 
	 },
	 
	 methods:{
		 
		 tabCls:function(item){
			// alert('item.name='+item.name+',this.currentValue='+this.currentValue);
			 return [
				 
				 'tabs-tab',{
					 
					 'tabs-tab-active':item.name === this.currentValue
				 }
				 
			 ]
		 },
		 
		 
		 getTabs(){
			 
			 var tabs=[];
			 tabs =this.$children.filter(function(item){
				 
				 
				 return item.$options.name === 'pane';
				 
				 
				 
			 });
			 
			 
			 
			 return tabs;
			 
			 
			 
		 },
		 
		 updateNav(){
			 
			 //alert('this.$parent.updateNav() called ')
			 this.navList=[];
			 var __this=this;
			 
			 this.getTabs().forEach(function(pane,index){
				 
				__this.navList.push({
					
					label:pane.label,
					
					name:pane.name
					
				});
				
				
				
				if(index==0){
					
					if(__this.currentValue){
						
						
						__this.currentValue=pane.name;
						
					}
					
					
					
				}
				
				 
			 });
			 
			 
			   this.updateStatus();
			 
		 },
		 
		 updateStatus(){
			 
			var tabs=this.getTabs();
			
			//tabs.forEach(function(tab){
				
				//alert(tab.name+','+tab.label);
			//});
			
			var __this=this;
			//alert('--tabs.length='+tabs.length+',_this.currentValue='+__this.currentValue);
			tabs.forEach(function(tab){
				
				return tab.show=tab.name === __this.currentValue;
				
			} );
			 
			 
		 },
		 
		 handleChange:function(index){
			 
			 var nav=this.navList[index];
			 
			 var name=nav.name;
			 
			 this.currentValue=name;
			 
			 this.$emit('input',name);
			 
			 this.$emit('on-click',name);
			 
		 }
		 
		 
		 
		 
		 
	 },
	 
	 watch:{
		 
		 value:function(val) {
			 
			 this.currentValue=val;
			 
		 },
		 
		 currentValue:function(){
			 
			 this.updateStatus();
			 
		 }
		 
		 
	 }
	 
	
	
	
});