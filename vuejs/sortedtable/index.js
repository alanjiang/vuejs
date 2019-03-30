
Vue.component('vTable',{
	
	  props:{
		   columns:{
			    type:Array,
			    default:[]
		   },
		   data:{
			   
			   type:Array,
			   default:function(){
				   return [];
			   }
		   }
		  
		  
	  },
	  
	  
	  data:function(){
		  
		  return {
			  
			   currentColumns:[],
			   currentData:[]
		  }
		  
	  },
	  
	  
	  render:function(createElement){
		  
		   var _this=this;
		   var ths=[];
		   this.currentColumns.forEach(function(col,index){
			   var span=  createElement('span',col.title);
			   var a_asc=createElement('a',
						  
						  {
					          class: {
					        	 on:col._sortType === 'asc'
					          },
					          
					          on:{
					        	  
					        	  click:function(){
					        		  
					        		  _this.handleSortByAsc(index);
					        	  }
					          }
					  
						  }, '^');
			   
			   var a_desc= createElement('a',
						  
						  {
					          class: {
					        	 on:col._sortType === 'desc'
					          },
					          
					          on:{
					        	  
					        	  click:function(){
					        		  
					        		  _this.handleSortByDesc(index);
					        	  }
					          }
					  
						  }, 'V');	  
			   
			   if(col.sortable){
				   //<th><span>Age</span><a class="">^</a><a class="">V</a></th>
				   ths.push(createElement('th',
						   
				   [
					  span,a_asc,a_desc 
					   
				   ]
				   
				   ));
				   
				   
			   }else{
				   //<th><span>Age</span></th>
				   ths.push(createElement('th',col.title));
				   
			   }
			   
			   
		   });
		   
		   var trs=[];
		   this.currentData.forEach(function(row){
			   var tds=[];
			   _this.currentColumns.forEach(function(cell){
				   var td=createElement('td',row[cell.key]);
				   tds.push(td);
			   });
			   
			   trs.push(createElement('tr',tds));
		   });
		   
		   var tr=createElement('tr',ths);
		   var tbody=createElement('tbody',trs);
		   var thead=createElement('thead',[tr]);
		   var table=createElement('table',[thead, tbody]);
		   return table;
	  },
	  
	  methods:{
		  
		  makeColumns:function(){
			  this.currentColumns=this.columns.map(function(col,index){
				    col._sortType='normal';
				    col._index=index;
				    console.log('----col._index='+index+',col._sortType='+col._sortType)
				    return col;
			  });
			  console.log('--map after---');
			  this.currentColumns.forEach(function(e){
				  
				  //console.log(e);
			  });
			  
		  },
		  
		  makeData:function(){
			  
			 // this.currentData=this.data.map(function(row,index){
				  
			//	     row._index=index;
				//     return  row;
			  //});
				     
			  console.log( this.currentData.length);
			  var _this=this;
			  this.data.forEach(function(row,index){
				  
				 
				  _this.currentData.push(
						  {
					   name:row.name,
					   age:row.age,
					   address:row.address,
					   birthday:row.birthday,
					   index:index
				  }
						  );
			  });
			  
			  
		  },
		  
		  handleSortByAsc:function(index){
			  //key:排序的字段，age | birthday
			  var key=this.currentColumns[index].key;
			  console.log('---key='+key)
			  this.currentColumns.forEach(function(col){
				  col._sortType='normal';
			  });
			  var obj={name:'张飞'};
			  console.log('---obj[key]='+obj['name']);
			  this.currentColumns[index]._sortType='asc';
			  this.currentData.sort(function(a,b){
				  console.log('a[key]='+a[key]);
				  return a[key]>b[key] ?1:-1;
			  });
			  
		  },
		  
	      handleSortByDesc:function(index){
			  
	    	  var key=this.currentColumns[index].key;
			  this.currentColumns.forEach(function(col){
				  col._sortType='normal';
			  });
			  
			  this.currentColumns[index]._sortType='desc';
			  this.currentData.sort(function(a,b){
				  
				  return a[key]<b[key] ?1:-1;
			  });
			  
		  }
		  
		  
	  },
	  
	  watch:{
		  
		  data:function(){
			  
			 this.makeData();
			 var sortedColumn=this.currentColumns.filter(function(col){
				  return col._sortType !== 'normal';
			 });
			 
			 if(sortedColumn.length > 0){
				 
				 if(sortedColumn[0]._sortType === 'asc'){
					 
					 this.handleSortByAsc(sortedColumn[0]._index) ;
				 }else{
					 
					 this.handleSortByDesc(sortedColumn[0]._index) ;
				 }
			 }
		  }
		  
		  
	  },
	  
	  
	  mounted(){
		  
		  
		   this.makeColumns();
		   this.makeData();
		  
	  }
	  
	  
	  









	});


var app=new Vue({
	

	  el:'#app',
	  
	  data:{
		  
		  columns:[
			  
			  {
				  
				 title: 'Name',
				 
				 key:'name'
			  },
			  {
				  
				  title:'Age',
				  key:'age',
				  sortable:true
			  },
			  {
				  
				  title:'Birthday',
				  key:'birthday',
				  sortable:true
			  },
			  {
				  
				  title:'Address',
				  key:'address'
			  }
			     
		  ],
		  
		  data:[
			  
			  {
				  
				  name:'A1',
				  age:18,
				  birthday:'1990-12-01',
				  address:'New York, Street 211,540 Room'
			  },
			  
	          {
				  
				  name:'A2',
				  age:21,
				  birthday:'1989-12-01',
				  address:'New York, Street 211,540 Room'
			  },
			  
			  
	           {
				  
				  name:'A3',
				  age:17,
				  birthday:'1999-12-01',
				  address:'New York, Street 211,540 Room'
			  }
			  
		  ]
		  
	  },
	  
	  methods:{
		  
		  handleAddData:function(){
			  
			  this.data.push({
				  name:'B3',
				  age:26,
				  birthday:'1990-11-09',
				  address:'New York, Street 211,540 Room'
			  });
			  
			  
			  
			  
		  }
		  
		  
		  
	  }
	  
	  


	});
