<template>
  <div class="row">
    <div class="col-auto q-my-lg" style="width: 350px">
      <div class="q-ma-lg">
        <q-img src="/img/250_rwanda.png" style="width: 40px; margin-top: -13px" />
        <label style="font-size: 20pt" class="q-ml-sm">Umd.</label>
      </div>
      <Menu />
    </div>

    <div class="col">
      <div class="row q-my-md">
        <transition appear>
          <q-input
            class="input-srch"
            :borderless="!isSearchActive"
            :rounded="isSearchActive"
            :standout="isSearchActive"
            :dark="isSearchActive"
            v-model="search"
            :placeholder="
              isSearchActive ? 'Search household, entity or any item' : 'Tap to search'
            "
            :style="isSearchActive ? 'width: 600px' : ''"
            @focus="
              () => {
                isSearchActive = true;
              }
            "
            @blur="
              () => {
                isSearchActive = false;
              }
            "
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </transition>
        <q-space />
        <div class="row q-mt-md">
          <q-avatar color="teal">U</q-avatar>
          <div class="column q-ml-md q-mr-xl">
            <div class="col text-bold">SHEMA All Blaise</div>
            <div class="col text-grey">System admin</div>
          </div>
        </div>
      </div>
      <div class="q-mr-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menu from "~~/components/layouts/Menu.vue";
const search = ref(null);
const isSearchActive = ref(false);
</script>
