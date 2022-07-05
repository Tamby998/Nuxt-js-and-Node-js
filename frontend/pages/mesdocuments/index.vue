<template>
  <div>
    <Mesdocuments />
  </div>
</template>

<script>
import Mesdocuments from '~/components/Mesdocuments/index.vue';
export default {
    middleware: "isAuthenticated",
    components: { Mesdocuments }
}
</script>

<style>

</style>
