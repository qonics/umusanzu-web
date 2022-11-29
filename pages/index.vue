<template>
  <div class="row justify-center" style="height: 100vh">
  <div class="center">
  
  <label class="text-h5 text-center">Checking account...</label>
  <br />
<q-spinner-puff
          color="blue"
          size="10em"
          style="margin-left: 30px"
        />
      </div>
        <label style="position: absolute; bottom: 10px"
      >IMENA SOFTEK LTD &copy;{{ new Date().getFullYear() }}</label
    >
      </div>
</template>
<script lang="ts" setup>
const { checkLoginStatus } = useAuth();
const isLoggedIn = ref(false)
definePageMeta({
  layout: false,
  title: "Home",
});
checkLoginStatus()
</script>