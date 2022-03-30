<template>
  <ui-list>
    <ui-item v-for="item in contacts" :key="item.id">
      <last-message-item :item="item" :onUserClick="changeUserFunction"/>
    </ui-item>
  </ui-list>
</template>

<script>
import LastMessageItem from './LastMessageItem.vue'

export default {
  name: 'LastMessagesList',
  props: {
    changeUserFunction: Function
  },
  computed: {
    contacts () {
      return this.$store.getters.getListLastMessages
    }
  },
  components: {
    LastMessageItem
  }
}
</script>

<style lang="scss">
li {
  &:first-child {
    margin-top: 0;
  }
  margin: 15px 0;
}
</style>
