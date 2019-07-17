<template>
  <div class="home">
    <div class="title">Talent</div>
    <TalentList />
  </div>
</template>

<script>
// @ is an alias to /src
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

.title {
  @include display();
  text-align: center;
  font-size: 46px;
  padding: $pad*2;
}
</style>