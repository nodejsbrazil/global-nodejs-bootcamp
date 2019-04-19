<template>
  <div
    :style="{
      height,
    }"
    class="banner-header"
    :class="bgClassImage"
  >
    <span
      :style="{
        height,
      }"
      class="header-overlay"
    ></span>
    <Nav color="white" />
    <h1 class="custom-title">{{ title }}</h1>
    <h2 class="custom-subtitle">{{ description }}</h2>
    <StyledLink
      v-if="link"
      real-link="link.realLink"
      :location="link.location"
      :text="link.text"
    />
  </div>
</template>

<script>
import StyledLink from '@/components/Shared/StyledLink';
import Nav from '@/components/Nav';

export default {
  name: 'Banner',
  components: { StyledLink, Nav },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: Object, default: null },
    bgClassImage: { type: String, default: 'header-home' },
    height: { type: String, default: '100%' },
  },
};
</script>

<style lang="scss" scoped>
%max-width {
  width: 100%;
  height: 100%;
}

.banner-header.header-home {
  background-image: url(../assets/banner1.jpg);
}
.banner-header.header-events {
  background-image: url(../assets/banner4.jpg);
}
.banner-header {
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @extend %max-width;

  .header-overlay {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: radial-gradient(
      ellipse farthest-corner,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    );
    @extend %max-width;
  }
}

.custom-title {
  z-index: 3;
  font-size: 60px;
  color: white;
  text-align: center;
}
.custom-subtitle {
  @extend .custom-title;
  font-size: 40px;
  font-weight: 300;
  margin-top: -10px;
  margin-bottom: 25px;
  text-align: center;
}
</style>
