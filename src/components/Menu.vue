<template>
  <div class="flex">
    <div
      v-if="isMenuShown && !isMobile"
      class=" pl-8 pt-6 pr-4 menu z-10"
    >
      <p class="pb-6 uppercase text-sm font-semibold">
        Счета и карты
      </p>
      <Cards
        name="Мои Карты"
        :cards="cards"
        class="pb-10"
      />
      <Cards
        name="Моя кредитная карта"
        :cards="credits"
      />
    </div>
    <div
      v-else-if="isMenuShown && isMobile"
      class="absolute pl-8 pt-6 pr-4 menu z-10"
      :style="{'height': '94%'}"
    >
      <ul
        class="flex flex-col pb-4"
      >
        <router-link
          v-for="item in links"
          :key="item.id"
          v-slot="{ isExactActive, navigate }"
          :to="{name: item.routeName}"
        >
          <li
            class="pb-6"
            :style="{'color': isExactActive ? '#00ACEC' : '#000000',
                     'text-decoration': isExactActive? 'underline': 'none'}"
            @click="navigate"
          >
            {{ item.name }}
          </li>
        </router-link>
      </ul>
      <p class="pb-6 uppercase text-sm font-semibold">
        Счета и карты
      </p>
      <Cards
        name="Мои Карты"
        :cards="cards"
        class="pb-10"
      />
      <Cards
        name="Моя кредитная карта"
        :cards="credits"
      />
    </div>
  </div>
</template>

<script>
import Cards from './Cards.vue';

export default {
  components: {
    Cards,
  },
  props: ['isMobile', 'isMenuShown'],
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'ГЛАВНАЯ',
          routeName: 'main',
        },
        {
          id: 2,
          name: 'ПЛАТЕЖИ',
          routeName: 'paiments',
        },
        {
          id: 3,
          name: 'ИСТОРИЯ ОПЕРАЦИЙ',
          routeName: 'history',
        },
      ],
      cards: {
        sum: 65543.29,
        curency: '₽',
        data: [
          {
            id: 1,
            value: 60000.29,
            type: 'Visa Platinum',
            // eslint-disable-next-line global-require
            icon: require('../assets/Visa_Platinum.png'),
          },
          {
            id: 2,
            value: 5543.00,
            type: 'MasterCard Standart',
            // eslint-disable-next-line global-require
            icon: require('../assets/MastercardStandart.png'),
          },
        ],
      },
      credits: {
        sum: 223023.78,
        curency: '₽',
        data: [
          {
            id: 1,
            value: 223023.78,
            type: 'Visa Infinity',
            // eslint-disable-next-line global-require
            icon: require('../assets/Visa_Infinity.png'),
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
    .menu{
        background: #FFFFFF;
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
</style>
