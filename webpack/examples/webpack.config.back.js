
var ExtractTextPlugin=require('extract-text-webpack-plugin');


const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
                loader:'vue-loader',
                options:{
                	 loaders:{
                		 
                		   css:ExtractTextPlugin.extract(
                			{
                				use:'css-loader',
                				fallback:'vue-style-loader'
                					   
                		    })
                	     }//end of loaders
                 }//end of options
            },
            {
            	test:/\.js$/,
            	loader:'babel-loader',
            	exclude:/node_modules/
            	
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ 
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
        ]
   
    
    },
    
    plugins:[
    
    	new ExtractTextPlugin("main.css")
    ]
 
 };
 module.exports=config;