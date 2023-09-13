import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TodoCard from '../TodoCard.vue'
import { todos } from '@/mocks/todo'
import { createPinia, setActivePinia } from 'pinia'

setActivePinia(createPinia())

describe('TodoCard', () => {
  const wrapper = mount(TodoCard, { props: { todo: todos[0] } })

  it('should render', () => {
    const $card = wrapper.find('h1.title')
    expect($card.exists()).toBe(true)
  })
})
