<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {}
})
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-spacer />
      <v-btn to="/">Home</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
