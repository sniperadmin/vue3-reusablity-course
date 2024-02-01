import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from '../DummyComponent.vue'

describe('Dummy tests', () => {
  it('should mount', () => {
    const wrapper = mount(Component)
    expect(wrapper.vm).toBeTruthy()
  })
})
