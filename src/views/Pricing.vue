<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PricingView'
})
</script>

<script setup lang="ts">
import VPricingCard from '@/components/VPricingCard/Index.vue'

const pricingTiers = [
  {
    title: 'basic',
    subtitle: 'monthly subscription',
    pricing: { value: '0.00', currency: 'usd', symbol: '$' },
    features: [
      {
        id: '1',
        name: 'free setup',
        disabled: false
      },
      {
        id: '2',
        name: 'bandwidth limit 10 GB',
        disabled: false
      },
      {
        id: '3',
        name: '20 user connection',
        disabled: false
      },
      {
        id: '4',
        name: 'analytics report',
        disabled: true
      },
      {
        id: '5',
        name: 'public access',
        disabled: true
      },
      {
        id: '6',
        name: 'plugins integration',
        disabled: true
      },
      {
        id: '7',
        name: 'custom content management',
        disabled: true
      },
    ]
  },
  {
    title: 'standard',
    subtitle: 'monthly subscription',
    pricing: { value: '0.00', currency: 'usd', symbol: '$' },
    features: [
      {
        id: '1',
        name: 'free setup',
        disabled: false
      },
      {
        id: '2',
        name: 'bandwidth limit 10 GB',
        disabled: false
      },
      {
        id: '3',
        name: '20 user connection',
        disabled: false
      },
      {
        id: '4',
        name: 'analytics report',
        disabled: true
      },
      {
        id: '5',
        name: 'public access',
        disabled: true
      },
      {
        id: '6',
        name: 'plugins integration',
        disabled: true
      },
      {
        id: '7',
        name: 'custom content management',
        disabled: true
      },
    ]
  },
  {
    title: 'premium',
    subtitle: 'monthly subscription',
    pricing: { value: '0.00', currency: 'usd', symbol: '$' },
    features: [
      {
        id: '1',
        name: 'free setup',
        disabled: false
      },
      {
        id: '2',
        name: 'bandwidth limit 10 GB',
        disabled: false
      },
      {
        id: '3',
        name: '20 user connection',
        disabled: false
      },
      {
        id: '4',
        name: 'analytics report',
        disabled: true
      },
      {
        id: '5',
        name: 'public access',
        disabled: true
      },
      {
        id: '6',
        name: 'plugins integration',
        disabled: true
      },
      {
        id: '7',
        name: 'custom content management',
        disabled: true
      },
    ]
  },
]
</script>

<template>
  <h1 class="text-h1 my-5">Pricing</h1>
  <v-row>
    <v-col v-for="tier in pricingTiers" :key="tier.title">
      <v-pricing-card :item="tier" />
    </v-col>
  </v-row>
</template>
