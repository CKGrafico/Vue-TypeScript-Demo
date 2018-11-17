<template>
  <section class="demo">
    <Author :author="author" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Author from './Author.vue';

@Component({
  components: {
    Author
  }
})
export default class extends Vue {
  public name = 'Demo';
  public author = {
    roles: ['premium']
  };
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.demo {
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>