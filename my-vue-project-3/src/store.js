import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: { name: "Stranger" }
  },
  mutations: {
    setName: (state, name) => (state.settings.name = name)
  }
});
