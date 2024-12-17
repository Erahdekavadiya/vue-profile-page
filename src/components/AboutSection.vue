<template>
  <v-container>
    <v-row class="align-center my-10">
      <v-col cols="12" md="6" data-aos="fade-right">
        <h2 class="text-h4 font-weight-bold mb-4">About Me</h2>
        <p class="text-body-1">
          I am a passionate frontend developer specializing in Vue.js, with 8+ years of experience building elegant,
          scalable, and responsive applications. I enjoy solving problems and turning ideas into reality.
        </p>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-left">
        <v-img src="../assets/profile-bg.png" alt="Profile Picture" class="rounded-lg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>
