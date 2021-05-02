const state = {
  name: localStorage.getItem('selectName') || '北京',
  id: localStorage.getItem('selectId') || 110100
}
const actions = {
}
const mutations = {
  CITY_INFO (state, payload) {
    state.name = payload.name
    state.id = payload.id
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
