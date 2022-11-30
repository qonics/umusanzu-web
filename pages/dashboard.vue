<template>
  <NuxtLayout name="main">
    <div class="bg-gradient row bg-white q-pa-lg bordered-box" style="">
      <div class="col column q-pa-sm q-pl-lg" style="border-right: 3px solid rgb(230, 230, 230)">
        <label class="text-blue-grey text-bold"
          ><q-avatar color="teal" size="30px">T</q-avatar> Total payments</label
        >
        <label class="text-h4 q-mt-sm q-ml-xl"><span class="text-blue-grey">RF</span> 284,522</label>
      </div>
      <div class="col column q-pa-sm q-pl-lg" style="border-right: 3px solid rgb(230, 230, 230)">
        <label class="text-blue-grey text-bold"
          ><q-avatar color="blue" size="30px">H</q-avatar> Household</label
        >
        <label class="text-h4 q-mt-sm q-ml-xl">285</label>
      </div>
      <div class="col column q-pa-sm q-pl-lg" style="border-right: 3px solid rgb(230, 230, 230)">
        <label class="text-blue-grey text-bold"
          ><q-avatar color="cyan" text-color="white" size="30px">S</q-avatar> Sectors</label
        >
        <label class="text-h4 q-mt-sm q-ml-xl">12</label>
      </div>
      <div class="col column q-pa-sm q-pl-lg">
        <label class="text-blue-grey text-bold"
          ><q-avatar color="deep-orange-8" text-color="white" size="30px">P</q-avatar> Pending payments</label
        >
        <label class="text-h4 q-mt-sm q-ml-xl"><span class="text-blue-grey">RF</span> 284,522</label>
      </div>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup></script>
