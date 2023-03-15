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

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

interface Props {
  large?: boolean;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  large: false,
  loading: false,
  disabled: false,
  color: "var(--color-green)",
});

interface Events {
  (e: "submit", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const onClick = (payload: MouseEvent) => {
  if (props.disabled || props.loading) {
    return;
  }

  emit("submit", payload);
};
</script>

<style lang="scss">
@import "fibonacci-styles";

button.submit {
  @extend .smooth;

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
  white-space: nowrap;
  outline: none;

  transition-property: filter, background, border-color, font-size, height;

  &.large {
    height: $fib-9 * 1px !important;
    font-size: 1rem !important;
  }

  &:not(.disabled) {
    &:not(.off):hover {
      filter: brightness(110%);
    }

    border-color: v-bind(color);
    background: v-bind(color);
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
    &:first-child {
      padding-right: $fib-6 * 1px;
    }
  }
}
</style>
