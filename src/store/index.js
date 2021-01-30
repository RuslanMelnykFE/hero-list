import Vue from 'vue';
import Vuex from 'vuex';

// modules
import people from './modules/people';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    people,
  },
});
