<template>
  <div class="main-container">
    <div class="header">
      <div class="header-container">
        <h1 class="header-title">{{ issue.title }}</h1>
        <span class="header-subtitle">
          <i>by</i> @{{ issue.userGroupName }}
        </span>
        <div class="header-labels">
          <span v-for="(label, index) in issue.labels" :key="index">
            {{ label }}
          </span>
        </div>
      </div>
    </div>

    <div class="gn-large-container mt-5">
      <div class="gn-container">
        <h1 class="gn-container-title">Description</h1>
        <div
          :style="{
            fontSize: '18px',
          }"
          v-html="renderHTML(issue.description.trim())"
        ></div>
      </div>
    </div>

    <div class="gn-large-container mt-5">
      <div class="gn-container">
        <h1 class="gn-container-title">Where</h1>
        <p
          :style="{
            fontSize: '18px',
          }"
        >
          {{ issue.location.address }}
        </p>
      </div>
    </div>

    <div class="gn-large-container mt-5">
      <div
        :style="{
          display: 'flex',
          justifyContent: 'center',
        }"
        class="gn-container"
      >
        <v-btn
          :style="{ color: 'white' }"
          large
          color="#74B758"
          @click="go(issue.link)"
        >
          Subscribe to this event
        </v-btn>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { slugify } from '@/utils/string';
import MarkdownIt from 'markdown-it';
import Footer from '@/components/Footer';
import issues from '@/content/events';

const md = new MarkdownIt();

export default {
  name: 'Home',
  components: { Footer },
  data: () => ({
    issue: {},
  }),
  created() {
    this.issue = issues.find(
      issue => slugify(issue.title) === slugify(this.$route.params.event)
    );
  },
  methods: {
    renderHTML(raw) {
      return md.render(raw);
    },
    go(link) {
      window.open(link, { target: '_blank' });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: center;
  background-image: url('../assets/banner2.jpg');
  background-size: cover;
  background-position: 40% 40%;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: radial-gradient(
      ellipse farthest-corner,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    );
    width: 100%;
    height: 350px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 1000px;
    height: 350px;
  }
}

.header-title {
  z-index: 2;
  color: white;
  font-size: 40px;
  line-height: 120%;
}
.header-subtitle {
  margin-bottom: 10px;
  z-index: 2;
  color: white;
  font-size: 20px;
}
.header-labels {
  display: flex;
  width: 100%;
  flex-direction: row;
  color: white;
  font-size: 17px;
  margin-bottom: 20px;

  > span {
    z-index: 2;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid white;
    padding: 5px 10px;
  }
}
</style>
