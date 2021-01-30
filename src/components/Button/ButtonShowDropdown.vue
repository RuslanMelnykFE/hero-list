<template>
  <button
    v-if="btn_text.length"
    @click.stop.prevent="$emit('showDropdown')"
    class="btn btn_drop">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonShowDropdown',

  props: {
    btn_text: {
      type: String,
      default: '',
    },
  },
};
</script>
