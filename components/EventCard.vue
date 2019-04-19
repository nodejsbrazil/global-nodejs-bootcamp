<template>
  <v-card
    color="#74B758"
    dark
    max-width="400"
    :style="{ cursor: 'pointer' }"
    @click="goEventDetails(card)"
  >
    <v-card-title>
      <!-- <v-icon large left>
        mdi-twitter
      </v-icon> -->
      <span class="title font-weight-bold">{{ card.title }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-light">
      {{ card.description | truncate(127) }}
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img class="elevation-6" :src="card.avatarUrl"></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>@{{ card.githubUser }}</v-list-tile-title>
        </v-list-tile-content>

        <v-layout align-center justify-end>
          <v-chip
            v-for="(label, index) in card.labels.slice(0, 2)"
            :key="`label-${index}`"
            outline
            text-color="white"
            >{{ label }}</v-chip
          >
          <!-- <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span> -->
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
import { slugify } from '@/utils/string';

export default {
  name: 'EventCard',
  filters: {
    truncate(value, amount) {
      return value.slice(0, amount) + '...';
    },
  },
  props: {
    card: { type: Object, required: true },
  },
  methods: {
    goEventDetails({ title }) {
      this.$router.push(`/${slugify(title)}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
