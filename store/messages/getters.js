export default {
  getListLastMessages (state) {
    const lastMes = []
    const usersId = []
    state.messages.forEach(element => {
      if (usersId.indexOf(element.Id) < 0) {
        lastMes.push(element)
        usersId.push(element.Id)
      }
    })
    return lastMes
  },
  getListMessagesByUser (state) {
    return state.messages.filter(element => element.Id === 1)
  }
}
