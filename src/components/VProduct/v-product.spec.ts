import { describe, beforeEach, afterEach, test, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import VProduct from './Index.vue'

let wrapper: VueWrapper

describe('VProduct component', () => {
  beforeEach(() => {
    wrapper = mount(VProduct)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test('Should mount', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
