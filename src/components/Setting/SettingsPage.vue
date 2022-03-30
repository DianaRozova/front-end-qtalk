<template>
  <div class="settings">
    <languiage-pick/>
    <ui-select v-model="selectFamily" :options="fontFamily">
     {{$t('family')}}
    </ui-select>
    <ui-select
      v-model="selectSize"
      :options="size"
    >
     {{$t('size')}}
    </ui-select>
    <ui-button raised v-on:click="() => {$store.dispatch('logoutUser')}">{{$t('LoginPage.LogOut')}}</ui-button>
  </div>
</template>

<script>
import LanguiagePick from './LanguagePick.vue'

export default {
  name: 'SettingsPage',
  data () {
    return {
      size: [{ label: 14, value: 14 }, { label: 15, value: 15 }, { label: 16, value: 16 }, { label: 17, value: 17 }],
      fontFamily: [{ label: 'Century Gothic', value: 1 }, { label: 'Times New Roman', value: 2 }, { label: 'Arial', value: 3 }],
      selectFamily: '',
      selectSize: 14
    }
  },
  components: {
    LanguiagePick
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.settings {
  display         : flex;
  flex-direction  : column;
  position: relative;
  height: 100%;

  > * {
    padding : 0 15px;
    width   : calc(100% - 30px);

    .mdc-select__menu {
      margin : 0 15px;
      width  : calc(100% - 30px);
    }

    .mdc-select__anchor {
      margin: 10px 0;
    }
  }

  button {
    position: absolute;
    bottom: 10px;
    margin : 0 15px;
  }
}
</style>
