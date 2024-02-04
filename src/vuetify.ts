import '@/assets/main.scss'
import { h } from 'vue'
import { createVuetify, type IconProps, type IconSet } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import VChartLineUp from '@/components/icons/VChartLineUp/Index.vue'
import VChartLineDown from '@/components/icons/VChartLineDown/Index.vue'
import { mdiAccountMultiple, mdiCube, mdiChartLine, mdiHistory } from '@mdi/js'

const customSvgNameToComponent: any = {
  VChartLineUp,
  VChartLineDown
}

const customSVGs: IconSet = {
  // @ts-ignore
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon])
}

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: '#4880FF',
          secondary: '#00B69B',
          error: '#F93C65',
          warning: '#FEC53D',
          stall: '#FF9066',
          account: '#8280FF',
          cube: '#FEC53D',
          chart: '#4AD991'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      accountMultiple: mdiAccountMultiple,
      cube: mdiCube,
      chartLine: mdiChartLine,
      history: mdiHistory
    },
    sets: {
      mdi,
      custom: customSVGs
    }
  }
})

export default vuetify
