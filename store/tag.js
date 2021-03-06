import api from '../api'

const state = () => ({
  list: []
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action
  }
}

const actions = {
  async getList({ commit }) {
    const res = await api.tag.getList()
    commit('GET_LIST', res)
  }
}

export { state, mutations, actions }
