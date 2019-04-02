var webpack=require('webpack');

var HtmlWebpackPlugin=require('html-webpack-plugin');

var ExtractTextPlugin=require('extract-text-webpack-plugin');

var merge=require('webpack-merge');

var webpackBaseConfig=require('./webpack.config.js');


var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');


webpackBaseConfig.plugins=[];

module.exports=merge(webpackBaseConfig,{
	
   output:{
	  
	   publicPath:'/dist/',
	   filename:'[name].[hash].js'
	   
   },
   plugins:[
	   
	   new ExtractTextPlugin({
		   
		   filename:'[name].[hash].css',
		   allChunks:true
		   
	   }),
			   
      new webpack.DefinePlugin({
		   
		    'process.env':{
		    	
		    	 NODE_ENV:'"production"'
		    }
		   
	   }),
	   
	   
	   
	   new HtmlWebpackPlugin({
		   
		   filename:'./index_prod.html',
		   template:'./index.ejs',
		   inject:false
		   
		   
		   
	   }) ,
	   
	   new VueLoaderPlugin(),
	   
	   
	   new ExtractTextPlugin("main.css")
	   
   ],
   
   optimization: {
	    minimizer: [new UglifyJSPlugin()],
	}


});


