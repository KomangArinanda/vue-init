import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const URL = '/api/customers'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    customers: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeCustomers (state, value) {
      state.customers = value
    }
  },
  getters: {
    count: (state) => {
      return state.count
    },
    customers: (state) => {
      return state.customers
    }
  },
  actions: {
    doAlert: () => {
      alert('Hey you call me')
    },
    doIncrement: ({commit, dispatch}) => {
      commit('increment')
      dispatch('doAlert')
    },
    getCustomers: ({commit}) => {
      axios.get(URL)
        .then(response => {
          commit('changeCustomers', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getAddresses: ({commit},id) => {
      axios.get(URL+id+'address')
        .then(response => {
          commit('changeCustomers', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})

export default store
