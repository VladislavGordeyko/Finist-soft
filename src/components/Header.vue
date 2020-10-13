<template>
  <div>
    <nav
      class="absolute flex h-16 container-header text-center items-center w-full z-50"
    >
      <div
        v-if="!isMobile"
        class="flex"
      >
        <div class="w-menu text-gray-700">
          <router-link :to="{name: 'main'}">
            ИНТЕРЕНЕТ-БАНК
          </router-link>
        </div>
        <ul class="flex">
          <router-link
            v-for="item in links"
            :key="item.id"
            v-slot="{ isExactActive, navigate }"
            :to="{name: item.routeName}"
          >
            <li
              class="px-6"
              :style="{'color': isExactActive ? '#00ACEC' : '#000000',
                       'text-decoration': isExactActive? 'underline': 'none'}"
              @click="navigate"
            >
              {{ item.name }}
            </li>
          </router-link>
        </ul>
      </div>

      <div
        v-else
        class="pl-6"
      >
        <img
          :src="hambugerIcon"
          class="w-6"
          @click="onHamburgerClick"
        >
      </div>
    </nav>
  </div>
</template>

<script>
import hambugerIcon from '../assets/hamburger.png';

export default {
  props: ['isMobile', 'onHamburgerClick'],
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
      hambugerIcon,
    };
  },
};
</script>

<style scoped>
.container-header{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

</style>
