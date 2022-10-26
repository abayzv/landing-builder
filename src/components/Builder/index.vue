<template>
  <div>
    <Section
      v-for="(item, index) in components"
      @click="setActiveSection(index)"
      :class="[
        ...item.class,
        `${
          index === activeSection &&
          'border-2 border-blue-300 shadow-inner shadow-blue-300'
        }`,
        `${item.type === 'header' && 'border border-b'}`,
      ]"
      :style="`background-color: ${item.style.backgroundColor}`"
    >
      <Hero v-if="item.type === 'hero'" :item="item" />
      <Features v-if="item.type === 'features'" :item="item" />
      <Testimoni v-if="item.type === 'testimoni'" :item="item" />
      <Cta v-if="item.type === 'cta'" :item="item" />
      <Navbar v-if="item.type === 'header'" :item="item" />
    </Section>
  </div>
</template>

<script>
import Section from "@/components/Builder/Section/index.vue";
import Hero from "@/components/Builder/Section/Hero.vue";
import Features from "@/components/Builder/Section/Features.vue";
import Testimoni from "@/components/Builder/Section/Testimoni.vue";
import Cta from "@/components/Builder/Section/Cta.vue";
import Navbar from "@/components/Builder/Section/Navbar.vue";

export default {
  components: {
    Section,
    Hero,
    Features,
    Testimoni,
    Cta,
    Navbar,
  },
  props: {
    components: {
      type: Object,
      default: () => ({}),
    },
    activeSection: {
      type: Number,
    },
  },
  methods: {
    setActiveSection(index) {
      this.$emit("setActiveSection", index);
    },
  },
};
</script>
