<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VProduct'
})
</script>

<script setup lang="ts">
import { mdiHeartOutline } from '@mdi/js'
</script>

<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    />
    <v-card-title>
      <v-row>
        <v-col cols="6">
          Some Product
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn variant="tonal" :icon="mdiHeartOutline" />
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-subtitle class="text-blue">
      $120.00
    </v-card-subtitle>

    <v-card-text>
      <v-rating
        hover
        :length="5"
        :size="32"
        :model-value="3"
        active-color="warning"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn variant="tonal">Edit Product</v-btn>
    </v-card-actions>
  </v-card>
</template>