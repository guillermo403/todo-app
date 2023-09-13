<script setup lang="ts">
import { computed } from 'vue'
import TodoCard from './TodoCard.vue'
import { useTodoStore } from '@/stores/todos'

const todoStore = useTodoStore()
const todos = todoStore.todos

const areTodos = computed(() => todos.length >= 1)
</script>

<template>
  <h1 v-if="areTodos" class="title">ToDo List</h1>

  <article
    data-testid="todos-container"
    style="margin-block-start: 1rem; display: flex; flex-direction: column; gap: 1rem"
  >
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo">
      <template #title>
        <h1>{{ todo.title }}</h1>
      </template>

      <template #description>
        <p>{{ todo.description }}</p>
      </template>
    </TodoCard>
  </article>
</template>

<style scoped>
.title {
  font-weight: bold;
  border-block-end: 2px solid rgba(189, 189, 189, 0.582);
  padding-inline-start: 0.4rem;
}
</style>
