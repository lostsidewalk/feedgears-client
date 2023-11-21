<template>
  <!-- publish iTunes podcasts -->
  <DemoFeature
    :title="$t('publishITunes')"
    class="mt-4"
    elevation="12"
    :details="[$t('publishITunes_detail1')]"
  />
</template>

<script>
import DemoFeature from "../DemoFeature.vue";
export default {
  components: {
    DemoFeature,
  },
};
</script>
