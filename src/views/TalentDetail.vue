<template>
  <div class="talent-detail">
    <!-- when key value is updated, component wil re-render with new video -->
    <TalentVideo :key="this.$store.state.count"/>
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
