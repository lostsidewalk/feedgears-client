<template>
  <!-- OpenAPIv3 -->
  <DemoFeature
    :title="$t('openApiV3')"
    class="mt-4 mb-16"
    elevation="12"
    :details="[$t('openApiV3_detail1')]"
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
