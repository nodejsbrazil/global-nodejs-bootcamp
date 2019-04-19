<template>
  <v-layout id="about" column justify-center align-center>
    <!-- <v-container> -->
    <h1
      :style="{
        fontSize: '40px',
        color: '#444',
      }"
      class="pt-5 pb-2"
    >
      About.
    </h1>
    <v-layout justify-start align-start wrap>
      <p
        :style="{
          fontSize: '20px',
          textAlign: 'center',
        }"
      >
        All around the world user groups and communities want to learn about
        <br />
        Node.js! Join hundreds of other organizers to help out and be part of
        <br />
        the experience! Check out the different locations worldwide!
      </p>
    </v-layout>
    <!-- </v-container> -->
  </v-layout>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  background-image: url(../assets/banner3.png);
  background-size: cover;
  height: 700px;
}
</style>
