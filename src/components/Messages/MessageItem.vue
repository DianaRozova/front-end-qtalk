<template>
    <div :class="getClass()" >
        {{item.mes}}
    </div>
</template>

<script>
export default {
  name: 'LastMessageItem',
  props: {
    item: Object
  },
  methods: {
    getClass () {
      return this.item.From ? 'message message-left' : 'message message-right'
    }
  }
}
</script>

<style lang="scss">
.message-left {
  background-color: #DEB887;
  padding: 5px 10px;
}
.message-right {
  background-color: #7FFFD4;
  padding: 5px 10px;
  margin-left: auto;
}
</style>
