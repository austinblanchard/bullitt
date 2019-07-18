<template>
  <div class="talent-video">

    <vimeo-player
        class="vimeo"
        ref="player"
        :options="{ responsive: true }"
        :video-id="talent.video"
        :autoplay="true"
      ></vimeo-player>

    <div class="meta">
      <h2>{{ talent.title }}</h2>
      <h3>{{ talent.subtitle }}</h3>
    </div>
    
  </div>
</template>

<script>
import talents from '../talent.json'

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
@import "../sass/_breakpoints.scss";
@import "../sass/_variables.scss";
@import "../sass/_typography.scss";

.meta {
  padding: $pad $pad $pad*4;
}

h2 {
  @include display();
  text-align: center;
  font-size: 20px;

  @include bp(2) {
    font-size: 32px;
  }
}

h3 {
  @include display();
  color: $gray;
  text-align: center;
  font-size: 14px;
  margin-top: $pad;

  @include bp(2) {
    font-size: 18px;
  }
}
</style>
