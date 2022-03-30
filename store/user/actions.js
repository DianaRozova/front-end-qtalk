export default {
  loginUser ({ state }, data) {
    let getUserToken = false
    state.userList.forEach(element => {
      if (element.phone === data.login && element.password === data.password) {
        element.token = token()
        state.userToken = element.token
        getUserToken = true
      }
    })
    return getUserToken
  },
  logoutUser ({ state }) {
    state.userToken = null
  },
  createUser ({ state }, data) {
    const newUser = {
      token: token(),
      ...data
    }
    state.userToken = newUser.token
    state.userList.push(newUser)
  }
}

const rand = function () {
  return Math.random().toString(36).substr(2) // remove `0.`
}

const token = function () {
  return rand() + rand() // to make it longer
}
