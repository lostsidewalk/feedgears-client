<template>
  <!-- secure -->
  <DemoFeature
    :title="$t('secure')"
    elevation="12"
    :details="[
      $t('secure_detail1'),
      $t('secure_detail2'),
      $t('secure_detail3'),
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
