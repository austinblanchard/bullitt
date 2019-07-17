<template>
  <div class="talent-list">

    <router-link class="talent-link anderson-wright" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>first lastname</span>
    </router-link>

    <router-link class="talent-link anthony-leonardi" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>first lastname</span>
    </router-link>

    <router-link class="talent-link candice-vernon" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>first lastname</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>first lastname</span>
    </router-link>

  </div>
</template>

<script>
import talents from '../talent.json'

export default {
  name: 'TalentList',

  data () {
    return {
      talent: talents.find(talent => talent.slug === this.$route.params.talentSlug)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/_variables.scss";
@import "../sass/_breakpoints.scss";
@import "../sass/_typography.scss";

.talent-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: $pad*2;
  margin: 0 auto;
  max-width: 1200px;

  @include bp(3) {
    flex-direction: row;
  }
}

.talent-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: rebeccapurple;

  @include bp(3) {
    width: 50%;
    height: 250px;
  }

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

  @include bp(3) {
    font-size: 32px;
  }
}
</style>
