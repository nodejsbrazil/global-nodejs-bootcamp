<template>
  <ul class="nav">
    <!-- <li class="nav-item">
      <nuxt-link :style="{ color }" to="/sponsors">sponsors</nuxt-link>
    </li> -->
    <li class="nav-item">
      <nuxt-link :style="{ color }" to="/">home</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :style="{ color }" to="/events">events</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    color: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 3;
  display: flex;
  list-style: none;
  padding: 0;

  &-item {
    padding: 0px 15px;

    > a {
      font-size: 25px;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
