<template>
  <v-btn elevation="1" class="support-us-on-patreon-button flex-grow-1" variant="tonal" prepend-icon="fa-users"
    :text="$t('supportUsOnPatreon')" @click="goToPatreon">
    <span style="white-space: normal;letter-spacing: normal;text-transform: none;">
      {{ $t('supportUsOnPatreon') }}
    </span>
  </v-btn>
</template>

<script>
export default {
  name: "SupportUsOnPatreonButton",
  methods: {
    goToPatreon() {
      window.location = 'https://www.patreon.com/lostsidewalk';
    },
  }
}
</script>

<style scoped>
.support-us-on-patreon-button {
  min-height: 3rem;
  font-weight: bold;
}
</style>