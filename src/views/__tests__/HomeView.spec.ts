import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import { createPinia, setActivePinia } from 'pinia'

setActivePinia(createPinia())

describe('HomeView', () => {
  const wrapper = mount(HomeView)

  it('renders properly', () => {
    expect(wrapper.text().toLowerCase()).toContain('todos app')
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
