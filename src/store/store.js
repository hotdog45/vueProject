import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isLogin: ""
};

const mutations = {
  changeToken(state,msg){
    state.isLogin = msg;
    localStorage.setItem('isLogin',msg)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
