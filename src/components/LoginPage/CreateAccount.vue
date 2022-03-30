<template>
  <div class="create-account-modal">
    <div class="header-login">
      <h1>{{$t('LoginPage.CreateAccountHeader')}}</h1>
    </div>
    <div class="form-login">
      <ui-textfield outlined
        v-model="nickName"
      >
        {{$t('LoginPage.NameLabel')}}
      </ui-textfield>
      <ui-textfield outlined
        v-model="login"
      >
        {{$t('LoginPage.PhoneLabel')}}
      </ui-textfield>
      <ui-textfield outlined
        v-model="password"
        input-type="password"
      >
        {{$t('LoginPage.PasswordLabel')}}
      </ui-textfield>
    </div>
    <div class="row-buttons">
      <ui-button raised v-on:click="createAccountUser">{{$t('LoginPage.CreateAccountButton')}}</ui-button>
      <ui-button outlined v-on:click="changeForm">{{$t('LoginPage.Cancel')}}</ui-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  props: {
    changeForm: Function
  },
  data () {
  },
  methods: {
    createAccountUser () {
      const data = {
        nickName: this.nickName,
        phone: this.login,
        password: this.password
      }
      this.$store.dispatch('createUser', data).then((result) => {
        if (!result) {
          document.querySelector('.form-login').classList.add('error')
        }
      })
    }
  }
}

</script>

<style lang="scss">

.create-account-modal {
  background-color : antiquewhite;
  width            : 400px ;
  height           : 360px ;
  position         : absolute;
  top              : 0;
  right            : 0;
  bottom           : 0;
  left             : 0;
  margin           : auto;

  .header-login {
    text-align: center;
  }

  .form-login {
    display: flex;
    flex-direction: column;

    .mdc-text-field {
      width: 90%;
      margin: 5px auto;
    }
  }

  .row-buttons {
    position: absolute;
    bottom: 30px;
    width: 100%;

    button {
      width: 50%;
      margin-left: 5px;
      &:first-child {
        width: 35%;
        margin-left: 7%;
      }
    }
  }
}
</style>
