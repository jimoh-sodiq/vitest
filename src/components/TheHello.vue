<script setup lang="ts">
import { ref } from "vue";

const todos = ref([
  {
    id: 1,
    text: "Learning testing",
    completed: false,
  },
]);

const newTodo = ref("");

const createTodo = () => {
  todos.value.push({
    id: 2,
    text: newTodo.value,
    completed: false,
  });
};
</script>

<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    data-test="todo"
    :class="[todo.completed ? 'completed' : '']"
  >
    {{ todo.text }}
    <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
  </div>
  <form data-test="form" @submit.prevent="createTodo">
    <input data-test="new-todo" v-model="newTodo" />
  </form>
</template>

<style scoped>
.completed {
  color: red;
}
</style>
