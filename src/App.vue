<template>
  <div id="app">
    <header-page />
    <people-main />
    <footer-page />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage/HeaderPage.vue';
import PeopleMain from '@/components/People/PeopleMain.vue';
import FooterPage from '@/components/FooterPage/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    PeopleMain,
    FooterPage,
  },
  created() {
    this.$store.dispatch('people/GET_PEOPLE');
  },
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
