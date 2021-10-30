<template>
  <button v-for="action, index in availableActions"
          :key="action"
          :class="{large: isLarge,
                   disabled: disabled,
                   'round-corners fib-5 left-only': index == 0,
                   'round-corners fib-5 right-only': index == latestIndex}"
          @click.stop="onActionClicked(action)">
    <slot :name="action"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const CLICK_EVENT_NAME = "click"
const OPTION_LARGE = "large"

export default defineComponent({
  name: "ButtonSet",
  emits: [CLICK_EVENT_NAME],
  components: {},
  
  props: {
    option: String,
    actions: {
      type: Array,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    availableActions() {
      return this.actions?.filter(action => !!this.$slots[action as string])
    },

    latestIndex(): number {
      return this.actions.length -1;
    },

    isLarge(): boolean {
      return this.option === OPTION_LARGE;
    },
  },

  methods: {
    onActionClicked(action: string) {
      if (this.disabled) {
        return
      }

      this.$emit(CLICK_EVENT_NAME, {
        action: action
      })
    },
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "styles.scss";

button {
  height: $fib-8 * 1px;
  min-width: $fib-8 * 1px;
  outline: none;

  border: $fib-1 * 1px solid;
  border-color: $border-color;
  
  transition: background $fib-7 * 0.01s,
              border-color $fib-7 * 0.01s,
              height $fib-7 * 0.01s,
              opacity $fib-7 * 0.01s;

  &.vl {
    border-right: 1px solid $border-color;
  }

  &.large {
    height: $fib-9 * 1px;
  }

  &:not(.disabled) {
    background: $background-color;

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