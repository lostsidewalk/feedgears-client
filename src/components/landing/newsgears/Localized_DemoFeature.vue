<template>
  <!-- internationalization/localization -->
  <DemoFeature
    :title="$t('localized')"
    elevation="12"
    :details="[$t('localized_detail1')]"
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
