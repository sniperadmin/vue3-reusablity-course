import { describe, beforeEach, afterEach, test, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import VProduct from './Index.vue'

let wrapper: VueWrapper
// All element finders
const image = (wrapper: VueWrapper) => wrapper.find('[data-testid="product-image"]')
const name = (wrapper: VueWrapper) => wrapper.find('[data-testid="product-name"]')
// const wishBtn = (wrapper: VueWrapper) => wrapper.find('[data-testid="product-wish"]')
const pricing = (wrapper: VueWrapper) => wrapper.find('[data-testid="product-pricing"]')
// const rating = (wrapper: VueWrapper) => wrapper.find('[data-testid="product-rating"]')
// const editBtn = (wrapper: VueWrapper) => wrapper.find('[data-testid="product-edit"]')

describe('VProduct component', () => {
  beforeEach(() => {
    wrapper = mount(VProduct, {
      props: {
        item: {
          id: '1',
          name: 'apple watch series 4',
          image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          pricing: {
            value: '0.00',
            currency: 'usd',
            symbol: '$'
          }
        }
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test('should load image', () => {
    expect(image(wrapper).attributes('aria-label')).toBe(wrapper.vm.$props.item.name + ' image')
  })

  test('Should load name', () => {
    expect(name(wrapper).text()).toBe(wrapper.vm.$props.item.name)
  })

  test.todo('Should check wish product CTA')

  test('should render pricing', () => {
    expect(pricing(wrapper).text())
      .toBe(
        wrapper.vm.$props.item.pricing.symbol + ' ' +
        wrapper.vm.$props.item.pricing.value
      )
  })

  test.todo('Should check rating')
  test.todo('Should check edit btn')
})
