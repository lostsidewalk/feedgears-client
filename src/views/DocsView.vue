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
      <v-toolbar-items>
        <GoBack />
        <DisplayModeButton />
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <!-- container -->
      <BannerPanel />

      <v-divider /> 

      <v-container>
      </v-container>

      <v-divider /> 
      
      <FooterPanel app />
    </v-main>
  </v-app>
</template>

<script>
import { useI18n } from 'vue-i18n';
import BannerPanel from "@/components/banner-panel/BannerPanel.vue";
import GoBack from "@/components/layout/GoBack.vue";
import DisplayModeButton from "@/components/layout/DisplayModeButton.vue";
import FooterPanel from "@/components/footer-panel/FooterPanel.vue";

export default {
  name: "DocsView",
  components: {
    GoBack,
    DisplayModeButton,
    BannerPanel,
    FooterPanel,
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    }
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
