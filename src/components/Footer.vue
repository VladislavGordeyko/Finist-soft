<template>
  <div class=" bg-gray-200 py-6 px-12">
    <div
      class="flex pb-4 items-end"
      :style="{'justify-content': isMobile ? 'center' : null}"
    >
      <p
        class="pr-4 text-lg font-semibold"
      >
        +7 (495) 777-6-777
      </p>
      <p
        v-if="!isMobile"
        class="text-gray-600 text-sm"
      >
        Для звонков из г.Москвы
      </p>
    </div>
    <div
      class="flex items-end"
      :style="{'justify-content': isMobile ? 'center' : null}"
    >
      <p class="pr-4 text-lg font-semibold">
        8 (800) 2000-767
      </p>
      <p
        v-if="!isMobile"
        class="text-gray-600 text-sm"
      >
        Бесплатный номер при звонке из любого города России
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['isMobile'],
};
</script>
