import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: null,
    quotes: [],
  },
  getters: {
    getAdmin(state) {
      return state.admin;
    },
    getQuotes(state) {
      return state.quotes;
    },
  },
  mutations: {
    setAdmin(state, payload) {
      state.admin = payload;
    },
    addQuotes(state, payload) {
      state.quotes = payload;
    },
    addQuote(state, payload) {
      state.quotes.unshift(payload);
    },
    deleteQuote(state, id) {
      state.quotes.splice(state.quotes.indexOf(state.quotes.find(ele => ele.id === id)), 1);
    },
  },
  actions: {
    setAdmin({ commit }, payload) {
      commit('setAdmin', payload);
    },
    addQuotes({ commit }, payload) {
      commit('addQuotes', payload);
    },
    addQuote({ commit }, payload) {
      commit('addQuote', payload);
    },
    deleteQuote({ commit }, id) {
      commit('deleteQuote', id);
    },
  },
});
