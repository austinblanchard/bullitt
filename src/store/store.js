import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nav_is_open: false,
    count: 0
  },

  getters: {
    isNavOpen: state => state.nav_is_open,
    counter (state) {
      return state.count
    }
  },

  mutations: {
    changeNavToggle: (state) => {
      state.nav_is_open = !state.nav_is_open
    },
    incrementCounter (state, payload) {
      state.count += payload
      state.nav_is_open = false
    }
  },

  actions: {
    toggleNav ({ commit }, payload) {
      commit('changeNavToggle', payload)
    },
    inrementAction ({ commit }, payload) {
      commit('incrementCounter', payload)
    }
  }
})
