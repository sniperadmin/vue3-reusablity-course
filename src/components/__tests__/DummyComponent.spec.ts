import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import Component from '../DummyComponent.vue'

describe('Dummy tests', () => {
  const vuetify = createVuetify({
    components
  })
  global.ResizeObserver = require('resize-observer-polyfill')

  it('should mount', () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
