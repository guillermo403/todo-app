<script setup lang="ts">
import IconDelete from './icons/IconDelete.vue'
import IconEdit from './icons/IconEdit.vue'
import IconDone from './icons/IconDone.vue'
import { useAlert } from '@/composables/alert'
import type { Todo } from '@/types/todos'
import { useTodoStore } from '@/stores/todos'

const todoStore = useTodoStore()

interface Props {
  todo: Todo
}

const props = defineProps<Props>()

const handleDelete = () => {
  useAlert({
    title: '¿Sure you want to delete the todo??',
    icon: 'error',
    confirmButtonText: 'Delete',
    confirmButtonColor: '#f27474',
    onConfirm: () => todoStore.deleteTodo(props.todo.id),
    onDeny: () => null,
    showCancelButton: true,
    showConfirmButton: true
  })
}

const handleEdit = () => {
  useAlert({
    title: 'Edit todo title',
    icon: 'question',
    showCancelButton: true,
    showConfirmButton: true,
    input: 'text',
    inputValue: props.todo.title,
    onConfirm: (res: any) => todoStore.updateTodo(props.todo.id, res.value)
  })
}
</script>

<template>
  <div class="card">
    <div class="content">
      <h1 class="title" :class="{ strike: todo.finished }">
        <slot name="title"></slot>
      </h1>
      <p class="description">
        <slot name="description"></slot>
      </p>
    </div>
    <div class="actions">
      <button @click="todoStore.doTodo(todo.id)" style="background-color: rgb(72, 194, 35)">
        <IconDone />
      </button>
      <button v-if="!todo.finished" @click="handleEdit" style="background-color: rgb(22, 98, 240)">
        <IconEdit />
      </button>
      <button @click="handleDelete" style="background-color: rgb(175, 41, 48)">
        <IconDelete />
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid #555;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
}
.content {
  display: flex;
  max-width: 50%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

h1.title {
  font-size: large;
}

p.description {
  font-size: 0.9rem;
  color: #666;
}

.actions {
  position: absolute;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  font-size: medium;
  color: black;
  font-weight: bolder;
  cursor: pointer;
  &:active {
    transform: translateY(0.1rem);
  }
}

.strike {
  text-decoration: line-through;
}
</style>
