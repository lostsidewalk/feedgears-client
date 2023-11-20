<template>
  <DemoFeature
    :title="$t('newsgearsCode')"
    :details="[$t('newsgearsCode_detail1')]"
  >
    <template #body>
      <div class="mb-16">
        <DemoFeature
          class="mt-4"
          elevation="12"
          :title="''"
          :details="[$t('newsgearsCode_detail3')]"
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
        <DemoFeature
          class="mt-4"
          :title="''"
          :details="[$t('newsgearsCode_detail2')]"
          elevation="12"
        >
          <template #body>
            <table class="newsgears-component-table">
              <thead>
                <tr>
                  <th>Artifact</th>
                  <th>Version</th>
                  <th>Maven</th>
                  <th>Repo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="project in projects"
                  :key="project"
                >
                  <td class="left">
                    <span class="no-wrap">{{ project.name }}</span><br>
                    {{ project.description }}
                  </td>
                  <td class="no-wrap">
                    {{ project.version }}
                  </td>
                  <td class="center">
                    <a
                      :href="getArtifactLink(project)"
                      target="_blank"
                      :title="getArtifactLink(project)"
                    ><i class="fa fa-link" /></a>
                  </td>
                  <td class="center">
                    <a
                      :href="getRepoLink(project)"
                      target="_blank"
                      :title="getRepoLink(project)"
                    ><i class="fa fa-github" /></a>
                  </td>
                  <td align="right">
                    <a :href="'https://github.com/lostsidewalk/' + project.name + '/issues'">
                      <img
                        :src="'https://img.shields.io/github/issues/lostsidewalk/' + project.name + '.svg?style=for-the-shield'"
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
            projects: [
                {
                    name: "newsgears-model",
                    version: "0.5.5",
                    description: "Basic Java data structures used throughout the Newsgears platform",
                },
                {
                    name: "newsgears-data",
                    version: "0.5.12",
                    description: "Java classes used by Newsgears applications to store and retrieve model data in a JDBC data source",
                },
                {
                    name: "newsgears-publisher",
                    version: "0.5.10",
                    description: "Component that runs available publishers on demand to produce feeds from staging post entities",
                },
                {
                    name: "newsgears-rss-publisher",
                    version: "0.5.10",
                    description: "Publisher implementation that can produce RSS/ATOM artifacts from staging post entities",
                },
                {
                    name: "newsgears-json-publisher",
                    version: "0.5.9",
                    description: "Publisher implementation that can produce JSON artifacts from staging post entities",
                },
                {
                    name: "newsgears-importer",
                    version: "0.5.9",
                    description: "Component that runs available importers on demand to aggregate articles from upstream feeds",
                },
                {
                    name: "newsgears-rss-importer",
                    version: "0.5.11",
                    description: "Importer implementation that can import articles from RSS/ATOM feeds",
                },
                {
                    name: "newsgears-cataloger",
                    version: "0.5.9",
                    description: "Component that runs periodically to track the state/availability of upstream feeds",
                },
            ],
            images: [
                {
                    name: "newsgears-app",
                    description: "Newsgears Application",
                },
                {
                    name: "newsgears-api",
                    description: "Newsrears API Server",
                },
                {
                    name: "newsgears-engine",
                    description: "Newsgears Engine Server",
                },
                {
                    name: "newsgears-broker",
                    description: "Newsgears Broker Server",
                },
                {
                    name: "newsgears-client",
                    description: "Newsears Web Client",
                },
            ],
        }
    },
    methods: {
        getArtifactLink(project) {
            return "https://repo1.maven.org/maven2/com/lostsidewalk/newsgears/" + project.name + "/" + project.version;
        },
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
