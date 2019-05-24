<template>
  <section class="pet">
    <header class="pet-header">
      <span class="pet-food" :class="checkTooMuchFood">{{food}}</span>
    </header>
    <div class="pet-content">
      <div class="pet-picture"></div>
      <h1 class="pet-name">{{pet.name}}</h1>
      <h2 class="pet-location">{{pet.location}}</h2>

      <section class="pet-info">
        <button class="btn btn-secondary" @click="addFood">Feed me</button>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { PetInfo } from './pet-info.model';

@Component
export default class extends Vue {
  public name = 'Pet';
  public food = 0;
  private MAX_FOOD = 15;

  @Prop({ required: true }) pet: PetInfo;

  created() {
    this.food = this.pet.food || this.food;
  }

  public addFood(): void {
    this.food++;
  }

  get checkTooMuchFood(): string {
    if (this.food < this.MAX_FOOD) {
      return '';
    }

    return 'is-enough';
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.pet {
  $card-background: $color-background-bright;
  $border-radius: 16px;

  background-color: $card-background;
  border-radius: $border-radius;
  max-width: 23rem;
  min-height: 25rem;
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

    &:before {
      background: linear-gradient(170deg, rgba($color-primary, .7) 65%, rgba($color-primary, 0) 66%, rgba($card-background, 1) 100%);
      border-radius: $border-radius;
      content: '';
      filter: saturate(1 + 1 - $saturation);
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 2;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    height: 72%;
    position: absolute;
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
    height: $size;
    justify-content: center;
    margin-left: calc(50% - #{$size / 2});
    width: $size;
  }

  &-name {
    color: $color-foreground-dark;
    font-size: $font-size-m;
    margin: .35rem 0 0 0;
    text-align: center;
  }

  &-location {
    color: $color-foreground-dark;
    font-size: $font-size-s;
    font-weight: $font-weight-light;
    margin: .1rem;
    text-align: center;
  }

  &-info {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }

  &-food {
    $distance: 1rem;
    $size: 2rem;

    align-items: center;
    background-color: $color-primary-brighter;
    border-radius: 50%;
    color: $color-secondary-bright;
    display: flex;
    font-size: $font-size-s;
    height: $size;
    justify-content: center;
    margin-left: .25rem;
    position: absolute;
    right: $distance;
    top: $distance;
    width: $size;
    z-index: 100;

    &:after {
      $size: 1.5rem;

      align-items: center;
      background-color: $color-primary-brighter;
      border-radius: 50%;
      content: '🍗';
      display: flex;
      height: $size;
      justify-content: center;
      left: -.75rem;
      position: absolute;
      top: .15rem;
      width: $size;
      z-index: -1;
    }

    &.is-enough {
      color: $color-danger;
    }
  }
}
</style>