import { describe, beforeEach, afterEach, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import VStat from './Index.vue'

let wrapper: VueWrapper
describe('VStat Component', () => {
  beforeEach(() => {
    wrapper = mount(VStat)
  })
  afterEach(() => {
    wrapper.unmount()
  })

  test('should load name', () => {
    const name = wrapper.find('[data-test="name"]')
    expect(name.text()).toBe('total something')
  })

  test('should load positive green percentage', async () => {
    let icon: any
    icon = wrapper.find('[data-test="small-icon"]')
    expect(icon.attributes('class')).toContain('custom:VChartLineUp')

    await wrapper.setProps({
      isUp: false
    })

    icon = wrapper.find('[data-test="small-icon"]')
    expect(icon.attributes('class')).toContain('custom:VChartLineDown')
  })
})
