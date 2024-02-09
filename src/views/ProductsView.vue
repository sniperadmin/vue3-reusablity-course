<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductsView'
})
</script>

<script setup lang="ts">
import VProduct from '@/components/VProduct/Index.vue'
const products = [
  {
    id: '1',
    name: 'apple watch series 4',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    pricing :{
      value: '0.00',
      currency: 'usd',
      symbol: '$'
    }
  },
  {
    id: '1',
    name: 'apple watch series 4',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    pricing :{
      value: '0.00',
      currency: 'usd',
      symbol: '$'
    }
  },
  {
    id: '1',
    name: 'apple watch series 4',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    pricing :{
      value: '0.00',
      currency: 'usd',
      symbol: '$'
    }
  }
]
</script>

<template>
  <h1 class="text-h1 text-capitalize my-4">products</h1>
  <v-row>
    <v-col v-for="productItem in products" :key="productItem.id">
      <v-product :item="productItem" />
    </v-col>
  </v-row>
</template>
