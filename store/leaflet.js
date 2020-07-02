export const state = () => ({
  moneyMap: [],
})

export const actions = {
  async get3000MoneyMapJson({ commit }) {
    try {
      const data = await this.$axios.$get(
        `/3000gov/hpgapi-openmap/api/getPostData`
      )
      commit('SET_ALL_3000MONEY_MAP_INFO', data)
    } catch (err) {
      console.log(err)
      throw err
    }
  },
}
export const mutations = {
  SET_ALL_3000MONEY_MAP_INFO(state, money) {
    state.moneyMap = money
  },
}
