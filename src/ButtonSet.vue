<template>
  <span id="button-container"
        class="round-corners fib-5"
        :class="{disabled: disabled}"
        v-if="actions">
    <button v-for="action, index in getActions"
            :class="{vl: index < latestIndex}"
            :key="action"
            @click.stop="onActionClicked(action)">
      <slot :name="action"></slot>
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const CLICK_EVENT_NAME = "click"

export default defineComponent({
  name: "ButtonSet",
  emits: [CLICK_EVENT_NAME],
  components: {},
  
  props: {
    actions: {
      type: Array,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    getActions() {
      return this.actions?.filter(action => !!this.$slots[action as string])
    },

    latestIndex(): number {
      return this.actions.length -1;
    }
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
  min-height: $fib-8 * 1px;
  width: $fib-8 * 1px;

  background: transparent;
  border: none;
  outline: none;

  &.vl {
    border-right: 1px solid find-fib-color(disabled);
  }

  &:hover {
    background: transparentize($color: $disabled-color, $amount: $fib-10 * 0.01);
  }

  &:active {
    background: transparent;
  }
}

#button-container {
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  overflow: hidden;

  border: $fib-1 * 1px solid;
  border-color: find-fib-color(disabled);
  transition: color $fib-8 * 0.01s,
              background $fib-8 * 0.01s,
              height $fib-7 * 0.01s;

  &.disabled {
    button {
      background: transparentize($color: $disabled-color, $amount: $fib-10 * 0.01);
      color: $disabled-color;
    }
  }
}
</style>