<template>
  <DemoFeature
    :title="$t('opmlSupport')"
    :details="[
      $t('opmlSupport_detail1'),
      $t('opmlSupport_detail2'),
    ]"
  >
    <template #body>
      <v-card
        elevation="12"
        class="mb-16"
      >
        <v-card-text>
          <v-img
            src="opml_upload_dark.png"
            :alt="$t('opmlUploadScreenshot')"
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
}
</script>
