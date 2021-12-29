<template>
  <button id="submit-button"
          class="round-corners fib-5"
          :class="{disabled: disabled, off: loading}"
          @click="onClick">
    <slot v-if="!loading"></slot>
    <div v-else>
      <slot :name="spinner">
        <pulse-loader :size="'8px'" :radius="'5px'" :color="SPINNER_COLOR"></pulse-loader>
      </slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const SUBMIT_EVENT_NAME = "submit"
const SPINNER_COLOR = "#FFFFFF80"

export default defineComponent({
  name: "SubmitButton",
  emits: [SUBMIT_EVENT_NAME],
  components: {
    PulseLoader,
  },
  
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {
      SPINNER_COLOR
    }
  },

  methods: {
    onClick() {
      if (this.disabled || this.loading) {
        return
      }

      this.$emit(SUBMIT_EVENT_NAME)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "global.scss";

$submit-color: find-fib-color(success) !default;
$on-hover-submit-color: lighten($submit-color,  $fib-4 * 1%) !default;

#submit-button {
    position: relative;
  
    height: $fib-9 * 1px;
    width: 100%;
    
    border: $fib-1 * 1px solid;
    border-color: $border-color;
    font-size: medium; 

    transition: font-size $fib-7 * 0.01s,
                height $fib-7 * 0.01s;    

    &:not(.disabled){
        &:not(.off) {
          &:hover {
            background: $on-hover-submit-color;
          }
    
          &:active {
            background: $submit-color;
          }
        }

        border-color: darken($on-hover-submit-color, $fib-4 * 1%);
        background: $submit-color;
    }

    &.disabled {
      height: $fib-8 * 1px;
      font-size: smaller;

      transition: background $fib-8 * 0.01s,
                  border-color $fib-8 * 0.01s,
                  font-size $fib-7 * 0.01s,
                  height $fib-7 * 0.01s;
    }
}
</style>