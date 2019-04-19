export const SET_LOADING = 'SET_LOADING';

export const state = () => ({
  isLoading: true,
});

export const actions = {
  setLoading({ commit }, status) {
    commit(SET_LOADING, status);
  },
};

export const mutations = {
  [SET_LOADING]: (state, status) => {
    state.isLoading = status;
  },
};
