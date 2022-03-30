<template>
  <login-form v-if="isLoginForm" :changeForm="changeForms"/>
  <create-account v-else :changeForm="changeForms"/>
</template>

<script>
import CreateAccount from './CreateAccount'
import LoginForm from './LoginForm'

export default {
  components: {
    CreateAccount,
    LoginForm
  },
  name: 'Login',
  data () {
    return {
      isLoginForm: true
    }
  },
  methods: {
    changeForms () {
      this.isLoginForm = !this.isLoginForm
    }
  }
}

</script>

<style lang="scss">

.login-modal {
  background-color : antiquewhite;
  width            : 400px ;
  height           : 300px ;
  position         : absolute;
  top              : 0;
  right            : 0;
  bottom           : 0;
  left             : 0;
  margin           : auto;
}
</style>
