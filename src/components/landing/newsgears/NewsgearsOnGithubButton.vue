<template>
  <v-btn
    elevation="1" 
    class="visit-us-on-github-btn flex-grow-1"
    variant="outlined" 
    prepend-icon="fa-github"
    @click="goToGithub"
  >
    <span style="white-space: normal;letter-spacing: normal;text-transform: none;">
      {{ $t('newsgearsOnGithub') }}
    </span>
    <v-tooltip
      location="end"
      activator="parent"
      open-delay="2000"
      :aria-label="$t('newsgearsOnGithub')"
    >
      {{ $t('newsgearsOnGithub') }}
    </v-tooltip>
  </v-btn>
</template>

<script>
export default {
  name: "NewsgearsOnGithubButton",
  methods: {
    goToGithub() {
      window.location='https://www.github.com/lostsidewalk/newsgears-app';
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