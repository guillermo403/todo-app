import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todos'
import { useLocalStorage } from '@/composables/localStorage'

export const useTodoStore = defineStore('todos', () => {
  const savedTodos = JSON.parse(useLocalStorage('todos') as string)
  const todos = ref<Todo[]>(savedTodos)

  const addTodo = (todo: Todo) => {
    todos.value.push(todo)
    persist()
  }

  const deleteTodo = (id: Todo['id']) => {
    const todoIndex = findTodoIndex(id)
    todos.value.splice(todoIndex, 1)
    persist()
  }

  const doTodo = (id: Todo['id']) => {
    const todoIndex = findTodoIndex(id)
    const isDone = todos.value[todoIndex].done
    todos.value[todoIndex].done = !isDone
    persist()
  }

  const findTodoIndex = (id: Todo['id']) => todos.value.findIndex((todo) => todo.id === id)
  const persist = () => useLocalStorage('todos', todos.value)

  return { todos, addTodo, deleteTodo, doTodo }
})
