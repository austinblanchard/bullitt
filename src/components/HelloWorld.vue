<template>
  <div class="talent-grid">

    <a class="talent-link anderson-wright" href="">
      <span>first lastname</span>
    </a>
    <a class="talent-link anthony-leonardi" href="">
      <span>first lastname</span>
    </a>
    <a class="talent-link candice-vernon" href="">
      <span>first lastname</span>
    </a>
    <a class="talent-link" href="">
      <span>first lastname</span>
    </a>


    <!-- <router-link class="" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      test
    </router-link> -->
  </div>
</template>

<script>
import talents from '../talent.json';

export default {
  name: 'HelloWorld',
  
  // data() {
  //   return {
  //     talent: talents.find(talent => talent.slug === this.$route.params.talentSlug)
  //   };
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/_variables.scss";
@import "../sass/_typography.scss";

.talent-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: $pad*2;
}

.talent-link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: rebeccapurple;

  &.anderson-wright {
    background: url('../assets/anderson-wright.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.anthony-leonardi {
    background: url('../assets/anthony-leonardi.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.candice-vernon {
    background: url('../assets/candice-vernon.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.talent-link span {
  @include display();
  font-size: 20px;
}
</style>
