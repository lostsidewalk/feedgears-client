<template>
  <v-app>
    <v-app-bar
      app
      location="top"
      :scroll-behavior="'elevate'"
    >
      <template #title>
        <span class="feedgears-rss">
          FeedGears RSS
        </span>
      </template>
      <template #prepend>
        <v-app-bar-nav-icon
          icon="fa-rss"
          :aria-label="$t('feedGearsRssLogo')"
        />
      </template>
    </v-app-bar>

    <v-main>
      <BannerPanel />

      <DemoPanel class="mb-4" /> 

      <v-divider /> 

      <FAQPanel class="mt-4" />

      <v-divider /> 
      
      <FooterPanel class="mt-4" />
    </v-main>
  </v-app>
</template>
  
<script>
import DemoPanel from '@/components/landing/DemoPanel.vue';
import FAQPanel from '@/components/landing/FAQPanel.vue';

import BannerPanel from '@/components/banner-panel/BannerPanel.vue';
import FooterPanel from '@/components/footer-panel/FooterPanel.vue';

export default {
  name: "LandingView",
  components: {
    DemoPanel, 
    FAQPanel,
    BannerPanel, 
    FooterPanel, 
  },
};
</script>
  
<style scoped>
.feedgears-rss {
  font-family: "Russo One", system-ui, sans-serif;
  font-weight: bold;
  font-size: larger;
}
</style>
