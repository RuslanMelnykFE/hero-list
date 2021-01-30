<template>
  <div class="header__langs langs">
    <button-show-langs
      btn_text="En"
      @showDropdown="showDropdown"
      :class="{active: is_show}"/>

    <dropdown-wrap
      class="dropdown_langs"
      :class="{show: is_show}">
      <link-custom class="link_lang">Ua</link-custom>
      <link-custom class="link_lang">Ru</link-custom>
    </dropdown-wrap>
  </div>
</template>

<script>
import ShowDropdown from '@/mixins/btnActions';

import ButtonShowLangs from '@/components/Button/ButtonShowDropdown.vue';
import DropdownWrap from '@/components/Dropdown/DropdownWrap.vue';
import LinkCustom from '@/components/Link/LinkCustom.vue';

export default {
  name: 'HeaderLangs',

  components: {
    ButtonShowLangs,
    DropdownWrap,
    LinkCustom,
  },

  mixins: [ShowDropdown],

  data: () => ({
    is_show: false,
  }),
};
</script>
