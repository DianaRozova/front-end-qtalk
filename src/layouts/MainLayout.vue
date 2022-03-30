<template>
  <div v-if="haveActiveUser" class="main-layout">
      <Header/>
      <main-content/>
  </div>
  <login v-else/>
</template>

<script>
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Login from '../components/LoginPage/Login'

export default {
  name: 'MainLayout',
  computed: {
    haveActiveUser () {
      return this.$store.getters.getToken
    }
  },
  components: {
    Header,
    MainContent,
    Login
  },
  watch: {
    '$store.userToken' (newToken) {
      if (newToken !== null) {
        this.haveActiveUser = true
      } else {
        this.haveActiveUser = false
      }
    }
  }
}
</script>

<style lang="scss">
.main-layout {
  height   : 100%;
  width    : 100%;
  position : absolute;
  overflow : hidden;
  left     : 0;
  top      : 0;
}
</style>
