<template>
  <div :class="item.contents.class">
    <div :style="item.contents.title.style">
      {{ item.contents.title.value }}
    </div>
    <p :style="item.contents.paragraph.style">
      {{ item.contents.paragraph.value }}
    </p>
    <div :class="item.contents.features.parent.class">
      <div
        v-for="(value, index) in item.contents.features.child.item"
        :class="item.contents.features.child.class"
      >
        <div
          class="w-32 mr-5 rounded-full bg-slate-200 flex items-center justify-center"
        >
          <img :src="value.icon" class="w-1/2" alt="" />
        </div>
        <div>
          <div class="text-lg font-bold">{{ value.title }}</div>
          <p class="text-gray-500">{{ value.paragraph }}</p>
        </div>
      </div>
    </div>
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
