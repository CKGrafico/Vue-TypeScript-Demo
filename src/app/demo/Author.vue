<template>
  <section class="author container-medium">
    Autor 
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public name = 'Author';
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.weather {
  &-header {
    color: $color-primary;
  }
}
</style>