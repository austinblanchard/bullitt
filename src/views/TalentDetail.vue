<template>
  <div class="talent-detail">
    <TalentVideo />
  </div>
</template>

<script>
import TalentVideo from '@/components/TalentVideo.vue'

export default {
  name: 'TalentDetail',
  components: {
    TalentVideo
  }
}
</script>

<style lang="scss">
// @import "../sass/_typography.scss";
// @import "../sass/_variables.scss";

// .title {
//   @include display();
//   text-align: center;
//   font-size: 46px;
//   padding: $pad*2;
// }
</style>