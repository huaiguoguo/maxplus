import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		leftNavStatus: false
	},
	getters: {
		getLeftNavStatus(state) {
			return state.leftNavStatus
		}
	},
	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		},
		setLeftNavStatus(state, payload) {
			state.leftNavStatus = payload
		}
	},
	actions: {

	}
})

export default store
