import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodosList from '../TodosList.vue'

describe('TodosList', () => {
  beforeEach(() => {
    console.log('LLEGAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    setActivePinia(createPinia())
  })

  const wrapper = mount(TodosList)

  it('should render correctly', () => {
    expect(wrapper.text().toLowerCase()).toContain('todo list')
  })
})
