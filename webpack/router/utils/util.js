
import axios from 'axios';
import qs from 'qs';
const instance=axios.create({
	
	  baseURL:'http://www.dianliaome.com',
	  timeout:3000,
	  transformRequest: [function (data) {
		　　data = qs.stringify({});
		    return data;
		  }],
		  transformResponse: [function (data) {
		    // 这里提前处理返回的数据
		    return data;
		  }],
		  // 请求头信息
		  headers: {'X-Requested-With': 'XMLHttpRequest'},
		  
		  responseType: 'json'

});

export default instance;

