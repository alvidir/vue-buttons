<template>
  <button class="round-corners fib-5"
          :class="{large: isLarge,
                   disabled: disabled}"
          @click.stop="onButtonClicked">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const CLICK_EVENT_NAME = "click"
const OPTION_LARGE = "large"

export default defineComponent({
  name: "RegularButton",
  emits: [CLICK_EVENT_NAME],
  components: {},
  
  props: {
    option: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isLarge(): boolean {
      return this.option === OPTION_LARGE;
    },
  },

  methods: {
    onButtonClicked() {
      if (this.disabled) {
        return
      }

      this.$emit(CLICK_EVENT_NAME)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "styles.scss";

button {
  position: relative;
  display: flex;
  align-items: center;

  border: $fib-1 * 1px solid;
  border-color: $border-color;
  background: $background-color;

  height: $fib-8 * 1px;
  width: fit-content;
  outline: none;

  transition: height $fib-7 * 0.01s,
              background $fib-7 * 0.01s,
              border-color $fib-7 * 0.01s;

  &.large {
    height: $fib-9 * 1px;
  }

  &:not(.disabled) {
    &:hover {
      background: $on-hover-background-color;
      border-color: $on-hover-border-color;
    }

    &:active {
      transition: background 0s;
      background: $background-color;
    }
  } 
}
</style>