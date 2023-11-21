<template>
  <!-- mobile optimized -->
  <DemoFeature
    :title="$t('mobileOptimized')"
    elevation="12"
    :details="[
      $t('mobileOptimized_detail1'),
      $t('mobileOptimized_detail2'),
      $t('mobileOptimized_detail3'),
    ]"
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
