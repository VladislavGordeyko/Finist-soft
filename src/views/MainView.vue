<template>
  <Main :is-mobile="isMobile" />
</template>

<script>
import Main from '../components/Main.vue';

export default {
  name: 'MainView',
  components: {
    Main,
  },
  props: ['isMobile'],
};
</script>
