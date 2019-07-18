<template>
  <div class="home">
    <div class="title">Talent</div>
    <TalentList />
  </div>
</template>

<script>
import TalentList from '@/components/TalentList.vue'

export default {
  name: 'home',
  components: {
    TalentList
  }
}
</script>

<style lang="scss">
@import "../sass/_typography.scss";
@import "../sass/_variables.scss";
@import "../sass/_breakpoints.scss";

.title {
  @include display();
  text-align: center;
  font-size: 46px;
  padding-top: $pad*2;

  @include bp(2) {
    font-size: 54px;
  }

  @include bp(3) {
    font-size: 72px;
    padding-top: $pad*3;
  }

  @include bp(4) {
    font-size: 94px;
    padding-top: $pad*4;
  }
}
</style>