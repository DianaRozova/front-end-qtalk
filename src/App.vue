<template>
  <main-layout/>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
body, html, #app {
  height   : 100%;
  width    : 100%;
  margin   : 0;
}

* {
    font-family: Century Gothic;
}
</style>
