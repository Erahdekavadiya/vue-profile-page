import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "./assets/global.css";
import "@mdi/font/css/materialdesignicons.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark', // Set default theme to dark
    themes: {
      dark: {
        background: '#121212', // Dark background color
        primary: '#0f9d58', // Example of a primary color in dark theme
        secondary: '#8e8e8e', // Secondary color
        accent: '#e8e8e8', // Accent color
        surface: '#333333', // Surface color for cards, buttons, etc.
        error: '#f44336', // Error color
      },
      light: {
        background: '#ffffff', // Light background color
        primary: '#1d9bf0', // Primary color in light theme
        secondary: '#eeeeee', // Secondary color
      }
    }
  }
});
createApp(App).use(vuetify).mount("#app");
