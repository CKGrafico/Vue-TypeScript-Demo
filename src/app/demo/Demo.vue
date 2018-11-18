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
    roles: ['premium'],
    name: 'Quique',
    location: 'Barcelona, Spain',
    company: 'Plain Concepts',
    registerYear: 2017,
    followers: 1,
    info: {
      articles: 10,
      likes: 12,
      comments: 17
    }
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