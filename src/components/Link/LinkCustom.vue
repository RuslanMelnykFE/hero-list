<template>
  <a :href="link_href" class="link">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'LinkCustom',

  props: {
    link_href: {
      type: String,
      default: '#',
    },
  },
};
</script>
