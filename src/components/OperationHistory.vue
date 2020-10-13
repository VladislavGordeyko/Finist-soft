<template>
  <div class="">
    <p class="pb-5">
      ИСТОРИЯ ОПЕРАЦИЙ
    </p>
    <div class="flex flex-col">
      <div
        v-for="item of data"
        :key="item.id"
        class="flex py-6 border-b-2 border-gray-100"
      >
        <div
          v-if="!isMobile"
          class="pr-20"
        >
          <p>{{ getTime(item.date) }}</p>
          <p>{{ getDate(item.date) }}</p>
        </div>
        <div
          class=" flex flex-row items-center "
          :style="{'padding-right': !isMobile && '14rem', 'width': isMobile && '100%'}"
        >
          <img
            class="w-10 h-10 rounded-full "
            :src="item.image"
          >
          <p class="pl-6 font-semibold w-20">
            {{ item.name }}
          </p>
        </div>
        <div
          v-if="!isMobile"
          class="flex flex-row items-center pr-24 font-semibold leading-none"
        >
          <img
            class="w-10 h-auto"
            :src="item.cardIcon"
          >
          <p class="px-1 justify-center">
            {{ '***' }}
          </p>
          <p class=" ">
            {{ item.cardNumber }}
          </p>
        </div>
        <div class="flex flex-col w-full items-end">
          <div class="flex items-end  justify-end">
            <p class="font-semibold leading-none">
              {{ '-' + getWholeNumber(item.value) }},
            </p>
            <p class="flex text-xs text-gray-600 leading-none">
              {{ getDecimal(item.value) }} {{ item.curency }}
            </p>
          </div>
          <p class=" ">
            {{ item.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {

  name: 'MainView',
  components: {
  },
  props: ['data', 'isMobile'],
  computed: {

  },
  methods: {
    getDate(date) {
      return moment(date).lang('ru').format('L');
    },
    getTime(date) {
      return moment(date).lang('ru').format('LT');
    },
    getWholeNumber(value) {
      return Math.floor(value).toLocaleString('ru');
    },
    getDecimal(value) {
      return (`${value}`).split('.')[1] || '00';
    },
  },
};
</script>
