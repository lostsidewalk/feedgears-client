<template>
  <!-- free as in beer -->
  <DemoFeature
    :title="$t('freeAsInBeer')"
    elevation="12"
    :details="[
      $t('freeAsInBeer_detail1'),
      $t('freeAsInBeer_detail2'),
      $t('freeAsInBeer_detail3'),
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
