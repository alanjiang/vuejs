1, init a webpack project

$npm init 

generate a package.json file

2, install the webpack in local

$npm install webpack --save-dev

after this step, more files are found under the project:

node_modules, package-lock.json


{
  "name": "my-webpack",
  "version": "1.0.0",
  "description": "A demo for vue webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Alan P Jiang, 2019/03/28",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.29.6"
  }
}

3, install webpack-dev-server


$npm install webpack-dev-server --save-dev

出现：webpack-dev-server字样，说明安装成功

修改package.json 的scripts中增加一个快速启动webpack-dev-server服务的脚本。

"scripts":

{

  "dev":"webpack-dev-server --host 127.0.0.1 --port 8080 --open --config webpack.config.js"

}

运行：
4,安装webpack-cli
$npm i -D webpack-cli

5,启动服务：
$npm run dev 

6,打包：

node_modules/.bin/webpack main.js -o dist/bundle.js --mode=production
 
 运行完打包命令，可以发现dist/bundle.js

7, 在工程目录下创建webpack.config.js, main.js,index.html 

 三个文件，开始一个webpack 开发。
 
 7.1 inde.html
 <div id="app"> </div>
 <script src="dist/bundle.js"></script>
 
 7.2 main.js
 
 document.getElementById("app").innerHTML='Hello Webpack'
 
 7.3 webpack.config.js 
 var path=require('path');
 
 var config={
    entry:{
       main:'./main.js'
    },
    output:{
       path:path.join(__dirname,'./dist'),
       
       publicPath:'/dist',
       
       filename:'bundle.js'
    
    }
 
 };
 
 
 8, 加载器Loader
 
   改写上面的实例，让字体变大，红色。
   
   
 
 8.1 安装加载器
 npm install css-loader --save-dev
 npm install style-loader --save-dev
 8.2 webpack.config.js 加入module:{rules:}加载器
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
    
      rules:[
          {
            test:/\.css$/,
            use:{
            
                'style-loader',
                'css-loader'
              }
          
          }
      
      ]
    
    
    }
 
 };
 
 
 8.3 style.css
 #app{
   font-size:24px;
   color:#f50;
 } 

8.4 main.js

import './style.css';
document.getElementById("app").innerHTML='Hello Webpack'

9, plugins 插件
                                                                            
考虑到项目中有多个样式文件，不能通过import './style.css' 来导入，而是希望将各个散落的.css 文件都抽取出来，

合在一个man.css 文件中 ，于是借助插件extract-text-webpack-plugin


9.1 npm install extract-text-webpack-plugin --save-dev

9.2 webpack.config.js


 var path=require('path');
 var ExtractTextPlugin=require('extract-text-webpack-plugin');
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
    
      rules:[
          {
            test:/\.css$/,
            use:ExtractTextPlugin.extract(
               {
                  use:'css-loader',
                  fallback:'style-loader'
               }
            
            )
          
          }
      
      ]
    
    
    },
    
    plugins:[
    
        ExtractTextPlugin("main.css")
    ]
 
 };
 module.exports=config;
 
 9.3 index.html
 
 <link rel="stylesheet" type="text/css" href="./dist/main.css">
 
 9.4 main.js  去掉 import './style.css';
 
//import './style.css';

document.getElementById("app").innerHTML="Hello World!";
 
 
use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
fallback:编译后用什么loader来提取css文件
publicfile:用来覆盖项目路径,生成该css文件的文件路径
 

 npm list -g --depth
 
 10, vue-loader
 10.1 
 
 npm install --save vue
 npm install --save-dev vue-loader
 npm install --save-dev vue-style-loader
 npm install --save-dev vue-template-compiler
 npm install --save-dev vue-hot-reload-api
 npm install --save-dev babel
 npm install --save-dev babel-loader@7
 npm install --save-dev babel-core
 npm install --save-dev babel-plugin-transform-runtime
 
 npm install --save-dev babel-preset-env
 
 npm install --save-dev babel-runtime
 
 10.2 .babelrc
 
 {
    "presets":["es2015"],
    "plugins":["transform-runtime"],
    "comments":false
 
 }
 
 报了大量的错，原因是插件babel-preset-env 没有安装好
 
 10.3 app.vue
 
 <template>
  <div>Hello {{ name }} </div>
 </template>
 
<script>
  export default{
    data:function(){
       return {
         name:'Vue.js'
       }
    
    }
  
  }
</script>

<style scoped>
  
  div{
  
     color:#f60;
     font-size:24px;
  
  }

</style>
 
 
 npm install sass-loader node-sass --save-dev
 
 npm install coffee-loader --save-dev
 
 npm install pug --save-dev
 
 
 同时安装两个插件依赖：
 npm install -D vue-loader vue-template-compiler
 
 
 11, 生产环境打包部署
 
 package.json
 
 "scripts":
 {
    ...
    "build":"webpack --progress --hide-modules --config webpack.prod.config.js"
 }
 
 2,
  npm install webpack-merge --save-dev
  npm install html-webpack-plugin --save-dev
  npm install uglifyjs-webpack-plugin --save-dev
 