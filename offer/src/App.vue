<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";

export default defineComponent({
  components: { Header },
});
</script>
<style></style>
