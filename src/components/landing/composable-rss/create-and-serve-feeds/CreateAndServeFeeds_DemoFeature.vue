<template>
  <DemoFeature :title="$t('createAndServeFeeds')" :details="[
    $t('createAndServeFeeds_detail1'), $t('createAndServeFeeds_detail2')
  ]">
    <template #body>
      <div class="create-and-serve-feeds">
        <div>{{ $t('theBasics') }}</div>
        <div>{{ $t('theBasics_detail1') }}</div>
        <div>{{ $t('theBasics_detail2') }}</div>
        <!-- API call -->
        <div class="bold">{{ $t('createAndServeFeeds_apiCall') }}</div>
        <pre>curl --request POST \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  --data '{ "ident": "spiders" }' \
  https://<span class="green">api.yourdomain.com</span>/v1/queues</pre>
        <!-- feed payload -->
        <div class="bold">{{ $t('createAndServeFeeds_payload') }}</div>
        <CreateQueueFeedPayload />
        <!-- follow-on API calls -->
        <div>{{ $t('createAndServeFeeds_followOnCalls') }}</div>
        <!-- next step -->
        <div>{{ $t('createAndServeFeeds_next') }}</div>
      </div>
    </template>
  </DemoFeature>
</template>
  
<script>
import DemoFeature from '../../DemoFeature.vue';
import CreateQueueFeedPayload from './CreateQueueFeedPayload.vue';

export default {
  components: {
    DemoFeature,
    CreateQueueFeedPayload
  },
}
</script>

<style scoped>
.create-and-serve-feeds {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
}

.green {
  color: lightgreen;
}

.bold {
  font-weight: bold;
}
</style>