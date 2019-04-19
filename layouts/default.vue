<template>
  <v-app class="app">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
%max-width {
  width: 100%;
  height: 100%;
}

html,
body {
  @extend %max-width;
  box-sizing: border-box;
}
.app {
  @extend %max-width;
}
.main-container {
  width: 100%;
  height: 100%;
}

.gn-large-container {
  display: flex;
  justify-content: center;
  width: 100%;

  > .gn-container {
    width: 1000px;

    &-title {
      color: #444;
      font-size: 35px;
    }
  }
}
</style>
