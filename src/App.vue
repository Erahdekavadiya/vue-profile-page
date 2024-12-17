<template>
  <v-app>
    <!-- Custom Mouse Cursor -->
    <div class="custom-cursor" ref="cursor"></div>

    <!-- Animated Hero Section -->
    <HeroSection />

    <!-- Glassmorphic Sections -->
    <AboutSection />
    <SkillSection />
    <PortfolioSection />
    <ContactSection />
  </v-app>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillSection from "./components/SkillSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    AboutSection,
    PortfolioSection,
    SkillSection,
    ContactSection,
  },
  mounted() {
    // Custom Cursor Movement
    const cursor = this.$refs.cursor;
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
