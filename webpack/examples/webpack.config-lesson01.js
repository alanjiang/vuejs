
var ExtractTextPlugin=require('extract-text-webpack-plugin');
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