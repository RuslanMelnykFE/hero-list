<template>
  <dropdown-wrap
    v-if="list_btn.length"
    class="dropdown_list">
    <ul class="dropdown__btns list-btns">
      <li
        v-for="(value, idx) in list_btn"
        :key="idx"
        class="list-btns__item">
        <button
          @click="$emit('showList', value)"
          class="list-btns__btn">
          {{ value }}
        </button>
      </li>
    </ul>
  </dropdown-wrap>
</template>

<script>
import DropdownWrap from './DropdownWrap.vue';

export default {
  name: 'DropdownList',

  props: {
    list_btn: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    DropdownWrap,
  },
};
</script>
