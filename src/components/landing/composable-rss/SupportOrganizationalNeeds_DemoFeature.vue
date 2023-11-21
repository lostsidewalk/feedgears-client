<template>
  <!-- support organizational needs -->
  <DemoFeature
    :title="$t('supportOrganizationalNeeds')"
    class="mt-4"
    elevation="12"
    :details="[
      $t('supportOrganizationalNeeds_detail1'),
      $t('supportOrganizationalNeeds_detail2'),
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
