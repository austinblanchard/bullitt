<template>
  <div id="app" :class="{ 'nav-open': this.$store.state.nav_is_open }">
    <div id="nav">
      <router-link class="nav-title" to="/">Bullitt</router-link>
      <div class="menu" :class="{ 'nav-open': this.$store.state.nav_is_open }" @click="toggleNav">
        <div class="line one"></div>
        <div class="line two"></div>
      </div>
    </div>

    <nav class="side-nav" :class="{ 'nav-open': this.$store.state.nav_is_open }">
      <router-link class="nav-link" to="/" @click.native="incrementCounter">Home</router-link>
      <router-link class="nav-link" to="/anderson-wright" @click.native="incrementCounter">Anderson Wright</router-link>
      <router-link class="nav-link" to="/anthony-leonardi" @click.native="incrementCounter">Anthony Leonardi</router-link>
      <router-link class="nav-link" to="/candice-vernon" @click.native="incrementCounter">Candice Vernon</router-link>
      <router-link class="nav-link" to="/drake-doremus" @click.native="incrementCounter">Drake Doremus</router-link>
      <router-link class="nav-link" to="/justin-lin" @click.native="incrementCounter">Justin Lin</router-link>
      <router-link class="nav-link" to="/larry-charles" @click.native="incrementCounter">Larry Charles</router-link>
      <router-link class="nav-link" to="/matt-ogens" @click.native="incrementCounter">Matt Ogens</router-link>
      <router-link class="nav-link" to="/peyton-wilson" @click.native="incrementCounter">Peyton Wilson</router-link>
    </nav>

    <div class="overlay" :class="{ 'nav-open': this.$store.state.nav_is_open }">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',

  methods: {
    // toggles nav boolean, and closes menu when selection is made
    ...mapActions([
      'toggleNav'
    ]),
    // changes the key of child component TalentVideo to force re-rendering so new videos are shown
    incrementCounter () {
      this.$store.dispatch('inrementAction', 1)
    }
  }
}

</script>

<style lang="scss">
@import "@/sass/resets/_company.scss";
@import "@/sass/resets/_meyer-reset.scss";
@import "@/sass/_variables.scss";
@import "@/sass/_typography.scss";
@import "@/sass/_breakpoints.scss";

html,
body {
  background: $black;
  height: 100%;
}

#app {
  // relative for side nav
  position: relative;
  color: $white;
  overflow: hidden;

  // disable scrolling on nav menu open
  &.nav-open {
    height: 100%;
    overflow-y: hidden;
  }
}

#nav {
  @include franklin();
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  .nav-title {
    padding: 26px $pad $pad;
    font-size: 24px;

    @include bp(2) {
      padding: $pad*2;
      font-size: 32px;
    }

    @include bp(3) {
      font-size: 36px;
    }

    @include bp(4) {
      font-size: 42px;
      padding-bottom: $pad*3;
    }
  }
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  right: 30px;
  top: 20px;
  width: 32px;
  padding: 15px 0;
  cursor: pointer;

  .line {
    display: block;
    height: 4px;
    width: 100%;
    background: $white;
    position: absolute;
    left: 0;
    top: 50%;
    transition: 0.1s ease-in-out;

    &.one {
      transform: translate(0, -50%);
      margin-top: -(5px);
    }
    &.two {
      transform: translate(0, -50%);
      margin-top: 4px;
    }
  }

  &.nav-open {
    //
    .line {
      //
      &.one {
        transform: translate(0, -50%) rotate(45deg);
        margin-top: 0;
      }
      &.two {
        transform: translate(0, -50%) rotate(-45deg);
        margin-top: 0;
      }
    }
  }
}

.side-nav {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  padding-right: $pad*4;
  background: transparent;
  position: absolute;
  top: 0;
  right: -100%;
  bottom: 0;
  z-index: 2;
  transition: all 250ms ease;

  @include bp(2) {
    padding-right: $pad*6;
  }

  @include bp(3) {
    padding-right: $pad*8;
  }

  .nav-link {
    @include franklin();
    text-transform: uppercase;
    font-size: 22px;

    &.router-link-exact-active {
      color: $gray;
    }

    &:hover {
      color: $gray;
    }

    @include bp(2) {
      font-size: 24px;
    }

    @include bp(4) {
      font-size: 28px;
    }

    &:not(:first-of-type) {
      margin-top: $pad;

      @include bp(2) {
        margin-top: $pad*1.5;
      }

      @include bp(3) {
        margin-top: $pad*2;
      }
    }
  }

  &.nav-open {
    width: 100%;
    right: 0;

    @include bp(3) {
      width: auto;
    }
  }
}

// dark overlay when side nav open
.overlay.nav-open {
  position: relative;
  height: 100%;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
  }
}
</style>
