<template>
  <div id="app" :class="{ 'nav-open': nav_is_open }">
    <div id="nav">
      <router-link class="nav-title" to="/" @click.native="nav_is_open = false">Bullitt</router-link>
      <div class="menu" :class="{ 'nav-open': nav_is_open }" @click="nav_is_open = !nav_is_open">
        <div class="line one"></div>
        <div class="line two"></div>
      </div>
    </div>

    <nav class="side-nav" :class="{ 'nav-open': nav_is_open }">
      <router-link class="nav-link" to="/" @click.native="nav_is_open = false">Home</router-link>
      <router-link class="nav-link" to="/anderson-wright" @click.native="nav_is_open = false">Anderson Wright</router-link>
      <router-link class="nav-link" to="/anthony-leonardi" @click.native="nav_is_open = false">Anthony Leonardi</router-link>
      <router-link class="nav-link" to="/candice-vernon" @click.native="nav_is_open = false">Candice Vernon</router-link>
      <router-link class="nav-link" to="/drake-doremus" @click.native="nav_is_open = false">Drake Doremus</router-link>
      <router-link class="nav-link" to="/justin-lin" @click.native="nav_is_open = false">Justin Lin</router-link>
      <router-link class="nav-link" to="/larry-charles" @click.native="nav_is_open = false">Larry Charles</router-link>
      <router-link class="nav-link" to="/matt-ogens" @click.native="nav_is_open = false">Matt Ogens</router-link>
      <router-link class="nav-link" to="/peyton-wilson" @click.native="nav_is_open = false">Peyton Wilson</router-link>
    </nav>

    <div class="overlay" :class="{ 'nav-open': nav_is_open }">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      nav_is_open: false
    }
  }
}

</script>

<style lang="scss">
@import "./sass/resets/_company.scss";
@import "./sass/resets/_meyer-reset.scss";
@import "./sass/_variables.scss";
@import "./sass/_typography.scss";
@import "./sass/_breakpoints.scss";

html,
body {
  height: 100%;
}

body {
  background: $black;
}

#app {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  color: $white;

  &.nav-open {
    height: 100%;
    overflow-y: hidden;
  }
}

#nav {
  @include franklin();
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  .nav-title {
    padding: $pad;
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
      padding-bottom: $pad*4;
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
