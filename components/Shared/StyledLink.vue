<template functional>
  <nuxt-link v-if="realLink" class="cta" :to="props.location">{{
    props.text
  }}</nuxt-link>
  <a v-else class="cta" :href="props.location">{{ props.text }}</a>
</template>

<style lang="scss" scoped>
.cta {
  z-index: 3;
  font-size: 25px;
  color: white;
  transition: all 300ms ease-in;

  &:hover {
    text-decoration: none;
    background-color: #74b758;
  }
}
</style>
