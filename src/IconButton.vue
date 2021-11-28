<template>
  <button class="round-corners fib-5"
          :class="{large: isLarge,
                   disabled: disabled}"
          @click.stop="onButtonClicked">
    <img :src="src" :name="name">
    <div class="container">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const CLICK_EVENT_NAME = "click"
const OPTION_LARGE = "large"

export default defineComponent({
  name: "IconButton",
  emits: [CLICK_EVENT_NAME],
  components: {},
  
  props: {
    name: String,
    src: String,
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

  outline: none;
  border: none;
  
  background: transparent;

  padding-right: 15px;
  height: $fib-8 * 1px;
  width: fit-content;
  min-width: golden-ratio($fib-10) * 1px;
  max-width: golden-ratio($fib-11) * 1px;

  transition: background $fib-8 * 0.01s,
              height $fib-7 * 0.01s;

  &.large {
    height: $fib-9 * 1px;
  }

  &:not(.disabled) {
    &:hover {
      background: rgba($border-color, .2);
    }
  } 
}

img {
  max-height: $fib-7 * 1px;
  margin-left: $fib-10 * 0.1px;
}

.container {
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-left: $fib-10 * 0.1px;
  font-size: $fib-6 * 0.1em;
  font-weight: 500;
  text-align: left;
}
</style>