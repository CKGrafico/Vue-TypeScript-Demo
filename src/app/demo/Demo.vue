<template>
  <section class="demo">
    <Pet :pet="pet" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Pet, PetInfo } from '~/demo/pet';

@Component({
  components: {
    Pet
  }
})
export default class extends Vue {
  public name = 'Demo';
  public pet: PetInfo = {
    name: 'Maya',
    location: 'Barcelona, Spain',
    food: 5
  };
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.demo {
  align-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}
</style>