<template>
  <div class="badge" v-if="info" :style="{'background-color': info.color}" :class="{'is-not_icon': info.isNotIcon}" v-tooltip="info.title">
      {{info.value}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BadgeInfo from './badge-info.model';

@Component
export default class extends Vue {
  public name = 'Badge';

  @Prop({type: Object, required: true}) info: BadgeInfo;
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.badge {
    $size: 2rem;

    align-items: center;
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba($color-background-darker, .15);
    display: flex;
    font-weight: $font-weight-bold;
    height: $size;
    justify-content: center;
    margin: .25rem;
    padding-left: .25rem;
    width: $size;

    &.is-not_icon {
        padding-left: 0;
    }
}
</style>