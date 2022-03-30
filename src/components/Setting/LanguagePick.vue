<template>
    <ui-select
        id="LangSelect"
        v-model="selectLang"
        :options="langs"
        @selected="onSelected($event)"
    >
     {{$t('lang')}}
  </ui-select>
</template>

<script>
export default {
  name: 'LanguiagePick',
  data () {
    return {
      selectLang: this.$i18n.locale
    }
  },
  computed: {
    langs () {
      return this.$store.getters.getListLangs.map(lang => ({
        label: this.$t(lang),
        value: lang
      }))
    }
  },
  methods: {
    onSelected (selected) {
      this.$i18n.locale = selected.value
    }
  }
}
</script>
