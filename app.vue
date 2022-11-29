<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script>
export default defineComponent({
  setup() {
    const route = useRoute();
    const title = route.meta.title === undefined ? '' : `${route.meta.title}`
    useHead({
      title: `UMUSANZU - ${title}`
    });
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
    // this.$once("hook:beforeDestroy", () => {
    //   window.removeEventListener("beforeunload", this.preventNav);
    // });
  },
});
</script>