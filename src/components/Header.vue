<template>
    <grid-layout className="header">
        <template v-slot:grid-menu>
            <router-link to="/" class="logo-qtalk" />
        </template>
        <template v-slot:grid-list>
            {{$t(pagesNames[nowPage])}}
        </template>
    </grid-layout>
</template>

<script>
import GridLayout from '../layouts/GridLayout.vue'

export default {
  name: 'Header',
  data () {
    return {
      nowPage: 0,
      pagesNames: ['Contacts', 'Messages', 'Settings'],
      pagesRouters: ['/contacts', '/messages', '/settings']
    }
  },
  components: {
    GridLayout
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
.header{
    height           : 5%;
    background-color : burlywood;

    .menu {
        position : relative;

        .logo-qtalk {
            height          : 100%;
            background      : url('../assets/logo.png') no-repeat center;
            background-size : contain;

            margin          : 2px auto;
            position        : absolute;
            top             : 0px;
            left            : 0;
            right           : 0;
        }
    }

    .list {
        margin : auto 30px;
    }
}
</style>
