<template>
    <div v-if="userInfo" class="contact-info-block">
        <div class="avatar" v-if="userInfo.Name">{{getImage()}}</div>
        <div class="user-name" v-if="userInfo.Name">{{userInfo.Name}}</div>
        <div class="user-phone" v-if="userInfo.phone">{{$t("ContactPage.phone") + ' ' + userInfo.phone}}</div>
    </div>
</template>

<script>

export default {
  name: 'ContactInfo',
  props: {
    userInfo: Object
  },
  methods: {
    getImage () {
      return this.userInfo.Name.match(/[A-ZА-Я]/g).join('')
    }
  }
}

</script>

<style lang="scss">
.contact-info-block{
  .avatar {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 15px auto;
    line-height: 80px;
    font-size: 25px;

    background-color: aqua;
    text-align: center;
    position: relative;
  }
  .user-name {
    text-align: center;
    font-weight: bold;
  }
  .user-phone {
    text-align: center;
    margin: 15px 0;
  }
}
</style>
