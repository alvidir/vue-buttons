<template>
  <div id="app">
    <div class="demo-item">
      <submit-button @submit="load"
                    :loading="loading"
                    :disabled="disabled"
                    :large="large">
        click me
      </submit-button>
    </div>
    <div class="demo-item">
      <regular-button @click="disable"
                      :disabled="disabled"
                      :large="large">
        click me
      </regular-button>
    </div>
    <div class="demo-item">
      <switch-button @switch="changeSize"
                     :disabled="disabled"
                     :checked="large"
                     :large="large">
      </switch-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServeDev',
  data() {
    return {
      loading: false,
      disabled: false,
      large: false,
    }
  },

  methods: {
    load() {
      this.loading = true
      setTimeout(() => this.loading = false, 5000)
    },

    disable() {
      this.disabled = true
      setTimeout(() => this.disabled = false, 5000)
    },

    changeSize(value: boolean) {
      console.log(value)
      this.large = value
    }
  },

  mounted() {
    setTimeout(() => this.large = true, 1000)
  }
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
  @extend .theme-light;

  margin: 0;
  padding: 0;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: row;
  width: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;

  background: var(--color-background-secondary);
}

.demo-item {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>