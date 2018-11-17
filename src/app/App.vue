<template>
  <div class="app">
    <router-view class="section"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public name = 'App';
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.app {
  color: $color-foreground-brighter;
}
</style>