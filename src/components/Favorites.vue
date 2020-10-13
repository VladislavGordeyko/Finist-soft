<template>
  <div>
    <p
      class="pb-5"
      :style="{'justify-content': isMobile ? 'center' : null, 'display': isMobile ? 'flex': null}"
    >
      ИЗБРАННОЕ
    </p>
    <div class="flex flex-wrap">
      <div
        v-for="item of data"
        :key="item.id"
        :style="{'width': isMobile ? '50%' : 'auto',
                 'padding-bottom': isMobile ? '1rem' : 'auto'}"
      >
        <div class="flex flex-col items-center pr-8 ">
          <div class="w-10 h-aut">
            <img
              class="rounded-full o"
              :src="item.image"
            >
          </div>
          <p class="py-2">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Favorites',
  components: {
  },
  props: ['data', 'isMobile'],
};
</script>
