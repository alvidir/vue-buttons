<script setup lang="ts">
interface Props {
  checked?: boolean;
  disabled?: boolean;
  large?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "var(--color-accent)",
});

interface Events {
  (e: "switch", payload: Event): void;
}

const emit = defineEmits<Events>();

const onClick = (payload: Event) => {
  if (props.disabled) {
    return;
  }

  emit("switch", payload);
};
</script>

<template>
  <div class="switch-button" :class="{ large: large, disabled: disabled }">
    <label>
      <input
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="onClick"
      />
      <span></span>
    </label>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "sass:math";
@import "styles.scss";

$switch-height: $fib-7 * 1px !default;
$switch-width: $FIB_RATIO * $switch-height !default;

.switch-button {
  position: relative;
  height: $switch-height;
  width: $switch-width;

  label {
    display: flex;
    width: fit-content;
  }

  input {
    position: absolute;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;

    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + span {
      /* Teal background */
      background-color: v-bind(color);
    }

    &:checked + span::before {
      border-color: v-bind(color);
      transform: translateX($switch-width - $switch-height);
    }
  }

  span {
    /* Vertically center the inner circle */
    position: relative;
    height: $switch-height;
    flex-basis: $switch-width;

    /* Make the container element rounded */
    border-radius: $switch-height;
    background-color: var(--color-border);

    /* In case the label gets long, the toggle shouldn't shrink. */
    flex-shrink: 0;

    &::before {
      content: "";
      position: absolute;

      /* Move a little bit the inner circle to the right */
      height: $switch-height - math.div($fib-5, 2) * 1px;
      width: $switch-height - math.div($fib-5, 2) * 1px;

      /* Make the inner circle fully rounded */
      border-radius: 9999px;
      background-color: var(--color-button);

      transition: transform $fib-8 * 0.01s;
      border: 2px solid var(--color-text-disabled);
    }
  }

  &.large {
    $switch-height: $fib-8 * 1px;
    $switch-width: $FIB_RATIO * $switch-height;

    min-height: $switch-height !important;
    min-width: $switch-width !important;

    input {
      &:checked + span::before {
        transform: translateX($switch-width - $switch-height);
      }
    }

    span {
      height: $switch-height;
      flex-basis: $switch-width;
      border-radius: $switch-height;

      &::before {
        height: $switch-height - math.div($fib-5, 2) * 1px;
        width: $switch-height - math.div($fib-5, 2) * 1px;
      }
    }
  }

  &:not(.disabled):hover span {
    &::before {
      background-color: var(--color-button-hover);
    }
  }
}

.disabled {
  span {
    background-color: var(--color-border-disabled);

    &::before {
      background-color: var(--color-button-disabled);
      border: 2px solid var(--color-border-disabled);
    }
  }

  input:checked + span {
    filter: brightness(80%);
    background-color: v-bind(color);
  }
}
</style>
