<template>
  <v-layout column justify-center align-center>
    <h1
      :style="{
        fontSize: '40px',
        color: '#444',
      }"
      class="pt-5 pb-3"
    >
      Our last events.
    </h1>
    <v-layout justify-center align-start wrap>
      <EventCard
        v-for="(issue, index) in issues.slice(0, 3)"
        :key="index"
        :card="issue"
        class="ml-2 mr-2 mb-4"
      />
    </v-layout>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import EventCard from '@/components/EventCard';
import issues from '@/content/events';

export default {
  name: 'NextEvents',
  components: { EventCard },
  data: () => ({
    issues: [],
  }),
  async created() {
    this.setLoading(true);
    this.issues = await Promise.all(
      issues.map(async issue => {
        const { data: response } = await this.$axios.get(
          `https://api.github.com/users/${issue.githubUser}`
        );
        return { ...issue, avatarUrl: response.avatar_url };
      })
    );
    this.setLoading(false);
  },
  methods: {
    ...mapActions(['setLoading']),
  },
};
</script>

<style lang="scss" scoped></style>
