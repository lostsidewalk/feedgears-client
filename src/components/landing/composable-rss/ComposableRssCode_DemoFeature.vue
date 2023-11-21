<template>
  <DemoFeature
    :title="$t('composableRssCode')"
    :details="[$t('composableRssCode_detail1')]"
  >
    <template #body>
      <div class="mb-16">
        <DemoFeature
          class="mt-4"
          elevation="12"
          :title="''"
          :details="[$t('composableRssCode_detail3')]"
        >
          <template #body>
            <table class="newsgears-component-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Github</th>
                  <th />
                </tr>
              </thead>
              <tbody
                v-for="image in images"
                :key="image.name"
              >
                <tr>
                  <td class="left">
                    <span class="no-wrap">{{ image.name }}</span><br>
                    {{ image.description }}
                  </td>
                  <td class="center">
                    <a
                      :href="getRepoLink(image)"
                      target="_blank"
                      :title="getRepoLink(image)"
                    ><i class="fa fa-github" /></a>
                  </td>
                  <td align="right">
                    <a :href="'https://github.com/lostsidewalk/' + image.name + '/issues'">
                      <img
                        :src="'https://img.shields.io/github/issues/lostsidewalk/' + image.name + '.svg?style=for-the-shield'"
                      >
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </DemoFeature>
      </div>
    </template>
  </DemoFeature>
</template>

<script>
import DemoFeature from '../DemoFeature.vue';

export default {
    components: {
        DemoFeature,
    },
    data() {
        return {
            images: [
                {
                    name: "composable-rss-app",
                    description: "ComposableRSS Application",
                },
                {
                    name: "composable-rss-api",
                    description: "ComposableRSS API Server",
                },
                {
                    name: "composable-rss-engine",
                    description: "ComposableRSS Engine Server",
                },
                {
                    name: "Newsgears RSS",
                    description: "Newsgears Feed Server",
                },
                {
                    name: "composable-rss-client",
                    description: "ComposableRSS Web Client",
                },
            ],
        }
    },
    methods: {
        getRepoLink(project) {
            return "https://www.github.com/lostsidewalk/" + project.name;
        },
    },

}
</script>

<style scoped>
.newsgears-component-table {
    width: 100%;
    box-shadow: 1px 1px 1px darkslateblue;
}

.newsgears-component-table th {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px 5px 0 0;
    color: rgb(16, 16, 16);
    padding: .5rem;
    text-align: center;
    border-bottom: 1px solid white;
}

.newsgears-component-table td {
    border: 1px solid transparent;
    background-color: rgba(16, 16, 16, 0.5);
    padding: .5rem;
}

.center {
    text-align: center;
}

.left {
    text-align: left;
}

.no-wrap {
    text-wrap: nowrap;
}
</style>
