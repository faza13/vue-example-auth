import Axios from "axios";

const states = {
  loggingIn: false,
  loginError: '',
  loginSuccessful: false
}

const getters = {

}

const actions = {
  doLogin({commit}, loginData) {

    return new Promise((resolve, reject) => {
      Axios.post('https://reqres.in/api/login', {
        ...loginData
      })
      .then((result) => {
        commit('loginStop', null);
        resolve(result);
      })
      .catch( error => {
        commit('loginStop', error.response.data.error);
        reject(error);
      })
    });

  }
}

const mutations = {
  loginStart: states => states.loggingIn = true,
  loginStop: (states, errorMessage) => {
    states.loggingIn = false;
    states.loginError = errorMessage;
    states.loginSuccessful = !errorMessage;
  }
}

export default {
  namespaced: true,
  states,
  getters,
  actions,
  mutations
}