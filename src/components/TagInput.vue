<script setup lang="ts">
import { computed, ref } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

const input = ref("");
// const tags = ref<string[]>([]);
const newTag = computed(() => input.value.trim());

const removeTag = (tag: string) => {
  emit(
    "update:modelValue",
    props.modelValue.filter((t) => t !== tag)
  );
};

const addTag = () => {
  if (newTag.value.length === 0 || props.modelValue.includes(newTag.value)) {
    return;
  }
  emit("update:modelValue", [...props.modelValue, newTag.value]);
  clearInput();
};

const clearInput = () => {
  input.value = "";
};

const handleBackspace = () => {
  if (newTag.value.length === 0) {
    emit("update:modelValue", props.modelValue.slice(0, -1));
  }
};
</script>
u
<template>
  <div class="tag-input">
    <slot
      :input="input"
      :on-input="
        (e) => {
          input = e.target.value;
        }
      "
      :tags="modelValue"
      :remove-tag="removeTag"
      :add-tag="addTag"
      :handle-backspace="handleBackspace"
      :bindings="{
        value: input,
      }"
      :event-handlers="{
        input: (e) => {
          input = e.target.value;
        },
        keydown: (e) => {
          if (e.keyCode === 8) {
            handleBackspace();
          }
          if (e.keyCode === 13) {
            addTag();
          }
        },
      }"
    />

    <!-- <input
      class="tag-input-text"
      placeholder="Add tag..."
      v-model="input"
      @keydown.backspace="handleBackspace"
      @keydown.enter.prevent="addTag"
    /> -->
  </div>
</template>

// SlotpropsType: state/data, actions, eventHandler(pass in a big object slot),
bindings/group of bindings
