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
// @import "./sass/_typography.scss";
// @import "./sass/_breakpoints.scss";

#app {
  color: $white;
  background-color: $black;
}

#nav {
  text-align: center;

  .nav-title {
    padding: $pad;
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
