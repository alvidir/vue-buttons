<template>
  <button id="submit-button"
          class="round-corners fib-5"
          :class="{disabled: disabled, off: loading}"
          @click="onSubmitClicked">
    <slot v-if="!loading"></slot>
    <span v-else>
      <slot :name="loadingSlotName" v-if="hasCustomLoader"></slot>
      <pulse-loader v-else :size="'8px'" :radius="'5px'" :color="defaultSpinnerColor"></pulse-loader>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const SUBMIT_EVENT_NAME = "submit"
const SPINNER_COLOR = "#FFFFFF80"
const LOADING_SLOT_NAME = "loading"

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

  computed: {
    loadingSlotName(): string {
      return LOADING_SLOT_NAME
    },

    hasCustomLoader(): boolean {
      return !!this.$slots[this.loadingSlotName]
    },

    defaultSpinnerColor(): string {
      return SPINNER_COLOR
    }
  },

  methods: {
    onSubmitClicked() {
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
@import "styles.scss";

$submit-color: find-fib-color(success) !default;
$clear-submit-color: lighten($submit-color,  $fib-4 * 1%) !default;

#submit-button {
    position: relative;
  
    height: $fib-9 * 1px;
    width: 100%;
    
    border: $fib-1 * 1px solid;

    transition: font-size $fib-7 * 0.01s,
                height $fib-7 * 0.01s;

    color: white;
    font-size: medium;     

    &:not(.disabled){
        &:not(.off) {
          &:hover {
            background: $submit-color;
          }
    
          &:active {
            background: $clear-submit-color;
          }
        }

        border-color: darken($submit-color, $fib-4 * 1%);
        background: $clear-submit-color;
    }

    &.disabled {
      height: $fib-8 * 1px;
      font-size: smaller;

      transition: background $fib-8 * 0.01s,
                  border-color $fib-8 * 0.1s,
                  font-size $fib-7 * 0.01s,
                  height $fib-7 * 0.01s;

      border-color: darken($disabled-color, $fib-4 * 1%);
      background: $disabled-color;
    }
}
</style>