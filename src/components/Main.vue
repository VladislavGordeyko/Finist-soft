<template>
  <div>
    <div
      class="min-h-screen"
      :style="{'padding-left': isMobile ? '1.5rem': '3rem', 'padding-right': isMobile ? '1.5rem': '3rem'}"
    >
      <Carusel
        class="py-8"
        :slides="slides"
      />
      <Favorites
        :data="favorites"
        class="pl-12"
        :is-mobile="isMobile"
      />
      <OperationHistory
        :data="historyData"
        class="pl-4 pt-8 max-w-4xl"
        :is-mobile="isMobile"
      />
    </div>
  </div>
</template>

<script>
import Carusel from './Carusel.vue';
import Favorites from './Favorites.vue';
import OperationHistory from './OperationHistory.vue';

export default {
  components: {
    Carusel, Favorites, OperationHistory,
  },
  props: ['isMobile'],
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'Страховка для любой визы онлайн за 2 минуты',
          text: 'Оформите страховку на сайте и получите полис на почту',
          // eslint-disable-next-line global-require
          image: require('../assets/1.png'),
        },
        {
          id: 2,
          title: 'Потребительский кредит от 10.5%',
          text: '100 000 - 2 000 000 на любые цели',
          // eslint-disable-next-line global-require
          image: require('../assets/2.png'),
        },
        {
          id: 3,
          title: 'Максимум выгоды от своей карты',
          text: 'Получите бонусы и обменивайте их на товары и услуги наших партнеров',
          // eslint-disable-next-line global-require
          image: require('../assets/3.png'),
        },
        {
          id: 4,
          title: 'Дебетовая карта',
          text: 'Получите в банке',
        },
        {
          id: 5,
          title: 'ncvlkncklnclknvc',
          text: 'fddfd',
        },
      ],
      favorites: [
        {
          id: 1,
          name: 'Автоплатежи',
          // eslint-disable-next-line global-require
          image: require('../assets/fav1.png'),
        },
        {
          id: 2,
          name: 'Перевод себе',
          // eslint-disable-next-line global-require
          image: require('../assets/fav2.png'),
        },
        {
          id: 3,
          name: 'Мой телефон',
          // eslint-disable-next-line global-require
          image: require('../assets/fav3.png'),
        },
        {
          id: 4,
          name: 'Yota',
          // eslint-disable-next-line global-require
          image: require('../assets/fav4.png'),
        },
      ],
      historyData: [
        {
          id: 1,
          date: new Date('July 14, 2020 11:57:00'),
          // eslint-disable-next-line global-require
          image: require('../assets/magnit.png'),
          name: 'Магнит',
          // eslint-disable-next-line global-require
          cardIcon: require('../assets/Visa_Infinity.png'),
          cardNumber: '0416',
          category: 'Супермаркеты',
          curency: '₽',
          value: 224.79,
        },
        {
          id: 2,
          date: new Date('June 05, 2020 17:50:00'),
          // eslint-disable-next-line global-require
          image: require('../assets/baden.png'),
          name: 'Магнит',
          // eslint-disable-next-line global-require
          cardIcon: require('../assets/Visa_Infinity.png'),
          cardNumber: '0416',
          category: 'Различные Товары',
          curency: '₽',
          value: 10.00,
        },
        {
          id: 3,
          date: new Date('June 05, 2020 17:50:00'),
          // eslint-disable-next-line global-require
          image: require('../assets/uber.png'),
          name: 'Uber',
          // eslint-disable-next-line global-require
          cardIcon: require('../assets/Visa_Infinity.png'),
          cardNumber: '0416',
          category: 'Транспорт',
          curency: '₽',
          value: 57.00,
        },
        {
          id: 4,
          date: new Date('June 03, 2020 23:00:00'),
          // eslint-disable-next-line global-require
          image: require('../assets/uber.png'),
          name: 'Uber',
          // eslint-disable-next-line global-require
          cardIcon: require('../assets/Visa_Infinity.png'),
          cardNumber: '0416',
          category: 'Транспорт',
          curency: '₽',
          value: 227.00,
        },
      ],
    };
  },
};
</script>
