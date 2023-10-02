<template>
  <v-container>
    <v-row>
      <!-- FeedGears RSS -->
      <v-col
        cols="12"
        align="center"
      >
        <h1 class="logotext">
          FeedGears RSS
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
          {{ $t('whatIsFeedGears') }}
        </h2>
      </v-col>
      <!-- (subtitle 2) -->
      <v-col
        cols="12"
        align="center"
      >
        <h2 class="logosubduedtext fancy">
          {{ $t('whyIsFeedGearsFree') }} 
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
        <VisitUsOnGithubButton />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
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
import VisitUsOnGithubButton from '@/components/layout/VisitUsOnGithubButton.vue';
import SupportUsOnPatreonButton from '@/components/layout/SupportUsOnPatreonButton.vue';

export default {
  name: "BannerPanel",
  components: { 
    VisitUsOnGithubButton,
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

@media(max-width: 320px) {
  .logosubtext {
    font-size: 2.0rem;
  }

  .logosubduedtext {
    font-size: 1.0rem;
  }
}

@media(max-width: 280px) {
  .logosubtext {
    font-size: 1.5rem;
  }

  .logosubduedtext {
    font-size: 0.5rem;
  }
}

.fancy {
  font-family: 'Merriweather' !important;
  font-weight: bold;
}
</style>
