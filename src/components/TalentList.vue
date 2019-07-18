<template>
  <div class="talent-list">

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'anderson-wright' }}">
      <div class="bg-image-overlay anderson-wright"></div>
      <span>Anderson Wright</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'anthony-leonardi' }}">
      <div class="bg-image-overlay anthony-leonardi"></div>
      <span>Anthony Leonardi</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'candice-vernon' }}">
      <div class="bg-image-overlay candice-vernon"></div>
      <span>Candice Vernon</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'drake-doremus' }}">
      <div class="bg-image-overlay drake-doremus"></div>
      <span>Drake Doremus</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'justin-lin' }}">
      <div class="bg-image-overlay justin-lin"></div>
      <span>Justin Lin</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'larry-charles' }}">
      <div class="bg-image-overlay larry-charles"></div>
      <span>Larry Charles</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'matt-ogens' }}">
      <div class="bg-image-overlay matt-ogens"></div>
      <span>Matt Ogens</span>
    </router-link>

    <router-link class="talent-link" :to="{ name: 'talent', params: { talentSlug: 'peyton-wilson' }}">
      <div class="bg-image-overlay peyton-wilson"></div>
      <span>Peyton Wilson</span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'TalentList'
}
</script>

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  overflow: hidden;

  @include bp(3) {
    width: 50%;
    height: 250px;
  }

  @include bp(4) {
    height: 280px;
  }
}

.talent-link:hover .bg-image-overlay,
.talent-link:focus .bg-image-overlay {
  transform: scale(1.03);
}

.bg-image-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 500ms ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &.anderson-wright {
    background-image: url('../assets/anderson-wright.jpg');
  }

  &.anthony-leonardi {
    background-image: url('../assets/anthony-leonardi.jpg');
  }

  &.candice-vernon {
    background-image: url('../assets/candice-vernon.jpg');
  }

  &.drake-doremus {
    background-image: url('../assets/drake-doremus.jpg');
  }

  &.justin-lin {
    background-image: url('../assets/justin-lin.jpg');
  }

  &.larry-charles {
    background-image: url('../assets/larry-charles.jpg');
  }

  &.matt-ogens {
    background-image: url('../assets/matt-ogens.jpg');
  }

  &.peyton-wilson {
    background-image: url('../assets/peyton-wilson.jpg');
  }
}

.talent-link span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include display();
  font-size: 20px;
  width: 100%;
  text-align: center;

  @include bp(3) {
    font-size: 32px;
  }
}
</style>
