<template>
  <div class="switch-button" :class="{ large: large, disabled: disabled }">
    <label>
      <input
        type="checkbox"
        v-model="model"
        :disabled="disabled"
        @change="onSwitchClicked"
      />
      <span></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const SWITCH_EVENT_NAME = "switch";

export default defineComponent({
  name: "SwitchButton",
  emits: [SWITCH_EVENT_NAME],
  components: {},

  props: {
    checked: Boolean,
    disabled: Boolean,
    large: Boolean,
    color: {
      type: String,
      default: "var(--color-green)",
    },
  },

  watch: {
    checked(value: boolean) {
      this.model = value;
    },
  },

  data() {
    return {
      model: this.checked,
    };
  },

  methods: {
    onSwitchClicked() {
      if (!this.disabled) this.$emit(SWITCH_EVENT_NAME, this.model);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "sass:math";
@import "fibonacci-styles";

$switch-height: $fib-7 * 1px !default;
$switch-width: $FIB_RATIO * $switch-height !default;

.switch-button {
  position: relative;
  height: $switch-height;
  width: $switch-width;

  transition: filter $default-duration, background $default-duration,
    border-color $default-duration, font-size $default-duration,
    height $default-duration;

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
      left: $fib-1 * 1px;
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
