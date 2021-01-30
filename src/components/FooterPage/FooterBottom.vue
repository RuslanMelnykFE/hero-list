<template>
  <nav class="row align-center justify-between footer__nav_bottom">
    <link-custom class="text_light">
      All rights Reserved.
    </link-custom>
    <link-custom class="text_light">
      Privacy Policy
    </link-custom>
  </nav>
</template>

<script>
import LinkCustom from '@/components/Link/LinkCustom.vue';

export default {
  name: 'FooterBottom',

  components: {
    LinkCustom,
  },
};
</script>
