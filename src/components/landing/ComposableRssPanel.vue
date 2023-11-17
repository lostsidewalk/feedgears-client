<template>
    <div>
        <ComposableRssBannerPanel />
        <v-divider class="mt-8 mb-8" />
        <ComposableRssDemoPanel />
    </div>
</template>

<script>
import ComposableRssBannerPanel from './composable-rss/ComposableRssBannerPanel.vue';
import ComposableRssDemoPanel from './composable-rss/ComposableRssDemoPanel.vue';

export default {
    components: {
        ComposableRssBannerPanel,
        ComposableRssDemoPanel
    }
}
</script>
