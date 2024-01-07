export const state = () => ({
  counter: 0,
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // if (req.session.user) {
    //   commit('increment', req.session.counter)
    // }
  },
  fetchCounter({ state }) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
}
