<template>
  <DemoFeature :title="$t('manageFeedAuth')" :details="[
    $t('manageFeedAuth_detail1'), $t('manageFeedAuth_detail2')
  ]">
    <template #body>
      <div class="create-and-serve-feeds">
        <!-- API call -->
        <div class="bold">{{ $t('manageFeedAuth_apiCall1') }}</div>
        <pre>curl --request PUT \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  --data '{ "isRequired": "true" }' \
  http://<span class="green">api.yourdomain.com</span>/v1/queues/spiders/auth</pre>
        <!-- API call -->
        <div class="bold">{{ $t('manageFeedAuth_apiCall2') }}</div>
        <pre>curl --request POST \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  --data '{ "basicUsername": "churromaiz", "basicPassword": "CHuRr0" }' \
  http://<span class="green">api.yourdomain.com</span>/v1/queues/spiders/credentials</pre>
        <div class="bold">{{ $t('manageFeedAuth_apiCall3') }}</div>
        <pre>curl -u churromaiz:CHuRr0 http://localhost:8081/feed/atom/me/spiders</pre>
      </div>
    </template>
  </DemoFeature>
</template>
  
<script>
import DemoFeature from '../../DemoFeature.vue';

export default {
  components: {
    DemoFeature,
  },
}
</script>

<style scoped>
.create-and-serve-feeds {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.green {
  color: lightgreen;
}

.bold {
  font-weight: bold;
}
</style>
