<template>
  <DemoFeature
    :title="$t('readingExperience')"
    :details="[
      $t('readingExperience_detail1'),
      $t('readingExperience_detail2'),
      $t('readingExperience_detail3'),
    ]"
  >
    <template #body>
      <v-card
        elevation="12"
        class="mt-4"
      >
        <v-card-title>
          {{ $t("textArticleScreenshot") }}
        </v-card-title>
        <v-card-text>
          <v-img
            :src="'text_post_' + (isDark ? 'dark' : 'light') + '.png'"
            :alt="$t('textArticleScreenshot')"
          />
        </v-card-text>
      </v-card>
      <v-card
        elevation="12"
        class="mt-4"
      >
        <v-card-title>
          {{ $t("podcastAudioScreenshot") }}
        </v-card-title>
        <v-card-text>
          <v-img
            :src="'podcast_post_' + (isDark ? 'dark' : 'light') + '.png'"
            :alt="$t('podcastAudioScreenshot')"
          />
        </v-card-text>
      </v-card>
      <v-card
        elevation="12"
        class="mt-4"
      >
        <v-card-title>
          {{ $t("youtubeVideoScreenshot") }}
        </v-card-title>
        <v-card-text>
          <v-img
            :src="'youtube_post_' + (isDark ? 'dark' : 'light') + '.png'"
            :alt="$t('youtubeVideoScreenshot')"
          />
        </v-card-text>
      </v-card>
      <v-card
        elevation="12"
        class="mt-4 mb-16"
      >
        <v-card-title>
          {{ $t("imageArticleScreenshot") }}
        </v-card-title>
        <v-card-text>
          <v-img
            :src="'pic_post_' + (isDark ? 'dark' : 'light') + '.png'"
            :alt="$t('imageArticleScreenshot')"
          />
        </v-card-text>
      </v-card>
    </template>
  </DemoFeature>
</template>

<script>
import DemoFeature from "../DemoFeature.vue";

export default {
  components: {
    DemoFeature,
  },
  props: {
    isDark: { type: Boolean, default: false },
  },
};
</script>
