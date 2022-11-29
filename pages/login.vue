<template>
  <div class="row justify-center" style="height: 100vh">
    <div class="col hidden-sm hidden-xs justify-center" style="padding: 15px">
      <div class="q-ma-lg">
        <q-img src="/img/250_rwanda.png" style="width: 40px; margin-top: -13px" />
        <label style="font-size: 20pt">UMUSANZU Digital</label>
      </div>
      <q-img class="center-y" src="/img/login-vector.jpg" style="" />
    </div>
    <div class="col" style="position: relative">
      <div class="center q-pa-sm" style="width: 100%; max-width: 500px;">
        <div v-if="!isForget">
          <label class="text-h3">Welcome Back <span style="font-size:30pt">&#128525;</span></label>
          <p class="text-body2 q-mt-md">
            To manage umusanzu dital please login with your username and password
          </p>
        </div>
        <div v-else>
          <label class="text-h3">Forget Password <span style="font-size:30pt">&#128526;</span></label>
          <p class="text-body2 q-mt-md">
            Don't worry you can reset your password by entering your phone
          </p>
        </div>
        <q-form
          @submit="login"
          @reset="loginReset"
          class="q-gutter-md q-mt-md"
          v-if="!isForget"
        >
          <div class="mb-3">
            <q-input
              filled
              v-model="username"
              label="Your username *"
              hint="Enter your username"
              lazy-rules
              :rules="[(val) => (val && val.length > 3) || 'Username is required']"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
              <template v-if="username != null && username.length > 3" v-slot:append>
                <q-chip color="green">
                  <q-icon name="check" />
                </q-chip>
              </template>
            </q-input>
          </div>
          <div class="mb-3">
            <q-input
              filled
              v-model="password"
              label="Your password *"
              :type="isPwd ? 'password' : 'text'"
              hint="Enter your password"
              lazy-rules
              :rules="[(val) => (val && val.length > 5) || 'Password is required']"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>

              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
                <q-chip color="green" v-if="password != null && password.length > 5">
                  <q-icon name="check" />
                </q-chip>
              </template>
            </q-input>
          </div>
          <div class="row justify-between">
            <div class="col">
              <q-checkbox
                left-label
                v-model="remember_me"
                label="Remember me"
                checked-icon="task_alt"
                unchecked-icon="highlight_off"
              />
            </div>
            <div class="col-auto">
              <q-btn
                @click="isForget = !isForget"
                flat
                color="primary"
                label="Forget Password?"
              />
            </div>
          </div>
          <div class="col-auto">
            <q-btn style="width: 100%" color="teal" glossy label="Log In" type="submit" />
          </div>
        </q-form>

        <q-form
          @submit="forgetPassword"
          @reset="forgetReset"
          class="q-gutter-md q-mt-md"
          v-else
        >
          <div class="mb-3">
            <q-input
              filled
              v-model="phone"
              label="Your phone number *"
              hint="Enter your phone"
              lazy-rules
              :rules="[(val) => (val && val.length == 10) || 'Phone number is not correct']"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
              <template v-if="phone != null && phone.length == 10" v-slot:append>
                <q-chip color="green">
                  <q-icon name="check" />
                </q-chip>
              </template>
            </q-input>
          </div>
         
          <div class="row justify-between">
            <q-btn class="col-5" rounded color="teal" glossy label="Reset password" type="submit" />
            <q-btn class="col-5" rounded color="white" text-color="primary" glossy label="Back to login" @click="isForget = !isForget" />
          </div>
        </q-form>
      </div>
    </div>
    <label style="position: absolute; bottom: 10px"
      >IMENA SOFTEK LTD &copy;{{ new Date().getFullYear() }}</label
    >
  </div>
</template>
<script lang="ts" setup>
import { useQuasar } from "quasar";
definePageMeta({
  layout: false,
  title: "Login",
});
const $q = useQuasar();
const username = ref(null);
const phone = ref(null);
const remember_me = ref(false);
const isPwd = ref(true);
const isForget = ref(false);
const password = ref(null);
const errorMessages = ref("");
function login() {
    $q.notify({
    color: "red-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Username or passowrd are not correct, try again",
  });
}
function forgetPassword() {
  $q.notify({
    color: "red-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Password reset failed, We are not able to send SMS. \nSorry for the inconvenience, please try again later",
  });
}
function loginReset() {
  username.value = null;
  password.value = null;
}
function forgetReset() {
  username.value = null;
  password.value = null;
}
</script>
