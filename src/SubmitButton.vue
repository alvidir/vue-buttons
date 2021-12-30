<template>
  <button id="submit-button"
          class="round-corners fib-5"
          :class="{disabled: disabled,
                   off: loading,
                   large: large}"
          @click="onClick">
    <slot v-if="!loading"></slot>
    <div v-else>
      <slot :name="spinner">
        <pulse-loader :size="'8px'" :radius="'5px'" color="#ffffff80"></pulse-loader>
      </slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const SUBMIT_EVENT_NAME = "submit"

export default defineComponent({
  name: "SubmitButton",
  emits: [SUBMIT_EVENT_NAME],
  components: {
    PulseLoader,
  },
  
  props: {
    large: Boolean,
    loading: Boolean,
    disabled: Boolean,
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
    color: #ffffffd0;

    transition: font-size $fib-7 * 0.01s,
                height $fib-7 * 0.01s;    

    &.large {
      height: $fib-9 * 1px !important;
      font-size: 1rem !important;
    }

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
      color: darken($disabled-color, $fib-6 * 1%);

      transition: background $fib-8 * 0.01s,
                  border-color $fib-8 * 0.01s,
                  font-size $fib-7 * 0.01s,
                  height $fib-7 * 0.01s;
    }
}
</style>