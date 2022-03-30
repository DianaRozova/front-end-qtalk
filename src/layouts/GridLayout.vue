<template>
  <div :class="'grid-layout '+className">
    <div class="menu">
        <slot name="grid-menu"></slot>
    </div>
    <div class="list">
        <slot name="grid-list"></slot>
    </div>
    <div class="messages">
        <slot name="grid-content"></slot>
    </div>
    <div class="info">
        <slot name="grid-info"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GridLayout',
  props: {
    className: String
  }
}
</script>

<style scope lang="scss">

#app{
  min-width: 320px;
}

.grid-layout{
  width   : 100%;
  display : flex;

  .menu {
    background-color : aquamarine;
    max-width        : 110px;
  }

  @media screen and (min-width: 840px) {
    .menu {
        width : calc(100% / 11)
    }
    .list {
        width : calc(100% / 11 * 4)
    }
    .messages {
        width : calc(100% / 11 * 4)
    }
    .info {
        width : calc(100% / 11 * 2)
    }
  }

  @media screen and (max-width: 839px) and (min-width: 600px) {
    .menu {
        width : calc(100% / 8)
    }
    .list {
        width : calc(100% / 8 * 3)
    }
    .messages {
        width : calc(100% / 8 * 4)
    }
    .info {
        display: none;
    }
  }

  @media screen and (max-width: 599px)  {
    .menu {
        width : calc(100% / 4)
    }
    .list {
        width : calc(100% / 4 * 3);
    }
    .messages {
        display : none;
    }
    .info {
        display : none;
    }
  }
}

</style>
