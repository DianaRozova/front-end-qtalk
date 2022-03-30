<template>
    <div class="message-contact-item" v-on:click="clickUser">
        <div class="message-contact-item__image">
            <span>{{getImage()}}</span>
            <div :class="item.Status"></div>
        </div>
        <div class="contact-list">
          <div class="message-contact-item__name">{{item.Name}}</div>
          <div class="message-contact-item__lmes">{{item.mes}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LastMessageItem',
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
.message-contact-item {
    display: flex;
    line-height: 36px;

    &__image {
        border-radius: 50%;
        width: 36px;
        height: 36px;
        margin: auto 15px auto 0;
        line-height: 36px;

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

    &__lmes {
      line-height: normal;
      font-size: 14px;
    }
}
</style>
