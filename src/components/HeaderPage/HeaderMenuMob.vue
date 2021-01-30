<template>
  <ul class="row align-center justify-end nav__menu menu menu_mob">
    <li class="menu__item">
      <link-custom>Sign up</link-custom>
    </li>
    <li class="menu__item">
      <button class="menu__burger"></button>
    </li>
  </ul>
</template>

<script>
import LinkCustom from '@/components/Link/LinkCustom.vue';

export default {
  name: 'HeaderMenuDesc',

  components: {
    LinkCustom,
  },
};
</script>
