<template>
  <DemoFeature
    :title="$t('organizeAndPublishContent')"
    :details="[
      $t('organizeAndPublishContent_detail1'),
      $t('organizeAndPublishContent_detail2')
    ]"
  >
    <template #body>
      <div class="organize-and-publish-content">
        <!-- API call -->
        <div class="bold">
          {{ $t('organizeAndPublishContent_apiCall1') }}
        </div>
        <pre>curl --request POST \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  --data '[{ "postTitle": { "value": "spiders article" }, "postDesc": { "value": "spiders article description" } }]' \
  http://<span class="green">api.yourdomain.com</span>/v1/queues/spiders/posts</pre>
        <!-- feed payload -->
        <div class="bold">
          {{ $t('organizeAndPublishContent_apiCall2') }}
        </div>
        <AddContentFeedPayload />
        <!-- follow-on API calls -->
        <div class="bold">
          {{ $t('organizeAndPublishContent_apiCall3') }}
        </div>
      </div>
    </template>
  </DemoFeature>
</template>
  
<script>
import DemoFeature from '../../DemoFeature.vue';
import AddContentFeedPayload from './AddContentFeedPayload.vue';

export default {
  components: {
    DemoFeature,
    AddContentFeedPayload,
  },
}
</script>

<style scoped>
.organize-and-publish-content {
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
