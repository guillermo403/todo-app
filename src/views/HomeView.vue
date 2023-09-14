<script setup lang="ts">
import TodosList from '@/components/TodosList.vue'
import { useTodoStore } from '@/stores/todos'
import type { Todo } from '@/types/todos'
import { ref } from 'vue'

const todoStore = useTodoStore()

const $title = ref()
const title = ref('')
const description = ref('')

const handleClick = () => {
  if (title.value.trim() === '') return

  const newTodo: Todo = {
    id: window.crypto.randomUUID(),
    title: title.value,
    description: description.value,
    createdAt: new Date(),
    finished: false
  }

  todoStore.addTodo(newTodo)

  title.value = ''
  description.value = ''
  $title.value.focus()
}
</script>

<template>
  <h1>TODOS APP</h1>

  <main>
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem'
      }"
    >
      <label style="font-weight: bold; font-size: large">New Todo</label>
      <input v-model="title" ref="$title" type="text" placeholder="Buy potatoes" />
      <textarea
        v-model="description"
        placeholder="Buy 3kg of potatoes in the supermarket"
      ></textarea>
    </div>
    <button @click="handleClick">Add Todo</button>

    <section style="margin-block-start: 1rem">
      <TodosList />
    </section>
  </main>
</template>

<style scoped>
main {
  margin-block-start: 1rem;
  padding: 1.8rem;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

input,
textarea {
  font-family: system-ui;
  height: 3rem;
  background-color: transparent;
  border: 2px solid #818181;
  border-radius: 4px;
  outline: none;
  color: rgb(122, 122, 122);
  padding-inline-start: 0.7rem;
  font-size: 1.1em;
}

textarea {
  height: 8rem;
  padding: 0.7rem;
  text-align: left;
}

button {
  height: 2.5rem;
  padding-inline: 2rem;
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(99, 154, 255);
  border: none;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 3px;
  font-size: 1.3em;
  word-spacing: 0.1em;
}
button:hover {
  background-color: rgb(56, 115, 224);
}

@media (width <= 700px) {
  main {
    width: 100%;
  }
}
</style>
