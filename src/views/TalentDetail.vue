<template>
  <div class="talent-detail">
    <TalentVideo :key="componentKey"/>
  </div>
</template>

<script>
import TalentVideo from '@/components/TalentVideo.vue'

export default {
  name: 'TalentDetail',
  components: {
    TalentVideo
  },

  data() {
    return {
      componentKey: 0,
    };
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;  
    }
  }
}
</script>
