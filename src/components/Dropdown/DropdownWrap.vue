<template>
  <div class="dropdown">
    <slot />
    <div class="dropdown__arrow"></div>
  </div>
</template>

<script>
export default {
  name: 'DropdownWrap',
};
</script>
