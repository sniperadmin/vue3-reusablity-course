<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VStat'
})
</script>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: 'total something'
  },
  value: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: 'home'
  },
  color: {
    type: String,
    default: 'indigo'
  },
  bgColor: {
    type: String,
    default: 'indigo'
  },
  isUp: {
    type: Boolean,
    default: true
  },
  percentage: {
    type: [String, Number],
    default: 0
  },
  date: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <v-card rounded="lg">
    <template #title>
      <p data-test="name" class="text-body-1 font-weight-bold text-capitalize">{{ name }}</p>
    </template>
    <template #append>
      <v-avatar size="60" :color="`${bgColor}-lighten-5`" rounded="xl" class="p-absolute" style="top: 1.2rem;">
        <v-icon :icon="icon" size="30" :color="color" />
      </v-avatar>
    </template>

    <v-card-text>
      <p class="text-h2">{{ value }}</p>
    </v-card-text>

    <v-card-actions>
      <v-avatar color="transparent">
        <v-icon data-test="small-icon" :icon="isUp ? 'custom:VChartLineUp' : 'custom:VChartLineDown'" size="20"></v-icon>
      </v-avatar>
      <p class="text-body-1 mx-1">
        <span :class="isUp ? 'text-secondary': 'text-error'">
          {{ percentage }} %
        </span>

        <span>{{ isUp ? 'Up' : 'Down' }} from {{ date }}</span>
      </p>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
