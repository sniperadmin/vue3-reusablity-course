<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductsView'
})
</script>

<script setup lang="ts">
import VProduct from '@/components/VProduct/Index.vue'
</script>

<template>
  <v-product />
</template>
