<template>
    <div>
        <NewsgearsBannerPanel />
        <v-divider class="mt-8 mb-8" />
        <NewsgearsDemoPanel />
    </div>
</template>

<script>
import NewsgearsBannerPanel from './newsgears/NewsgearsBannerPanel.vue';
import NewsgearsDemoPanel from './newsgears/NewsgearsDemoPanel.vue';

export default {
    components: {
        NewsgearsBannerPanel,
        NewsgearsDemoPanel,
    }
}
</script>
