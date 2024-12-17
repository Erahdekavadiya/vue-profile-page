<template>
  <v-container class="my-10">
    <h2 class="text-h4 font-weight-bold text-center mb-6 text-neon">Portfolio</h2>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="project in projects" :key="project.title">
        <div class="glass-card pa-4">
          <v-img :src="project.image" height="200px" class="mb-4 rounded-lg"></v-img>
          <h3 class="text-subtitle-1 text-center">{{ project.title }}</h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: "Game UI Project", image: "https://via.placeholder.com/400" },
        { title: "Dashboard Design", image: "https://via.placeholder.com/400" },
        { title: "Animation Demo", image: "https://via.placeholder.com/400" },
        { title: "Game UI Project", image: "https://via.placeholder.com/400" },
        { title: "Dashboard Design", image: "https://via.placeholder.com/400" },
        { title: "Animation Demo", image: "https://via.placeholder.com/400" },
      ],
    };
  },
};
</script>
