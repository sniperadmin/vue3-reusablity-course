import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, beforeEach, afterEach, test, expect } from 'vitest'
import VPricingCard from './Index.vue'

let wrapper: VueWrapper<typeof VPricingCard>

const title = (wrapper: VueWrapper) => wrapper.find('[data-testid="title"]')
const subtitle = (wrapper: VueWrapper) => wrapper.find('[data-testid="subtitle"]')
const pricing = (wrapper: VueWrapper) => wrapper.find('[data-testid="pricing"]')
// const startCta = (wrapper: VueWrapper) => wrapper.find('[data-testid="start-cta"]')
// const trialCta = (wrapper: VueWrapper) => wrapper.find('[data-testid="trial-cta"]')

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

  // TODO: add test cases here!
  test('should load title', () => {
    expect(title(wrapper).text()).toBe(wrapper.vm.$props.item.title)
  })

  test('should load subtitle', () => {
    expect(subtitle(wrapper).text()).toBe(wrapper.vm.$props.item.subtitle)
  })

  test('should load pricing', () => {
    expect(pricing(wrapper).text()).toBe(wrapper.vm.$props.item.pricing.symbol + wrapper.vm.$props.item.pricing.value)
  })

  test('should load features', () => {
    const featureElements = wrapper.findAll('.v-list-item')
    expect(featureElements.length).toBe(7)
  })

  test.todo('check start tier cta')
  test.todo('check trial cta')
})
