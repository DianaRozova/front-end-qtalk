<template>
    <ui-list>
        <ui-item v-for="item in contacts" :key="item.id">
            <contact-item :item="item" :onUserClick="changeUserFunction"/>
        </ui-item>
    </ui-list>
</template>

<script>
import ContactItem from './ContactItem'

export default {
  name: 'ContactList',
  props: {
    changeUserFunction: Function
  },
  computed: {
    contacts () {
      return this.$store.getters.getListContacts
    }
  },
  components: {
    ContactItem
  }
}
</script>
