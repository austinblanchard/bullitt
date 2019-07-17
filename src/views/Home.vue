<template>
  <div class="home">
    <div class="title">Talent</div>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "../sass/_typography.scss";
.title {
  @include display();
  text-align: center;
}
</style>