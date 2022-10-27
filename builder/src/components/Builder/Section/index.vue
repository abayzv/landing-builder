<template>
  <div>
    <div
      class="container mx-auto grid grid-cols-2 items-center justify-between"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
};
</script>
