<template>
  <div class="ml-10 mt-4 md:mt-0 mr-5">
    <h2 :style="item.contents.title.style">
      {{ item.contents.title.value }}
    </h2>
    <p class="mb-6 font-light mt-3" :style="item.contents.paragraph.style">
      {{ item.contents.paragraph.value }}
    </p>
    <div>
      <template v-for="button in item.contents.button">
        <a :href="button.link" target="_blank">
          <button v-if="button.value !== ''" :style="button.style">
            {{ button.value }}
          </button></a
        >
      </template>
    </div>
  </div>
  <div>
    <img
      :src="item.contents.image.url"
      :class="item.contents.image.class"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
