import Vue from 'vue';
import VueRouter from 'vue-router';
import App from  './app.vue';

Vue.use(VueRouter);


const Routers=[
	
   {
	  path:'/home' ,
	  
	  //component:(resolve) => require(['./views/home.vue'],resolve)
	  
	  component: './views/home.vue'
	   
   },
   
   {
	   
	   path:'/about' ,
		  
	   //component:(resolve) => require(['./views/about.vue'],resolve)
	   component: './views/about.vue'
   },
   {
	   
	   path:'*',
	   
	   redirect:'/index'
   }
	
	
	
	
];


const RouterConfig={
		
	mode:'history',
	
	routes:Routers
		
		
};


const router=new VueRouter(RouterConfig);

new Vue({
	
	el:"#app",
	
	router:router,
	
	render:h => h(App)
	
	
	
});

