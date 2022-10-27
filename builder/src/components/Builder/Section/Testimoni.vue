<template>
  <div :class="item.contents.class">
    <div :style="item.contents.title.style">
      {{ item.contents.title.value }}
    </div>
    <p :style="item.contents.paragraph.style">
      {{ item.contents.paragraph.value }}
    </p>
    <div :class="item.contents.testimoni.parent.class">
      <template v-for="(value, index) in item.contents.testimoni.child.item">
        <div :class="item.contents.testimoni.child.class">
          <div class="flex items-center">
            <img
              :src="value.image"
              class="w-24 h-24 rounded-full mr-5"
              alt=""
            />
            <div>
              <div class="text-lg font-bold">{{ value.name }}</div>
              <p class="text-gray-500">{{ value.position }}</p>
              <div class="text-yellow-300">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <p class="mt-5">{{ value.testimoni }}</p>
        </div>
      </template>
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
