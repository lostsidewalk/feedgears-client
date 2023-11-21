<template>
  <DemoFeature
    :title="$t('feedDashboard')"
    :details="[
      $t('feedDashboard_detail1'),
      $t('feedDashboard_detail2'),
    ]"
  >
    <template #body>
      <v-card
        elevation="12"
        class="mb-16"
      >
        <v-card-title>
          {{ $t('dashboardCardScreenshot') }}
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-img
            :src="'dashboard_card_' + (isDark ? 'dark' : 'light') + '.png'"
            :alt="$t('dashboardCardScreenshot')"
          />
        </v-card-text>
      </v-card>
    </template>
  </DemoFeature>
</template>

<script>
import DemoFeature from '../DemoFeature.vue';

export default {
  components: {
    DemoFeature, 
  },
  props: {
    isDark: { type: Boolean, default: false },
  }
}
</script>
