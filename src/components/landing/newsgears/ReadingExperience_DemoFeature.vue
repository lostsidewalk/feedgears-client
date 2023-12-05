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
      <v-sheet class="mb-16 d-flex flex-column flex-gap-1">
        <v-card
          elevation="12"
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
      </v-sheet>
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

<style scoped>
.flex-gap-1 {
  gap: 1rem;
}
</style>
