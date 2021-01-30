<template>
  <header class="header">
    <div class="container header__container">
      <header-nav class="row justify-between header__nav">
        <header-menu-desc />
        <header-menu-mob/>
      </header-nav>
    </div>
  </header>
</template>

<script>
import HeaderNav from '@/components/Nav/NavWithLogo.vue';
import HeaderMenuDesc from './HeaderMenuDesc.vue';
import HeaderMenuMob from './HeaderMenuMob.vue';

export default {
  name: 'HeaderPage',

  components: {
    HeaderNav,
    HeaderMenuDesc,
    HeaderMenuMob,
  },
};
</script>
