<template>
  <label :class="{large: large, disabled: disabled}">
    <input type="checkbox"
          v-model="checked"
          @change="onSwitchClicked"/>
    <span></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const SWITCH_EVENT_NAME = "switch"
const OPTION_LARGE = "large"

export default defineComponent({
  name: "SwitchButton",
  emits: [SWITCH_EVENT_NAME],
  components: {},
  
  props: {
    initial: Boolean,
    disabled: Boolean,
    large: Boolean,
  },

  data() {
    return {
      checked: this.initial,
    }
  },

  methods: {
    onSwitchClicked() {
      if (this.disabled) {
        this.checked = !this.checked
        return
      }

      this.$emit(SWITCH_EVENT_NAME, this.checked)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "sass:math";
@import "global.scss";

$checked-color: find-fib-color(emphasis) !default;
$darker-checked-color: darken($checked-color, $fib-4 * 1%) !default;

$switch-height: $fib-7 * 1px !default;
$switch-width: golden-ratio($switch-height) !default;

label {
  cursor: pointer;
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
      background-color: $checked-color;
  }
  
  &:checked + span::before {
      border-color: $checked-color;
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
  background-color: lighten($disabled-color, $fib-6 * 1%);

  /* In case the label gets long, the toggle shouldn't shrink. */
  flex-shrink: 0;
  transition: background-color $fib-7 * 0.01s;

  &::before {
      content: "";
      position: absolute;

      /* Move a little bit the inner circle to the right */
      left: $fib-1 * 1px;
      height: $switch-height - math.div($fib-5, 2) * 1px;
      width: $switch-height - math.div($fib-5, 2) * 1px;
      
      /* Make the inner circle fully rounded */
      border-radius: 9999px;
      background-color: white;
  
      transition: transform $fib-8 * 0.01s;
      border: 2px solid $disabled-color;
  }
}

.large {
  $switch-height: $fib-8 * 1px;
  $switch-width: $fib-9 * 1px;

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


</style>