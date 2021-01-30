<template>
  <footer-nav class="align-center justify-between footer__nav">
    <ul class="row align-center nav__social social">
      <li class="social__item">
        <link-custom class="social__link link_orange link_social">
          <img src="~@/assets/images/svg/icons/facebook.svg" alt="Icon facebook">
        </link-custom>
      </li>
      <li class="social__item">
        <link-custom class="social__link link_orange link_social">
          <img src="~@/assets/images/svg/icons/instagram.svg" alt="Icon insttagram">
        </link-custom>
      </li>
    </ul>
  </footer-nav>
</template>

<script>
import FooterNav from '@/components/Nav/NavWithLogo.vue';
import LinkCustom from '@/components/Link/LinkCustom.vue';

export default {
  name: 'FooterTop',

  components: {
    FooterNav,
    LinkCustom,
  },
};
</script>
