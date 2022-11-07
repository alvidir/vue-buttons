<template>
  <button
    class="submit round-corners fib-5"
    :class="{ disabled: disabled, off: loading, large: large }"
    @click="onClick"
  >
    <slot v-if="!loading"></slot>
    <div v-else>
      <slot name="spinner">
        <pulse-loader
          :size="'8px'"
          :radius="'5px'"
          color="#ffffff80"
        ></pulse-loader>
      </slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const SUBMIT_EVENT_NAME = "submit";

export default defineComponent({
  name: "SubmitButton",
  emits: [SUBMIT_EVENT_NAME],
  components: {
    PulseLoader,
  },

  props: {
    large: Boolean,
    loading: Boolean,
    disabled: Boolean,
  },

  methods: {
    onClick() {
      if (this.disabled || this.loading) {
        return;
      }

      this.$emit(SUBMIT_EVENT_NAME);
    },
  },
});
</script>

<style lang="scss">
@import "fibonacci-styles";

button.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $fib-8 * 1px;
  width: 100%;
  border: $fib-1 * 1px solid;
  color: var(--color-white);
  font-size: medium;
  padding-left: $fib-7 * 1px;
  padding-right: $fib-7 * 1px;
  outline: none;

  transition: filter $fib-8 * 0.01s, background $fib-8 * 0.01s,
    border-color $fib-8 * 0.01s, font-size $fib-7 * 0.01s, height $fib-7 * 0.01s;

  &.large {
    height: $fib-9 * 1px !important;
    font-size: 1rem !important;
  }

  &:not(.disabled) {
    &:not(:active):not(.off):hover {
      filter: brightness(110%);
    }

    border-color: var(--color-green);
    background: var(--color-green);
  }

  &.disabled {
    border-color: var(--color-text-disabled);
    background: var(--color-background-disabled);
    color: var(--color-text-disabled);

    i {
      color: var(--color-text-disabled);
    }
  }

  i {
    font-size: $fib-7 * 1px;
    &:first-child {
      padding-right: $fib-6 * 1px;
    }
  }
}
</style>
