<template>
  <DemoFeature
    :title="$t('createAndServeFeeds')"
    :details="[
      $t('createAndServeFeeds_detail1'), $t('createAndServeFeeds_detail2')
    ]"
  >
    <template #body>
      <div class="create-and-serve-feeds">
        <div>{{ $t('theBasics') }}</div>
        <div>{{ $t('theBasics_detail1') }}</div>
        <div>{{ $t('theBasics_detail2') }}</div>
        <!-- API call -->
        <div class="bold">
          {{ $t('createAndServeFeeds_apiCall') }}
        </div>
        <div class="api-request-container">
          <code>curl --request POST \<br>-H "Content-Type: application/json" \<br>-H "X-ComposableRSS-API-Key: ${API_KEY}" \<br>-H "X-ComposableRSS-API-Secret: ${API_SECRET}" \<br>--data '{ "ident": "spiders" }' \<br>https://<span class="green">api.yourdomain.com</span>/v1/queues</code>
        </div>
        <!-- feed payload -->
        <div class="bold">
          {{ $t('createAndServeFeeds_payload') }}
        </div>
        <CreateQueueFeedPayload />
        <!-- follow-on API calls -->
        <div>{{ $t('createAndServeFeeds_followOnCalls') }}</div>
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
  contain: inline-size;
}

.green {
  color: lightgreen;
}

.bold {
  font-weight: bold;
}

.api-request-container {
  text-wrap: nowrap;
  overflow-x: scroll;
}
</style>