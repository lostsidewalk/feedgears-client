<template>
  <DemoFeature
    :title="$t('deployingComposableRss')"
    :details="[
      $t('deployingComposableRss_detail1'),
      $t('deployingComposableRss_detail2'),
    ]"
  >
    <template #body>
      <div class="mb-16">
        <DemoFeature
          elevation="12"
          :title="''"
          :details="[$t('deployingComposableRss_detail4')]"
        >
          <template #body>
            <table class="newsgears-component-table">
              <thead>
                <tr>
                  <th>Filename</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody
                v-for="composeFile in composeFiles"
                :key="composeFile"
              >
                <tr>
                  <td class="left no-wrap">
                    {{ composeFile.name }}
                  </td>
                  <td class="left">
                    {{ composeFile.description }}
                  </td>
                  <td class="center">
                    <a
                      :href="composeFile.link"
                      target="_blank"
                      :title="composeFile.link"
                    ><i class="fa fa-link" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </DemoFeature>
        <DemoFeature
          class="mt-4"
          elevation="12"
          :title="''"
          :details="[$t('deployingComposableRss_detail3')]"
        >
          <template #body>
            <table class="newsgears-component-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Tag</th>
                  <th>docker.io</th>
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
                  <td class="left no-wrap">
                    {{ image.tag }}
                  </td>
                  <td class="center">
                    <a
                      :href="getImageLink(image)"
                      target="_blank"
                      :title="getImageLink(image)"
                    ><i class="fa fa-link" /></a>
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
import DemoFeature from "../DemoFeature.vue";

export default {
  components: {
    DemoFeature,
  },
  data() {
    return {
      composeFiles: [
        {
          name: "docker-compose.single-user.yml.sample",
          description: this.$t("deployingComposableRss_detail5"),
          link: "https://raw.githubusercontent.com/lostsidewalk/composable-rss-app/main/docker-compose.single-user.yml.sample",
        },
        {
          name: "docker-compose.single-user.debug.yml.sample",
          description: this.$t("deployingComposableRss_detail6"),
          link: "https://raw.githubusercontent.com/lostsidewalk/composable-rss-app/main/docker-compose.single-user.debug.yml.sample",
        },
        {
          name: "docker-compose.multi-user.yml.sample",
          description: this.$t("deployingComposableRss_detail7"),
          link: "https://raw.githubusercontent.com/lostsidewalk/composable-rss-app/main/docker-compose.multi-user.yml.sample",
        },
        {
          name: "docker-compose.multi-user.debug.yml.sample",
          description: this.$t("deployingComposableRss_detail8"),
          link: "https://raw.githubusercontent.com/lostsidewalk/composable-rss-app/main/docker-compose.single-user.yml.sample",
        },
      ],
      images: [
        {
          name: "composable-rss-api",
          tag: "latest-debug",
          description: "ComposableRSS API Server (debug build)",
        },
        {
          name: "composable-rss-engine",
          tag: "latest-debug",
          description: "ComposableRSS Engine Server (debug build)",
        },
        {
          name: "composable-rss-feed",
          tag: "latest-debug",
          description: "ComposableRSS Feed Server (debug build)",
        },
        {
          name: "composable-rss-client",
          tag: "latest-local",
          description: "ComposableRSS Web Client",
        },
      ],
    };
  },
  methods: {
    getImageLink(image) {
      return (
        "https://hub.docker.com/repository/docker/lostsidewalk/" +
        image.name +
        "/general"
      );
    },
  },
};
</script>

<style scoped>
section {
  margin: 1rem;
}

.newsgears-component-table {
  width: 100%;
  box-shadow: 1px 1px 1px darkslateblue;
}

.newsgears-component-table th {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px 5px 0 0;
  color: rgb(16, 16, 16);
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid white;
}

.newsgears-component-table td {
  border: 1px solid transparent;
  background-color: rgba(16, 16, 16, 0.5);
  padding: 0.5rem;
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
