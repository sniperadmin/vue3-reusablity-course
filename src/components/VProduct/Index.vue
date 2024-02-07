<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VProduct'
})
</script>

<script setup lang="ts">
import { mdiHeartOutline } from '@mdi/js'
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <v-card>
    <v-img
      data-testid="product-image"
      :src="item.image"
      :alt="item.name + ' image'"
      height="300px"
      cover
    />
    <v-card-title class="pb-0">
      <v-row>
        <v-col cols="6">
          <p data-testid="product-name" class="text-capitalize text-h4">
            {{ item.name }}
          </p>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn data-testid="product-wish" variant="tonal" :icon="mdiHeartOutline" />
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
      <p data-testid="product-pricing" class="text-blue text-subtitle-1 font-weight-bold">
        {{ item.pricing.symbol }} {{ item.pricing.value }}
      </p>
      <v-rating
        :model-value="item.rating"
        :length="5"
        :size="32"
        data-testid="product-rating"
        hover
        density="comfortable"
        active-color="warning"
        class="mx-0"
      />
    </v-card-text>

    <v-card-actions class="px-4 pb-6">
      <v-btn data-testid="product-edit" variant="tonal" rounded="lg" size="large" class="px-4">Edit Product</v-btn>
    </v-card-actions>
  </v-card>
</template>
