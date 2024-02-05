<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VChart'
})
</script>

<script setup lang="ts">
import { provide } from 'vue'
import { SVGRenderer } from 'echarts/renderers'

import VChart, { THEME_KEY } from 'vue-echarts'
import { getChartData } from '@/composables/charts'

provide(THEME_KEY, 'dark')

const { chartOneOptions, chartTwoOptions, chartThreeOptions} = getChartData()
const smallChartsOptions = [chartTwoOptions, chartThreeOptions]

const {
  GridComponent,
  LegendComponent,
  TitleComponent,
  AriaComponent,
  AxisPointerComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  GridSimpleComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  SingleAxisComponent,
  TimelineComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent
} = await import('echarts/components')

const {
  LineChart,
  LinesChart,
  PieChart,
  BarChart
} = await import('echarts/charts')

const extensions = [
  SVGRenderer,
  TitleComponent,
  GridComponent,
  LineChart,
  BarChart,
  LegendComponent,
  LinesChart,
  PieChart,
  GridSimpleComponent,
  AriaComponent,
  AxisPointerComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  SingleAxisComponent,
  TimelineComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent
]

const { use } = await import('echarts/core')
use(extensions)
</script>

<template>
  <v-card width="100%" class="my-8">
    <v-chart class="chart" :option="chartOneOptions" />
  </v-card>
  <v-row>
    <v-col v-for="(option, index) in smallChartsOptions" :key="index">
      <v-card width="100%">
        <v-chart class="chart" :option="option" />
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.chart {
  height: 400px;
}
</style>
