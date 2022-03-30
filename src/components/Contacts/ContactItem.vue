<template>
    <div class="contact-item" v-on:click="clickUser">
        <div class="contact-item__image">
            <span>{{getImage()}}</span>
            <div :class="item.Status"></div>
        </div>
        <div class="contact-item__name">{{item.Name}}</div>
    </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    item: Object,
    onUserClick: Function
  },
  methods: {
    getImage () {
      return this.item.Name.match(/[A-ZА-Я]/g).join('')
    },
    clickUser () {
      this.onUserClick(this.item)
    }
  }
}
</script>

<style lang="scss">
.contact-item {
    display: flex;
    line-height: 36px;

    &__image {
        border-radius: 50%;
        width: 36px;
        height: 36px;
        margin-right: 15px;

        background-color: aqua;
        text-align: center;
        position: relative;

        .online, .offline {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 10px;
            width: 10px;
            border-radius: 50%;
        }

        .online{
            background-color: green;
        }

        .offline{
            background-color: red;
        }
    }
}
</style>
