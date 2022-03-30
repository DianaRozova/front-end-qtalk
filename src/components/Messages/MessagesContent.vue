<template>
    <div class="message-layout">
        <ui-list>
            <ui-item v-for="item in messages()" :key="item.Id">
                <message-item :item="item" />
            </ui-item>
        </ui-list>
        <div class="text-input">
            <input/>
            <button/>
        </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue'

export default {
  name: 'LastMessagesList',
  props: {
    user: Object
  },
  methods: {
    messages () {
      return this.$store.getters.getListMessagesByUser
    }
  },
  components: {
    MessageItem
  }
}
</script>

<style lang="scss">
.message-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;

  .text-input {
    background-color: #38FFFF;
    height: 50px;
    opacity: 0.8;
    display: flex;
    justify-content: center;

    input {
      width: 85%;
      height: 50%;
      margin: auto 0;
      margin-left: 10px;
    }

    button {
      width: 8%;
      background-color: transparent;
      border: none;
      height: 50%;
      margin: auto 5px;

      border-radius: 10px;
      padding: 20px;
      position: relative;

      &::after {
        content: '';
        position: absolute; /* Абсолютное позиционирование */
        bottom: 10px;
        right: 0px;
        border: 10px solid transparent; /* Прозрачные границы */
        border-left: 20px solid #007F0F; /* Добавляем треугольник */
      }
    }
  }
}
</style>
