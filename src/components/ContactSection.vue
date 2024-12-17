<template>
  <v-container class="my-10">
    <h2 class="text-h4 font-weight-bold text-center mb-6">Get In Touch</h2>
    <v-form>
      <v-text-field label="Your Name"></v-text-field>
      <v-text-field label="Your Email"></v-text-field>
      <v-textarea label="Message"></v-textarea>
      <v-btn color="primary">Send Message</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>
