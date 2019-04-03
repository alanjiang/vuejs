import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Vuex from 'vuex';

import Axios from 'axios';
Vue.use(VueRouter);
Vue.use(Vuex);


Vue.prototype.$axios = Axios;

// 路由配置
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/ajax',
        meta: {
            title: 'Ajax Demo'
        },
        component: (resolve) => require(['./views/ajax.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta: {
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '/order',
        meta: {
            title: 'MyOrder'
        },
        component: (resolve) => require(['./views/order.vue'], resolve)
    },
    
    {
        path: '/vuexdemo',
        meta: {
            title: 'vuexdemo'
        },
        component: (resolve) => require(['./views/vuexdemo.vue'], resolve)
    },
    
    {
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
const state = {
  count: 0
}
const mutations = {
    increment (state) {
	  state.count++
	},
	decrement (state) {
	  state.count--
	}
}

		// actions are functions that cause side effects and can involve
		// asynchronous operations.
		const actions = {
		  increment: ({ commit }) => commit('increment'),
		  decrement: ({ commit }) => commit('decrement'),
		  incrementIfOdd ({ commit, state }) {
		    if ((state.count + 1) % 2 === 0) {
		      commit('increment')
		    }
		  },
		  incrementAsync ({ commit }) {
		    return new Promise((resolve, reject) => {
		      setTimeout(() => {
		        commit('increment')
		        resolve()
		      }, 1000)
		    })
		  }
		}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}



const store= new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

new Vue({
    el: '#app',
    router: router,
    store:store,
    render: h => {
        return h(App)
    }
});