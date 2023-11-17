<template>
  <DemoFeature :title="$t('aboutComposableRss')">
    <template #body>
      <!-- publish iTunes podcasts -->
      <DemoFeature :title="$t('publishITunes')" class="mt-4" elevation="12" :details="[
        $t('publishITunes_detail1')
      ]" />
      <!-- publish MediaRSS groups and content -->
      <DemoFeature :title="$t('publishMediaRss')" class="mt-4" elevation="12" :details="[
        $t('publishMediaRss_detail1')
      ]" />
      <!-- support organizational needs -->
      <DemoFeature :title="$t('supportOrganizationalNeeds')" class="mt-4" elevation="12" :details="[
        $t('supportOrganizationalNeeds_detail1'),
        $t('supportOrganizationalNeeds_detail2')
      ]" />
      <!-- free as in beer -->
      <DemoFeature :title="$t('freeAsInBeer')" class="mt-4" elevation="12" :details="[
        $t('freeAsInBeer_detail1'),
        $t('freeAsInBeer_detail2'),
        $t('freeAsInBeer_detail3')
      ]" />
      <!-- self-hostable / pre-built containers -->
      <DemoFeature :title="$t('selfHostable')" class="mt-4" elevation="12" :details="[
        $t('selfHostable_detail1'),
        $t('selfHostable_detail2'),
      ]" />
      <!-- OpenAPIv3 -->
      <DemoFeature :title="$t('openApiV3')" class="mt-4 mb-16" elevation="12" :details="[
        $t('openApiV3_detail1')
      ]" />
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
  