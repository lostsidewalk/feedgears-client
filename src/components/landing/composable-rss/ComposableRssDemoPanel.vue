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
          <!-- publish iTunes podcasts -->
          <v-carousel-item>
            <PublishITunes_DemoFeature />
          </v-carousel-item>
          <!-- publish MediaRSS groups and content -->
          <v-carousel-item>
            <PublishMediaRss_DemoFeature />
          </v-carousel-item>
          <!-- support organizational needs -->
          <v-carousel-item>
            <SupportOrganizationalNeeds_DemoFeature />
          </v-carousel-item>
          <!-- free as in beer -->
          <v-carousel-item>
            <Free_DemoFeature />
          </v-carousel-item>
          <!-- OpenAPIv3 -->
          <v-carousel-item>
            <OpenAPIv3_DemoFeature />
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
import DeployingComposableRss_DemoFeature from "./DeployingComposableRss_DemoFeature.vue";
import ComposableRssCode_DemoFeature from "./ComposableRssCode_DemoFeature.vue";
import PublishITunes_DemoFeature from "./PublishITunes_DemoFeature.vue";
import PublishMediaRss_DemoFeature from "./PublishMediaRss_DemoFeature.vue";
import SupportOrganizationalNeeds_DemoFeature from "./SupportOrganizationalNeeds_DemoFeature.vue";
import Free_DemoFeature from "./Free_DemoFeature.vue";
import OpenAPIv3_DemoFeature from "./OpenAPIv3_DemoFeature.vue";

export default {
  name: "DemoPanel",
  components: {
    CreateAndServeFeeds_DemoFeature,
    OrganizeAndPublishContent_DemoFeature,
    ManageFeedAuth_DemoFeature,
    DeployingComposableRss_DemoFeature,
    ComposableRssCode_DemoFeature,
    PublishITunes_DemoFeature,
    PublishMediaRss_DemoFeature,
    SupportOrganizationalNeeds_DemoFeature,
    Free_DemoFeature,
    OpenAPIv3_DemoFeature,
  },
  computed: {
    isDark: function () {
      return this.$vuetify.theme.name === "dark";
    },
  },
};
</script>
