<template>
  <div class="main-container">
    <Banner
      title="Global Node.js Bootcamp"
      description="Node.js bootcamps around the world."
      :link="{
        realLink: true,
        location: 'https://github.com/nodejsbrazil/global-nodejs-bootcamp',
        text: 'get involved!',
      }"
    />
    <NextEvents />
    <About />
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import About from '@/components/About';
import NextEvents from '@/components/NextEvents';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    Banner,
    About,
    NextEvents,
    Footer,
  },
};
</script>
