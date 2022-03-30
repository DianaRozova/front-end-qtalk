import { createStore } from 'vuex'

import lang from './lang'
import contacts from './contacts'
import user from './user'
import messages from './messages'

export default createStore({
  modules: {
    lang,
    contacts,
    user,
    messages
  }
})
