<template>
  <section class="demo container-medium">
    Hola! demo 3
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public name = 'Demo';
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