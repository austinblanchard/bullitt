<template>
  <div id="app">
    <div id="nav">
      <div class="nav-title">Bullitt</div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./sass/resets/_company.scss";
@import "./sass/resets/_meyer-reset.scss";
@import "./sass/_variables.scss";
@import "./sass/_typography.scss";
// @import "./sass/_breakpoints.scss";

body {
  background: $black;
}

#app {
  color: $white;
}

#nav {
  @include franklin();
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  .nav-title {
    padding: $pad;
    font-size: 24px;
  }
}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
