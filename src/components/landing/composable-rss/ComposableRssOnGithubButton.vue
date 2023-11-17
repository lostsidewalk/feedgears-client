<template>
  <v-btn
    elevation="1" 
    class="visit-us-on-github-btn flex-grow-1"
    variant="outlined" 
    prepend-icon="fa-github"
    @click="goToGithub"
  >
    <span style="white-space: normal;letter-spacing: normal;text-transform: none;">
      {{ $t('composableRssOnGithub') }}
    </span>
    <v-tooltip
      location="end"
      activator="parent"
      open-delay="2000"
      :aria-label="$t('composableRssOnGithub')"
    >
      {{ $t('composableRssOnGithub') }}
    </v-tooltip>
  </v-btn>
</template>

<script>
export default {
  name: "ComposableRssOnGithubButton",
  methods: {
    goToGithub() {
      window.location='https://www.github.com/lostsidewalk/composable-rss-app';
    },
  }
}
</script>

<style scoped>
.visit-us-on-github-btn {
  min-height: 3rem;
  font-weight: bold;
}
</style>