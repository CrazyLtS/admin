
export default {
  // some mutation
  getUserIfon (state) {
    state.userName = 'CrazyLtS'
  },
  setAsideWidth (state, width) {
    state.asideWidth = width
  },
  changeModeName (state, modeName) {
    this.state.modeName = modeName
  },
  changeMenuActive (state, index, modeName) {
    this.state.activeIndex = index + ''
  }
}
