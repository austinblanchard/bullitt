<template>
  <div class="talent-video">

    <vimeo-player
        class="vimeo"
        ref="player"
        :options="{ responsive: true }"
        :video-id="306676681"
        :autoplay="true"
      ></vimeo-player>

  </div>
</template>

<script>
import talents from '../talent.json'

export default {
  name: 'TalentVideo',
    
  data () {
    return {
      talent: talents.find(talent => talent.slug === this.$route.params.talentSlug),
      options: { responsive: true },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vimeo {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
