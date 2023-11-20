<template>
  <v-container>
    <v-sheet>
      <v-card elevation="1">
        <v-carousel
          show-delimiters
          :show-arrows="false"
          height="1050"
          class="rounded"
        >
          <!-- create and serve syndicated data feeds -->
          <v-carousel-item>
            <CreateAndServeFeeds_DemoFeature :is-dark="isDark" />
          </v-carousel-item>
          <!-- organize and publish content of any type -->
          <v-carousel-item>
            <OrganizeAndPublishContent_DemoFeature :is-dark="isDark" />
          </v-carousel-item>
          <!-- manage feed authentication and user credentials -->
          <v-carousel-item>
            <ManageFeedAuth_DemoFeature :is-dark="isDark" />
          </v-carousel-item>
          <!-- customize content expiration, archival, and purging -->
          <!-- <v-carousel-item>
              <CustomizeContent_DemoFeature :is-dark="isDark" /> 
            </v-carousel-item> -->
          <!-- publish iTunes podcasts -->
          <!-- <v-carousel-item>
              <PublishITunes_DemoFeature :is-dark="isDark" />
            </v-carousel-item> -->
          <!-- publish MediaRSS channels -->
          <!-- <v-carousel-item>
              <PublishMediaRss_DemoFeature :is-dark="isDark" /> 
            </v-carousel-item> -->
          <!-- support organizational needs -->
          <!-- <v-carousel-item>
              <MultiUser_DemoFeature />
            </v-carousel-item> -->
          <!-- CopmosableRss is free -->
          <!-- <v-carousel-item>
              <FreeSoftware_DemoFeature /> 
            </v-carousel-item> -->
          <!-- OpenApiV3 support -->
          <!-- <v-carousel-item>
              <OpenApiV3_DemoFeature /> 
            </v-carousel-item> -->
          <!-- about composable-rss (misc. features) -->
          <v-carousel-item>
            <AboutComposableRss_DemoFeature />
          </v-carousel-item>
          <v-carousel-item>
            <DeployingComposableRss_DemoFeature />
          </v-carousel-item>
          <v-carousel-item>
            <ComposableRssCode_DemoFeature />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script>
import CreateAndServeFeeds_DemoFeature from "./create-and-serve-feeds/CreateAndServeFeeds_DemoFeature.vue";
import OrganizeAndPublishContent_DemoFeature from "./organize-and-publish-content/OrganizeAndPublishContent_DemoFeature.vue";
import ManageFeedAuth_DemoFeature from "./manage-feed-auth/ManageFeedAuth_DemoFeature.vue";
// import CustomizeContent_DemoFeature from './CustomizeContent_DemoFeature.vue';
// import PublishITunes_DemoFeature from './PublishITunes_DemoFeature.vue';
// import PublishMediaRss_DemoFeature from './PublishMediaRss_DemoFeature.vue';
// import MultiUser_DemoFeature from './MultiUser_DemoFeature.vue';
// import FreeSoftware_DemoFeature from './FreeSoftware_DemoFeature.vue';
// import OpenApiV3_DemoFeature from './OpenApiV3_DemoFeature.vue';
import AboutComposableRss_DemoFeature from "./AboutComposableRss_DemoFeature.vue";
import DeployingComposableRss_DemoFeature from "./DeployingComposableRss_DemoFeature.vue";
import ComposableRssCode_DemoFeature from "./ComposableRssCode_DemoFeature.vue";

export default {
  name: "DemoPanel",
  components: {
    CreateAndServeFeeds_DemoFeature,
    OrganizeAndPublishContent_DemoFeature,
    ManageFeedAuth_DemoFeature,
    // CustomizeContent_DemoFeature,
    // PublishITunes_DemoFeature,
    // PublishMediaRss_DemoFeature,
    // MultiUser_DemoFeature,
    // FreeSoftware_DemoFeature,
    // OpenApiV3_DemoFeature,
    AboutComposableRss_DemoFeature,
    DeployingComposableRss_DemoFeature,
    ComposableRssCode_DemoFeature,
  },
  computed: {
    isDark: function () {
      return this.$vuetify.theme.name === "dark";
    },
  },
};
</script>
