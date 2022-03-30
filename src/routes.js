import { createRouter, createWebHistory } from 'vue-router'

import SettingsPage from './components/Setting/SettingsPage'
import ContactList from './components/Contacts/ContactList'
import LastMessagesList from './components/Messages/LastMessagesList'

const routes = [
  { path: '/', component: ContactList },
  { path: '/home', component: ContactList },
  { path: '/settings', component: SettingsPage },
  { path: '/contacts', component: ContactList },
  { path: '/messages', component: LastMessagesList }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
