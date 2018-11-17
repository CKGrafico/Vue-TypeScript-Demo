<template>
  <section class="author">
    <header class="author-header"></header>
    <div class="author-content">
      <div class="author-picture" :class="{'is-premium': author.roles.find(x => x === 'premium')}"></div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    author: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.author {
  $card-background: $color-background-bright;
  $border-radius: 3px;

  background-color: $card-background;
  border-radius: $border-radius;
  max-width: 25rem;
  min-height: 28rem;
  position: relative;
  width: 80%;

  &-header {
    $saturation: .7;

    background: linear-gradient(170deg, rgba($card-background, 0) 65%, rgba($card-background, 1) 66%, rgba($card-background, 1) 100%), url('/assets/images/author_bg.jpg');
    background-position: 0% 50%;
    background-size: cover;
    border-radius: $border-radius;
    box-shadow: inset 0 -1rem 0 $card-background;
    filter: saturate($saturation);
    height: 60%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &::before {
      background: linear-gradient(170deg, rgba($color-primary, .7) 65%, rgba($color-primary, 0) 66%, rgba($card-background, 1) 100%);
      border-radius: $border-radius;
      content: '';
      filter: saturate(1 + 1 - $saturation);
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 72%;
    top: 28%;
    width: 100%;
    z-index: 3;
  }

  &-picture {
    $size: 7rem;

    align-items: flex-end;
    background: url('/assets/images/author.jpg');
    background-size: cover;
    border: 2px solid $color-background-bright;
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba($color-background-darker, .15);
    display: flex;
    justify-content: center;
    height: $size;
    margin-left: calc(50% - #{$size / 2});
    width: $size;

    &.is-premium {
      border-color: $color-secondary-brighter;
    }
  }
}
</style>