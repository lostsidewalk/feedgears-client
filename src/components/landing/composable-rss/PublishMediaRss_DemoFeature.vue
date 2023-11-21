<template>
  <!-- publish MediaRSS groups and content -->
  <DemoFeature
    :title="$t('publishMediaRss')"
    class="mt-4"
    elevation="12"
    :details="[$t('publishMediaRss_detail1')]"
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
