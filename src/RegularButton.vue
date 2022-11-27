<template>
  <button
    class="regular round-corners fib-5"
    :class="{ large: large, disabled: disabled, active: active }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const CLICK_EVENT_NAME = "click";

export default defineComponent({
  name: "RegularButton",
  emits: [CLICK_EVENT_NAME],

  props: {
    disabled: Boolean,
    large: Boolean,
    active: Boolean,
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit(CLICK_EVENT_NAME);
    },
  },
});
</script>

<style lang="scss">
@import "fibonacci-styles";

button.regular {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: $fib-8 * 1px;
  font-size: medium;
  border: $fib-1 * 1px solid;
  padding-left: $fib-6 * 1px;
  padding-right: $fib-6 * 1px;
  white-space: nowrap;
  outline: none;

  transition: height $default-duration, background $default-duration,
    border-color $default-duration;

  &.large {
    height: $fib-9 * 1px;
  }

  &:not(.disabled) {
    &:not(.off):hover {
      background: var(--color-button-hover);
      border-color: var(--color-border-hover);
    }

    &.active {
      background: var(--color-button-active) !important;
      border-color: var(--color-border-active) !important;
    }

    border-color: var(--color-border);
    background: var(--color-button);
    color: var(--color-text-primary);
  }

  &.disabled {
    border-color: var(--color-border-disabled);
    background: var(--color-button-disabled);
    color: var(--color-text-disabled);

    i {
      color: var(--color-text-disabled);
    }
  }

  i {
    font-size: $fib-7 * 1px;
    color: var(--color-text-secondary);

    &:first-child {
      padding-right: $fib-6 * 1px;
    }
  }
}
</style>
