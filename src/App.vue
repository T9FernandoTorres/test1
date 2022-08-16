<template>
  <nav>
    <router-link to="/">Torres</router-link> |
    <router-link to="/about">Sugar</router-link>
  </nav>
  <router-view />

  <!-- <test-component></test-component> -->

  <svg width="20" height="20" style="color: #42b983">
    <use href="#more"></use>
  </svg>
  <svg width="20" height="20" style="color: #42b983">
    <use href="#fillToRight"></use>
  </svg>
  <Icon
    prefix=""
    name="more"
    :style="{ width: 20, height: 20, color: '#42b983' }"
    class="common-icon"
  ></Icon>
  <Icon prefix="icon-" name="icon_Music" class="common-icon"></Icon>
  <Icon prefix="icon-" name="Music" class="common-icon"></Icon>
  <Icon prefix="icon-" name="faxian" class="common-icon"></Icon>
  <Icon prefix="icon-" name="faxian1" class="common-icon"></Icon>
  <Icon prefix="icon-" name="wode1" class="common-icon"></Icon>
  <!-- <svg-animation> </svg-animation> -->
  <torres-loading> </torres-loading>
  <torres-flybox>
    <div>111</div>
    <div>222</div>
    <div>333</div>
  </torres-flybox>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.common-icon {
  width: 50px;
  height: 50px;
}
</style>
