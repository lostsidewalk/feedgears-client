<template>
  <div class="tab-container">
    <div class="tab-labels">
      <div
        class="tab-label p-2"
        :class="{ 'tab-label-selected': selectedTab === 'RSS' }"
        @click="selectedTab = 'RSS'"
      >
        RSS
      </div>
      <div
        class="tab-label p-2"
        :class="{ 'tab-label-selected': selectedTab === 'ATOM' }"
        @click="selectedTab = 'ATOM'"
      >
        ATOM
      </div>
      <div
        class="tab-label p-2"
        :class="{ 'tab-label-selected': selectedTab === 'JSON' }"
        @click="selectedTab = 'JSON'"
      >
        JSON
      </div>
    </div>
    <slot
      v-if="selectedTab === 'RSS'"
      name="rss20"
    />
    <slot
      v-if="selectedTab === 'ATOM'"
      name="atom10"
    />
    <slot
      v-if="selectedTab === 'JSON'"
      name="json"
    />
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTab: 'RSS',
        }
    }
}
</script>

<style scoped>
.tab-container {
    display: flex;
    flex-direction: column;
}

.tab-labels {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 1rem;
}

.tab-label {
    text-align: right;
    color: grey;
    font-family: sans-serif;
    border-bottom: 0;
    user-select: none;
}

.tab-label-selected {
    font-weight: bold;
}

.tab-label:hover,
.tab-label:focus-visible {
    cursor: pointer;
    text-decoration: underline;
}
</style>