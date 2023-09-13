import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const wrapper = mount(HomeView)

  it('renders properly', () => {
    expect(wrapper.text()).toContain('ToDo App')
  })

  it('renders new todo input', () => {
    const $input = wrapper.find('input[type=text]')
    expect($input.exists()).toBe(true)
  })

  it('renders new todo button', () => {
    const $button = wrapper.find('button')
    expect($button.exists()).toBe(true)
  })
})
