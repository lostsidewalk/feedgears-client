<template>
  <DemoFeature
    :title="$t('manageFeedAuth')"
    :details="[$t('manageFeedAuth_detail1'), $t('manageFeedAuth_detail2')]"
  >
    <template #body>
      <div class="manage-feed-auth">
        <!-- API call -->
        <div class="bold">
          {{ $t("manageFeedAuth_apiCall1") }}
        </div>
        <div class="api-request-container">
          <code>curl --request PUT \<br>-H "Content-Type: application/json" \<br>-H "X-ComposableRSS-API-Key: ${API_KEY}" \<br>-H "X-ComposableRSS-API-Secret: ${API_SECRET}" \<br>--data '{ "isRequired": "true" }' \<br>http://<span class="green">api.yourdomain.com</span>/v1/queues/spiders/auth</code>
        </div>
        <!-- API call -->
        <div class="bold">
          {{ $t("manageFeedAuth_apiCall2") }}
        </div>
        <div class="api-request-container">
          <code>curl --request POST \<br>-H "Content-Type: application/json" \<br>-H "X-ComposableRSS-API-Key: ${API_KEY}" \<br>-H "X-ComposableRSS-API-Secret: ${API_SECRET}" \<br>--data '{ "basicUsername": "churromaiz", "basicPassword": "CHuRr0" }' \<br>http://<span class="green">api.yourdomain.com</span>/v1/queues/spiders/credentials</code>
        </div>
        <div class="bold">
          {{ $t("manageFeedAuth_apiCall3") }}
        </div>
        <div class="api-request-container">
          <code>curl -u churromaiz:CHuRr0 http://localhost:8081/feed/atom/me/spiders</code>
        </div>
      </div>
    </template>
  </DemoFeature>
</template>

<script>
import DemoFeature from "../../DemoFeature.vue";

export default {
  components: {
    DemoFeature,
  },
};
</script>

<style scoped>
.manage-feed-auth {
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
