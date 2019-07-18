<template>
  <div class="talent-list">

    <router-link class="talent-link anderson-wright" :to="{ name: 'talent', params: { talentSlug: 'anderson-wright' }}">
      <span>Anderson Wright</span>
    </router-link>

    <router-link class="talent-link anthony-leonardi" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Anthony Leonardi</span>
    </router-link>

    <router-link class="talent-link candice-vernon" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Candice Vernon</span>
    </router-link>

    <router-link class="talent-link drake-doremus" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Drake Doremus</span>
    </router-link>

    <router-link class="talent-link justin-lin" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Justin Lin</span>
    </router-link>

    <router-link class="talent-link larry-charles" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Larry Charles</span>
    </router-link>

    <router-link class="talent-link matt-ogens" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Matt Ogens</span>
    </router-link>

    <router-link class="talent-link peyton-wilson" :to="{ name: 'talent', params: { talentSlug: 'fox' }}">
      <span>Peyton Wilson</span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'TalentList',

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
  max-width: 450px;

  @include bp(3) {
    flex-direction: row;
    padding: $pad*4;
    max-width: 1200px;
  }

  @include bp(4) {
    padding: $pad*6;
  }
}

.talent-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  background: rebeccapurple;

  @include bp(3) {
    width: 50%;
    height: 250px;
  }

  &.anderson-wright {
    background: url('../assets/anderson-wright.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.anthony-leonardi {
    background: url('../assets/anthony-leonardi.jpg');
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

  &.drake-doremus {
    background: url('../assets/drake-doremus.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.justin-lin {
    background: url('../assets/justin-lin.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.larry-charles {
    background: url('../assets/larry-charles.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.matt-ogens {
    background: url('../assets/matt-ogens.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.peyton-wilson {
    background: url('../assets/peyton-wilson.jpg');
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
