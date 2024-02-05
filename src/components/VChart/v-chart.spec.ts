import { describe, beforeEach, afterEach, test, expect, vi } from 'vitest'
import { VueWrapper, mount, shallowMount } from '@vue/test-utils'
import VChart from './Index.vue'

let wrapper: VueWrapper

vi.mock('echarts')

describe('VChart', () => {
  beforeEach(() => {
    wrapper = mount(VChart)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test.todo('should mount the component after the echarts team fix esm')
})
