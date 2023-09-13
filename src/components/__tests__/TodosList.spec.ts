import { createPinia, setActivePinia } from 'pinia'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodosList from '../TodosList.vue'

setActivePinia(createPinia())

describe('TodosList', () => {
  const wrapper = mount(TodosList)

  it('should render correctly', () => {
    const container = wrapper.find('[data-testid=todos-container]')
    expect(container.exists()).toBe(true)
  })
})
