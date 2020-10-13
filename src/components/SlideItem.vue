<template>
  <div
    class="w-full h-40 bg-cover rounded-lg"
    :style="{'background-image': 'url(' + item.image + ')'}"
  >
    <div
      class="flex justify-between flex-col w-full h-full bg-smoke rounded-lg text-white py-2 px-3"
    >
      <p class="text-lg">
        {{ item.title }}
      </p>
      <p class="text flex text-xs border-green-700 ">
        {{ item.text + ' ⟶' }}
      </p>
    </div>
  </div>
</template>

<script>
import arrow from '../assets/arrow2.png';

export default {
  components: {
  },
  props: ['item'],
  data() {
    return {
      arrow,
    };
  },
};
</script>

<style scoped>
.text::last-letter {
    font-size: 1.5rem;
}
</style>
