<template>
  <NuxtLayout name="main">
    <body
      data-sidebar="dark"
      data-layout-mode="light"
      cz-shortcut-listen="true"
      style=""
      class=""
    >
    <v-card
      class="mx-auto"
      width="400"
      prepend-icon="mdi-home"
      style="margin-top: 300px;"
    >
      <template v-slot:title>
        Hello from Vuetify!
      </template>
      <v-card-text>
        When you see this inside a card, it worked!
      </v-card-text>
    </v-card>

      <q-file outlined v-model="model">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="300px"
            class="bg-primary text-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-icon name="style" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon name="live_tv" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-icon name="layers" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-icon name="terrain" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </body>
  </NuxtLayout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("style"),
      model: ref(null),
      lorem:
        "Lorem error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>
