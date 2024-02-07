import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, beforeEach, afterEach, test, expect } from 'vitest'
import VPricingCard from './Index.vue'

let wrapper: VueWrapper

describe('VPricingCard', () => {
  beforeEach(() => {
    wrapper = mount(VPricingCard, {
      props: {
        item: {
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
        }
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  test('should load', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
