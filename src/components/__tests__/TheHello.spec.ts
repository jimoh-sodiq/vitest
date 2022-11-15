import { it, expect, describe } from "vitest";
import TheHello from "@/components/TheHello.vue";
import { mount } from "@vue/test-utils";

describe("TheHello.vue", () => {
  it("renders a todo", () => {
    const wrapper = mount(TheHello);
    const todo = wrapper.get('[data-test="todo"]');

    expect(todo.text()).toBe("Learning testing");
  });

  it("creates a todo", async () => {
    const wrapper = mount(TheHello);

    await wrapper.get('[data-test="new-todo"]').setValue("New todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });

  it("completes a todo", async () => {
    const wrapper = mount(TheHello);

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
  });
});
