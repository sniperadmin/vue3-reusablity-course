<script setup lang="ts">
import { useDisplay } from 'vuetify'
import VStat from '@/components/VStat/Index.vue'
import VChart from '@/components/VChart/Index.vue'

const { mobile } = useDisplay()

const statistics = [
  {
    id: 'users',
    name: 'total users',
    icon: 'accountMultiple',
    color: 'account',
    bgColor: 'indigo',
    value: 40689,
    isUp: true,
    percentage: 8.5,
    date: 0
  },
  {
    id: 'users',
    name: 'total order',
    icon: 'cube',
    color: 'cube',
    bgColor: 'amber',
    value: 10293,
    isUp: true,
    percentage: 1.3,
    date: 0
  },
  {
    id: 'users',
    name: 'total sales',
    icon: 'chartLine',
    color: 'chart',
    bgColor: 'teal',
    value: 89000,
    isUp: false,
    percentage: 4.3,
    date: 0
  },
  {
    id: 'users',
    name: 'total pending',
    icon: 'history',
    color: 'stall',
    bgColor: 'deep-orange',
    value: 2040,
    isUp: true,
    percentage: 1.8,
    date: 0
  }
]
</script>

<template>
  <v-row>
    <v-col v-for="item in statistics" :key="item.id" :cols="mobile ? 12 : 3">
      <v-stat
        :name="item.name"
        :value="item.value"
        :icon="`$${item.icon}`"
        :color="item.color"
        :bg-color="item.bgColor"
        :is-up="item.isUp"
        :percentage="item.percentage"
        :date="item.date"
      />
    </v-col>
  </v-row>

  <suspense>
      <v-lazy>
        <v-chart class="mt-3" />
      </v-lazy>
  </suspense>>
</template>
