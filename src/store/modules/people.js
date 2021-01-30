import axios from 'axios';

const apiLink = 'https://swapi.dev/api/';

export default {
  namespaced: true,

  state: {
    people: [],
  },

  mutations: {
    GET_PEOPLE: (state, value) => {
      state.people = value;
    },
  },

  actions: {
    async GET_PEOPLE({ commit }) {
      const { data } = await axios.get(`${apiLink}people/`)
        .catch((error) => console.log(error));

      commit('GET_PEOPLE', data.results);
    },
  },
};
