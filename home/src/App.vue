<template>
  <div class="container">
    <Header />
    <div class="font-20 pad-20">
      <div>Home App Landing Page</div>
      <a href="http://localhost:8081/" target="_blank"
        >Click here to redirect to Offer app</a
      >
    </div>
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "offer/Header";
import Dashboard from "offer/Dashboard";

export default defineComponent({
  components: { Header, Dashboard },
  methods: {
    openOffer() {
      window.open("http://localhost:8081/", "_blank");
    },
  },
});
</script>
<style>
.font-20 {
  font-size: 20px;
}
.pad-20 {
  padding: 20px;
}
</style>
