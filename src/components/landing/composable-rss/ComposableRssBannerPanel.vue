<template>
  <v-container>
    <v-row>
      <!-- ComposableRSS -->
      <v-col
        cols="12"
        align="center"
      >
        <h1 class="logotext">
          ComposableRSS
        </h1>
      </v-col>
      <!-- (logo) -->
      <v-col
        cols="12"
        align="center"
      >
        <i class="fa fa-rss fa-5x" />
      </v-col>
      <!-- (subtitle 1) -->
      <v-col
        cols="12"
        align="center"
      >
        <h2 class="logosubtext fancy">
          {{ $t('whatIsComposableRss') }}
        </h2>
      </v-col>
      <!-- (subtitle 2) -->
      <v-col
        cols="12"
        align="center"
      >
        <h2 class="logosubduedtext fancy">
          {{ $t('whyIsNewsgearsFree') }}
        </h2>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mt-8"
    >
      <v-col
        cols="12"
        sm="10"
      >
        <h4 class="fancy">
          {{ $t('whatIsComposableRssDetails') }}
        </h4>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mt-8"
    >
      <v-col
        cols="12"
        sm="10"
      >
        <h4 class="fancy">
          {{ $t('youCanDeployTheEntireStack') }}
        </h4>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mt-8"
    >
      <v-col
        cols="12"
        sm="10"
      >
        <ComposableRssOnGithubButton />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
      >
        <SupportUsOnPatreonButton />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ComposableRssOnGithubButton from './ComposableRssOnGithubButton.vue';
import SupportUsOnPatreonButton from '../SupportUsOnPatreonButton.vue';

export default {
  name: "BannerPanel",
  components: {
    ComposableRssOnGithubButton,
    SupportUsOnPatreonButton,
  },
}
</script>

<style scoped>
.logotext {
  font-family: 'Russo One';
}

.logosubtext {
  font-size: 3.0rem;
}

.logosubduedtext {
  font-size: 2.0rem;
}

.fancy {
  font-family: 'Merriweather' !important;
  font-weight: bold;
  
}
</style>
