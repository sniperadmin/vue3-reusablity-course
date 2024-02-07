<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VPricingCard'
})
</script>

<script setup lang="ts">

defineProps({
  item: {
    type: Object,
    default: () => {}
}
})
</script>

<template>
  <v-card rounded="xl">
    <v-card-title>
      <p class="text-h3 text-center text-capitalize">{{ item.title }}</p>
    </v-card-title>
    <v-card-subtitle>
      <p class="text-center text-capitalize">{{ item.subtitle }}</p>
    </v-card-subtitle>

    <p class="text-h1 font-weight-bold text-center">
      {{ item.pricing.value }}
    </p>
    <v-card-text class="text-center">
      <v-divider class="mx-auto mb-5" />
      <v-list-item
        v-for="feature in item.features"
        :key="feature.id"
        :disabled="feature.disabled"
        >
        <v-list-item-title class="text-h4 text-capitalize">
          {{ feature.name }}
        </v-list-item-title>
      </v-list-item>

    <v-divider class="mx-auto my-5" />
  </v-card-text>

  <v-card-actions class="flex-column pt-0">
    <v-btn color="primary" variant="outlined" class="mb-4">
      get started
    </v-btn>

    <v-btn class="font-weight-bold">start your 30 day free trial</v-btn>
  </v-card-actions>
  </v-card>
</template>
