<template>
  <nav class="nav">
    <link-custom class="nav__logo">
      <img src="~@/assets/images/svg/logo/star-wars.svg" alt="Image logo">
    </link-custom>
    <slot/>
  </nav>
</template>

<script>
import LinkCustom from '@/components/Link/LinkCustom.vue';

export default {
  name: 'NavWithLogo',

  components: {
    LinkCustom,
  },
};
</script>
