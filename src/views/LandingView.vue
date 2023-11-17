<template>
  <v-app>
    <v-app-bar app location="top" :scroll-behavior="'elevate'">
      <template #title>
        <div class="d-flex flex-gap-1">
          <!-- Newsgears -->
          <router-link to="/newsgears">
            <v-btn class="newsgears flex-grow-1" :class="{ 'selected-app': showNewsgears }" variant="text"
              prepend-icon="fa-feed" :text="$t('newsgears')" />
          </router-link>
          <!-- ComposableRSS -->
          <router-link to="/composable-rss">
            <v-btn class="composable-rss flex-grow-1" :class="{ 'selected-app': showComposableRss }" variant="text"
              prepend-icon="fa-feed" :text="$t('composableRss')" />
          </router-link>
        </div>
      </template>
    </v-app-bar>

    <v-main style="min-width: fit-content;">
      <NewsgearsPanel v-if="showNewsgears" />
      <ComposableRssPanel v-if="showComposableRss" />
      <v-divider class="mt-8 mb-8" />
      <FAQPanel class="mt-8" />
      <FooterPanel class="mt-8" />
    </v-main>
  </v-app>
</template>
  
<script>
// landing view components 
import NewsgearsPanel from '@/components/landing/NewsgearsPanel.vue';
import ComposableRssPanel from '@/components/landing/ComposableRssPanel.vue';
import FAQPanel from '@/components/landing/FAQPanel.vue';
// footer component 
import FooterPanel from '@/components/footer-panel/FooterPanel.vue';


export default {
  name: "LandingView",
  components: {
    NewsgearsPanel,
    ComposableRssPanel,
    FAQPanel,
    FooterPanel,
  },
  computed: {
    showComposableRss: function () {
      return this.selectedApplication === 'COMPOSABLE_RSS';
    },
    showNewsgears: function () {
      return this.selectedApplication === 'NEWSGEARS';
    }
  },
  props: ["selectedApplication"],
}
</script>

<style scoped>
/** buttons */
.newsgears,
.composable-rss {
  font-family: "Russo One", system-ui, sans-serif;
  margin: 0;
}

.selected-app {
  font-weight: bold;
  border-bottom: 1px solid;
  border-radius: 0;
}

.flex-gap-1 {
  gap: 1rem;
}
</style>
