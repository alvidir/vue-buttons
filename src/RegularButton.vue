<template>
  <button class="regular round-corners fib-5"
          :class="{large: large,
                   disabled: disabled}"
          @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const CLICK_EVENT_NAME = "click"

export default defineComponent({
  name: "RegularButton",
  emits: [CLICK_EVENT_NAME],
  components: {},
  
  props: {
    disabled: Boolean,
    large: Boolean,
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return
      }

      this.$emit(CLICK_EVENT_NAME)
    }
  }
})
</script>

<style lang="scss">
@import "fibonacci-styles";

button.regular {
  cursor:default;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: $fib-8 * 1px;
  font-size: medium;
  border: $fib-1 * 1px solid;
  padding-left: $fib-6 * 1px;
  padding-right: $fib-6 * 1px;
  outline: none;

  transition: height $fib-7 * 0.01s,
              background $fib-7 * 0.01s,
              border-color $fib-7 * 0.01s;

  &.large {
    height: $fib-9 * 1px;
  }

  &:not(.disabled) {
    &:not(:active):not(.off):hover {
      background: var(--color-button-hover);
    }

    border-color: var(--color-text-disabled);
    background: var(--color-button);
    color: var(--color-text);
  }

  &.disabled {
    border-color: var(--color-text-disabled);
    background: var(--color-background-disabled);
    color: var(--color-text-disabled);
  }
}
</style>