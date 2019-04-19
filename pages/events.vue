<template>
  <div class="main-container">
    <Banner
      title="Events around the world"
      description="Meet new peoples and learn something new."
      bg-class-image="header-events"
      height="60%"
    />

    <v-layout class="mt-5" wrap justify-center>
      <div class="card-container">
        <EventCard
          v-for="(issue, index) in issues"
          :key="index"
          :card="issue"
          class="ml-2 mr-2 mb-4"
        />
      </div>
    </v-layout>
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import issues from '@/content/events';

export default {
  name: 'Events',
  components: { Banner, EventCard, Footer },
  data: () => ({
    issues: [],
  }),
  async created() {
    this.issues = await Promise.all(
      issues.map(async issue => {
        const { data: response } = await this.$axios.get(
          `https://api.github.com/users/${issue.githubUser}`
        );
        return { ...issue, avatarUrl: response.avatar_url };
      })
    );
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;

  @media all and (max-width: 850px) {
    justify-content: center;
  }
}
</style>
