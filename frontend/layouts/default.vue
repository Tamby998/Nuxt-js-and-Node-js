<template>
  <div>
    <template v-if="!isAuthenticated">
      <layouts-header />
      <div class="container">
        <br />
        <Nuxt />
      </div>
      <layouts-footer />
    </template>
    <template v-else>
      <layouts-header />
      <div class="container">
        <br />
        <Nuxt />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css");
</style>
