<template>
  <div>
    <carousel
      :navigation-enabled="true"
      :pagination-enabled="false"
      :navigation-next-label="nextLabel"
      :navigation-prev-label="prevLabel"
      :per-page-custom="[[100, 1],[700, 1], [900, 2],[1100, 3], [1300, 4]]"
      class="bg-gray-100 h-auto px-8"
    >
      <slide
        v-for="item in slides"
        :key="item.id"
        class="py-5 px-4 flex justify-center"
      >
        <SlideItem :item="item" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Arrow from '../assets/arrow.png';
import SlideItem from './SlideItem.vue';

export default {
  components: {
    Carousel,
    Slide,
    SlideItem,
  },
  props: ['slides'],
  data() {
    return {
      nextLabel: `<img src='${Arrow}' style="right:4px; bottom:-10px; position:absolute;max-width: 200%;"/>`,
      prevLabel: `<img src='${Arrow}' class="transform rotate-180" style="left:4px; bottom:-10px; position:absolute;max-width: 200%;"/>`,
    };
  },
};
</script>
