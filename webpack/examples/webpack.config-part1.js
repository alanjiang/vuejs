
var ExtractTextPlugin=require('extract-text-webpack-plugin');


const VueLoaderPlugin = require('vue-loader/lib/plugin');

var path=require('path');
 var config={
    entry:{
       main:'./main.js'
    },
    output:{
       path:path.join(__dirname,'./dist'),
       
       publicPath:'/dist',
       
       filename:'bundle.js'
    
    },
    
    module:{
    
    	rules: [
    		
    		{
    	        test: /\.vue$/,
    	        loader: 'vue-loader'
    	      },
    	     
    	      {
    	        test: /\.js$/,
    	        loader: 'babel-loader',
    	        exclude: /(node_modules|bower_components)/,
    	        
    	         options: {
                    presets: ['env']
                  }
    	      },
    	      
    	      {
    	        test: /\.css$/,
    	        use: [
    	        	'vue-style-loader',
    	            'css-loader'
    	            
    	        ]
    	      },
    	      
    	      {
    	    	  test:/\.(git|jpg|jpeg|png|svg|eot|ttf)\??.$/,
    	    	  loader:'url-loader?limit=1024'
    	      }
    		  
        ]
   
    
    },
    
    plugins:[
    
    	//new ExtractTextPlugin("main.css"),
    	new VueLoaderPlugin()
    ]
 
 };
 module.exports=config;