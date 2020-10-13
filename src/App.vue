<template>
  <div id="app">
    <div>
      <Header
        :is-mobile="isMobile"
        :on-hamburger-click="showMenu"
      />
      <div class="flex">
        <Menu
          class="pt-16 z-10 relative"
          :is-mobile="isMobile"
          :is-menu-shown="isMenuShown"
        />
        <div class="bg-white w-full pt-16">
          <router-view :is-mobile="isMobile" />
          <Footer :is-mobile="isMobile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu,
  },
  data() {
    return {
      isMobile: false,
      isMenuShown: true,
    };
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  methods: {
    handleView() {
      if (window.innerWidth <= 850) {
        if (!this.isMobile) {
          this.isMobile = true;
          this.isMenuShown = false;
        }
      } else {
        this.isMenuShown = true;
        this.isMobile = false;
      }
    },
    showMenu() {
      this.isMenuShown = !this.isMenuShown;
    },
  },
};

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
