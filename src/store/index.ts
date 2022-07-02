import { createStore } from 'vuex'

export default createStore({
  state: {
    // 登陆状态 1为登陆 0为未登录
    login : 0
  },
  getters: {
  },
  mutations: {
    MODIFY_LOGIN(state,value){
      state.login = value;
    }
  },
  actions: {
    modifylogin(context,value:number){
        window.localStorage.setItem("login",value.toString())
        context.commit("MODIFY_LOGIN",value)
    }
  },
  modules: {
  }
})
