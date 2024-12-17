<template>
  <v-container fluid class="animated-bg hero-section fill-height text-center">
    <div class="glass-card pa-6">
      <h1 class="text-h3 font-weight-bold text-neon mb-4">Asgarali Dekavadiya</h1>
      <p class="text-h5 mb-6">Frontend Developer | Vue.js Specialist | Remote Worker</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.text-neon {
  color: #0ff;
  text-shadow: 0 0 5px #000, 0 0 10px #0ff, 0 0 20px #0ff;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
