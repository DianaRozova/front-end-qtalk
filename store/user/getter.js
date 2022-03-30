export default {
  userData (state) {
    let returnUser = null
    state.userList.forEach(element => {
      if (element.token === state.userToken) {
        returnUser = element
      }
    })
    return returnUser
  },
  getToken (state) {
    return state.userToken !== null
  }
}
