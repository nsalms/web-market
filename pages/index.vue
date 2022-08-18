<template>
  <div class="container">

    <TheHeader></TheHeader>

    <TheHomeLayout></TheHomeLayout>

  </div>
</template>

<script>

import TheHeader from "../components/TheHeader.vue";
import TheHomeLayout from "../components/TheHomeLayout.vue";

export default {
  name: "IndexPage",
  components: { TheHeader, TheHomeLayout },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 86em;
  padding-right: 1rem;
  padding-left: 1rem;
  box-sizing: content-box;

  @media only screen and (min-width: 86em) {
    width: 86em;
  }
}
</style>