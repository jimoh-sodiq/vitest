<script setup lang="ts">
import { ref } from "vue";
import TagInput from "@/components/TagInput.vue";
// import TheHello from "@/components/TheHello.vue";

const tagsArray = ref(["Eat Food"]);
</script>

<template>
  <main>This is the home view</main>
  <!-- <TheHello /> -->
  <TagInput
    v-model="tagsArray"
    v-slot="{ tags, removeTag, bindings, eventHandlers }"
  >
    <span class="tag-input-tag" v-for="tag in tags" :key="tag">
      <span>{{ tag }}</span>
      <button type="button" class="tag-input-remove" @click="removeTag(tag)">
        &times;
      </button>
    </span>

    <input
      class="tag-input-text"
      placeholder="Add tag..."
      v-bind="bindings"
      v-on="eventHandlers"
    />
  </TagInput>
</template>

<style>
.tag-input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding: 0.5rem 0 0.25rem 0.5rem;
}
.tag-input-tag {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  line-height: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}
.tag-input-tag:focus-within {
  -webkit-box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
  box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
}
.tag-input-remove {
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
}
.tag-input-remove:first-child {
  margin-right: 0.25rem;
}
.tag-input-remove:last-child {
  margin-left: 0.25rem;
}
.tag-input-remove:focus {
  outline: 0;
}
.tag-input-text {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 0.25rem;
  padding-right: 0.5rem;
  min-width: 8rem;
}
.stacked-tag-input-form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 1rem;
}
.stacked-tag-input-form > .form-input {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 0.5rem;
}
.stacked-tag-list {
  font-size: 0.875rem;
  padding-left: 1.5rem;
}
.stacked-tag-list > li {
  margin-bottom: 0.5rem;
}
.stacked-tag-list > li:last-child {
  margin-bottom: 0;
}
.stacked-tag-link {
  font-size: 0.75rem;
  color: #8795a1;
  text-decoration: underline;
  margin-left: 0.5rem;
}
.stacked-tag-link:hover {
  color: #606f7b;
}
</style>

// style Props : props for color, text, border-width, font-weight, icon color,
spacing, etc not suitable // css hooks: expose some classes for the users and
document them, but can cause conflict, your naming convention // class overrides
