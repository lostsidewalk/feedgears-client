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
        <div class="api-request-container">
          <code>curl --request POST \<br>-H "Content-Type: application/json" \<br>-H "X-ComposableRSS-API-Key: ${API_KEY}" \<br>-H "X-ComposableRSS-API-Secret: ${API_SECRET}" \<br>--data '[{ "postTitle": { "value": "spiders article" }, "postDesc": { "value": "spiders article description" } }]' \<br>http://<span class="green">api.yourdomain.com</span>/v1/queues/spiders/posts</code>
        </div>
        <!-- feed payload -->
        <div class="bold">
          {{ $t('organizeAndPublishContent_apiCall2') }}
        </div>
        <AddContentFeedPayload />
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
  overflow-x: auto;
}
</style>
