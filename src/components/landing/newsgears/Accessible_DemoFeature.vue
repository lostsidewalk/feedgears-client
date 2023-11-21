<template>
  <!-- accessibility / wcag -->
  <DemoFeature
    :title="$t('accessible')"
    elevation="12"
    :details="[$t('accessible_detail1'), $t('accessible_detail2')]"
  />
</template>

<script>
import DemoFeature from '../DemoFeature.vue';

export default {
    components: {
        DemoFeature
    },
}
</script>
