<template>
  <div class="w-auto">
    <div class="flex items-center">
      <div class="pr-2">
        <img
          :src="cardsIcon"
          class="w-12"
        >
      </div>
      <div>
        <p class="uppercase text-xs">
          {{ name }}
        </p>
        <div class="flex items-end  leading-none">
          <p class="text-2xl font-semibold">
            {{ getWholeNumber(cards.sum) }}
          </p>,
          <p class="text-sm text-gray-600">
            {{ getDecimal(cards.sum) }} {{ cards.curency }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-for="item in cards.data"
      :key="item.id"
      class="pl-6 py-4 flex items-center"
    >
      <div>
        <img
          :src="balance"
          class="w-4"
        >
      </div>
      <div class="flex w-56 pl-4 items-end text-gray-600  leading-none ">
        <p>{{ getWholeNumber(item.value) }}</p>,
        <p class="text-sm">
          {{ getDecimal(item.value) }} {{ cards.curency }}
        </p>
      </div>
      <div class="w-full flex justify-end ml-8">
        <img
          :src="item.icon"
          class="card-icon"
        >
      </div>
    </div>
  </div>
</template>

<script>
import cardsIcon from '../assets/cards.png';
import balance from '../assets/balance.png';

export default {
  props: ['name', 'cards'],
  data() {
    return {
      cardsIcon, balance,
    };
  },
  methods: {
    getWholeNumber(value) {
      return Math.floor(value).toLocaleString('ru');
    },
    getDecimal(value) {
      return (`${value}`).split('.')[1] || '00';
    },
  },

};
</script>

<style scoped>
.card-icon {
    width: 50px;
}
.container-menu {
    width: 250px;
}
</style>
