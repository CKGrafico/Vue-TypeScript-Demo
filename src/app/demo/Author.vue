<template>
  <section class="author">
    <header class="author-header" 
      :class="{'is-premium': author.roles.find(x => x === 'premium')}"></header>
    <div class="author-content">
      <div class="author-picture"></div>
      <h1 class="author-name">{{author.name}}</h1>
      <h2 class="author-location">{{author.location}}</h2>

      <section class="author-info" v-if="author.info">
        <div class="author-column">
          <div class="author-category">
          Articles
          </div>
          <div class="author-value">
            {{author.info.articles}}
          </div>
        </div>
        <div class="author-column">
          <div class="author-category">
          Likes
          </div>
          <div class="author-value">
            {{author.info.likes}}
          </div>
        </div>
        <div class="author-column">
          <div class="author-category">
          Comments
          </div>
          <div class="author-value">
            {{author.info.comments}}
          </div>
        </div>
      </section>

      <section class="author-badges">
        <Badge v-for="(badge, index) in badges" :key="index" :info="badge" v-if="badge"/>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Badge from './Badge.vue';
import BadgeInfo from './badge-info.model';
import emojisService from './emojis.service';

export default Vue.extend({
  components: {
    Badge
  },
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    badges: []
  }),
  mounted() {
    this.generateBadges();
  },
  methods: {
    generateBadges(): void {
      this.badges = [
        this.generateYearBadge(this.author.registerYear),
        this.generateNameBadge(this.author.name),
        this.generateFollowersBadge(this.author.followers)
      ];
    },
    generateYearBadge(year: number): BadgeInfo {
      let emoji: string = null;

      switch (year) {
        case 2016:
          emoji = 'monkey';
          break;
        case 2017:
          emoji = 'rooster';
          break;
        default:
          emoji = null;
      }

      if (!emoji) {
        return;
      }

      return {
        value: emojisService.get(emoji),
        title: `Registered in the year of ${emoji}.`,
        color: '#C05775'
      };
    },
    generateNameBadge(name: string): BadgeInfo {
      const letter = name.slice(0, 1);

      return {
        value: letter, 
        color: '#F68381',
        title: `Welcome to ${letter}'s club.`,
        isNotIcon: true
      };
    },
    generateFollowersBadge(followers: number): BadgeInfo {
      if (followers < 1) {
        return;
      }

      return {
        value: '😲', 
        color: '#355C7D',
        title: 'There are people following you!'
      };
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

    &.is-premium:after {
      $position: .3rem;
      $size: 1.5rem;

      background-image: url('/assets/images/premium.svg');
      background-size: cover;
      content: '';
      height: $size;
      padding: .15rem .25rem;
      position: absolute;
      right: $position;
      top: $position;
      width: $size;
      z-index: 3;
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
    margin-top: 1.5rem;
  }

  &-category {
    color: $color-foreground-bright;
    font-size: $font-size-xs;
    font-weight: $font-weight-light;
    text-align: center;
    text-transform: uppercase;
  }

  &-value {
    color: $color-foreground-dark;
    letter-spacing: -.25rem;
    font-size: $font-size-xl;
    text-align: center;
    text-transform: uppercase;
  }

  &-badges {
    bottom: 0;
    display: flex;
    margin: 1rem;
    position: absolute;
  }
}
</style>