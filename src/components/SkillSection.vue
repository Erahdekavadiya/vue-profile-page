<template>
    <!-- Header Section -->
    <v-container>
      <v-row class="align-center mt-10">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold text-center mb-6">My Skills</h2>
        </v-col>
      </v-row>
      <v-row class="align-center mb-10">
        <v-col v-for="(skill, index) in skills" :key="index" cols="12" md="4">
          <v-card class="pa-4 animated-bg">
            <v-card-title>{{ skill.name }}</v-card-title>
            <v-slider
              v-model="skill.level"
              :max="100"
              :step="1"
              thumb-label
              tick-size="4"
              track-color="#007bb5"
              thumb-color="#007bb5"
              class="skill-slider"
              :style="{ animation: 'fadeIn 2s ease-out' }"
              :label="skill.level+'%'"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SkillSection",
  data() {
    return {
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Vue.js", level: 90 },
        { name: "CSS", level: 75 },
        { name: "HTML", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Git", level: 65 }
      ]
    };
  }
};
</script>

<style scoped>

/* Slider Animation */
.skill-slider {
  margin-top: 20px;
  animation: slideIn 2s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
