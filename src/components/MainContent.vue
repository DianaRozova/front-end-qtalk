<template>
  <grid-layout className="main-content">
    <template v-slot:grid-menu>
      <div class="menu__links">
        <router-link to="/contacts" class="logo-contacts" />
        <router-link to="/messages" class="logo-messages" />
      </div>
      <router-link to="/settings" class="logo-settings" />
    </template>
    <template v-slot:grid-list>
      <router-view :changeUserFunction="changeContactInfo"></router-view>
    </template>
    <template v-slot:grid-content>
      <contact-info v-if="nowPage == 0" :userInfo="showUser" />
      <messages-content v-else-if="nowPage == 1" :userInfo="showUser" />
    </template>
    <template v-slot:grid-info>
      <contact-info v-if="nowPage == 1" :userInfo="showUser" />
    </template>
  </grid-layout>
</template>

<script>
import GridLayout from '../layouts/GridLayout.vue'
import ContactInfo from './Contacts/ContactInfo.vue'
import MessagesContent from './Messages/MessagesContent.vue'

export default {
  name: 'MainContent',
  components: {
    GridLayout,
    ContactInfo,
    MessagesContent
  },
  data: () => {
    return {
      showUser: null,
      nowPage: 0,
      pagesNames: ['Contacts', 'Messages', 'Settings'],
      pagesRouters: ['/contacts', '/messages', '/settings']
    }
  },
  methods: {
    changeContactInfo (user) {
      this.showUser = user
    }
  },
  watch: {
    '$route.path' (newLink) {
      this.pagesRouters.forEach((router, index) => {
        if (newLink.indexOf(router) !== -1) {
          this.nowPage = index
        }
      })
    }
  }
}

</script>

<style lang="scss">
.main-content{
    height : 95%;

    .menu {
        display         : flex;
        flex-direction  : column;
        align-items     : flex-end;

        &__links {
            margin          : auto;
            display         : flex;
            flex-direction  : column;
            justify-content : center;

            .logo-contacts {
                width           : 36px;
                height          : 36px;
                background      : url('../assets/contact-book.png') no-repeat center;
                background-size : contain;
                border          : none;
                margin          : 15px auto;
            }
            .logo-messages {
                width           : 36px;
                height          : 36px;
                background      : url('../assets/chat.png') no-repeat center;
                background-size : contain;
                border          : none;
                margin          : 15px auto;
            }
        }
        .logo-settings {
            width           : 36px;
            height          : 36px;
            background      : url('../assets/settings.png') no-repeat center;
            background-size : contain;
            border          : none;

            margin          : 10px auto;
        }
    }

    .list {
        margin: 15px;
    }
}
</style>
