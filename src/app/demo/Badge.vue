<template>
  <div class="badge" v-if="info" :style="{'background-color': info.color}" :class="{'is-not_icon': info.isNotIcon}" :title="info.title">
      {{info.value}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BadgeInfo from './badge-info.model';

export default Vue.extend({
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  created() {
      console.log(this.info);
  }
});
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