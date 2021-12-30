<template>
  <button class="round-corners fib-5"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "global.scss";

button {
  position: relative;
  display: flex;
  align-items: center;
  height: $fib-8 * 1px;
  border: $fib-1 * 1px solid;
  border-color: $border-color;
  padding-left: $fib-6 * 1px;
  padding-right: $fib-6 * 1px;
  background: $background-color;
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