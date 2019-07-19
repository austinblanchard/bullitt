<template>
  <div class="talent-video">

    <div class="video-relative-wrapper">
      <div class="talent-name">Talent <span>{{ talent.name }}</span></div>
      <router-link class="close" to="/">X</router-link>

      <vimeo-player
          class="vimeo"
          ref="player"
          :options="{ responsive: true }"
          :video-id="talent.video"
          :autoplay="true"
        ></vimeo-player>
    </div>

    <div class="meta">
      <h2>{{ talent.title }}</h2>
      <h3>{{ talent.subtitle }}</h3>
    </div>

  </div>
</template>

<script>
import talents from '@/talent.json'

export default {
  name: 'TalentVideo',

  data () {
    return {
      talent: talents.find(talent => talent.slug === this.$route.params.talentSlug)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/sass/_breakpoints.scss";
@import "@/sass/_variables.scss";
@import "@/sass/_typography.scss";

.talent-video {
  @include bp(3) {
    padding: 0 $pad*6;
  }
  @include bp(4) {
    padding: 0 $pad*8;
  }
}

.talent-name {
  @include franklin();
  text-transform: uppercase;
  color: $gray;
  text-align: center;
  margin-top: $pad;

  span {
    color: $white;
    margin-left: 3px;

    @include bp(4) {
      margin-left: 5px;
    }
  }

  @include bp(4) {
    // this moves the text into the middle of the edge, rotates it -90deg from the center point, and also positions it vertically centered
    transform: translateY(-50%) translateX(-50%) rotate(-90deg);
    position: absolute;
    left: -37px;
    top: 50%;
    margin-top: 0;
  }
}

.close {
  @include franklin();
  text-transform: uppercase;
  text-align: center;
  margin: $pad 0;
  transition: transform 250ms ease;

  @include bp(4) {
    // this moves the text into the middle of the edge, rotates it -90deg from the center point, and also positions it vertically centered
    transform: translateY(-50%) translateX(-50%) rotate(-90deg);
    position: absolute;
    right: -50px;
    top: 50%;

    visibility: hidden;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.05) translateY(-50%) translateX(-50%) rotate(-90deg);
    }

    &:after {
      content:'CLOSE';
      visibility: visible;
      display: block;
      position: absolute;
    }
  }
}

.meta {
  padding: $pad*2 $pad $pad*4;

  @include bp(4) {
    padding-top: $pad*4;
  }
}

h2 {
  @include gt-bold();
  text-align: center;
  font-size: 20px;

  @include bp(2) {
    font-size: 32px;
  }

  @include bp(4) {
    font-size: 36px;
  }
}

h3 {
  @include gt-medium();
  color: $gray;
  text-align: center;
  font-size: 14px;
  margin-top: $pad;

  @include bp(2) {
    font-size: 18px;
  }

  @include bp(4) {
    font-size: 22px;
  }
}

.video-relative-wrapper {
  max-width: 1400px;
  margin: 0 auto;

  @include bp(4) {
    position: relative;
  }
}
</style>
