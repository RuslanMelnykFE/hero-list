<template>
  <ul class="row align-center justify-end nav__menu menu menu_desc">
    <li class="menu__item">
      <header-langs/>
    </li>
    <li class="menu__item">
      <link-custom>Log in</link-custom>
    </li>
    <li class="menu__item">
      <link-custom class="link_orange link_sign-up">Sign up</link-custom>
    </li>
  </ul>
</template>

<script>
import LinkCustom from '@/components/Link/LinkCustom.vue';
import HeaderLangs from './HeaderLang.vue';

export default {
  name: 'HeaderMenuDesc',

  components: {
    HeaderLangs,
    LinkCustom,
  },
};
</script>
