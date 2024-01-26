<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {},
})
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-spacer />
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">about</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer>
      Copyright Nasr Galal
    </v-footer>
  </v-app>
</template>

<style scoped>

</style>
