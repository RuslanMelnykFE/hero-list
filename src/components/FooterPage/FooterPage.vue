<template>
  <footer class="footer">
    <div class="container footer__container">
      <footer-top />
      <footer-bottom />
    </div>
  </footer>
</template>

<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

export default {
  name: 'FooterPage',

  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>
