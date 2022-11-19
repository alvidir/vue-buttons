<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div id="app">
    <div class="demo-set light">
      <div class="demo-subset bg-secondary">
        <div class="demo-item">
          <submit-button
            @submit="load"
            :loading="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-bulb"></i>
            click me
          </submit-button>
        </div>
        <div class="demo-item">
          <regular-button
            @click="disable"
            :active="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-cheese"></i>
            <label>click me &#9660;</label>
          </regular-button>
        </div>
        <div class="demo-item">
          <switch-button
            @switch="changeSize"
            :disabled="disabled"
            :checked="large"
            :large="large"
          >
          </switch-button>
        </div>
      </div>
      <div class="demo-subset bg-primary">
        <div class="demo-item">
          <submit-button
            @submit="load"
            :loading="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-bulb"></i>
            click me
          </submit-button>
        </div>
        <div class="demo-item">
          <regular-button
            @click="disable"
            :active="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-cheese"></i>
            <label>click me &#9660;</label>
          </regular-button>
        </div>
        <div class="demo-item">
          <switch-button
            @switch="changeSize"
            :disabled="disabled"
            :checked="large"
            :large="large"
          >
          </switch-button>
        </div>
      </div>
    </div>
    <div class="demo-set dark">
      <div class="demo-subset bg-secondary">
        <div class="demo-item">
          <submit-button
            @submit="load"
            :loading="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-bulb"></i>
            click me
          </submit-button>
        </div>
        <div class="demo-item">
          <regular-button
            @click="disable"
            :active="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-cheese"></i>
            <label>click me &#9660;</label>
          </regular-button>
        </div>
        <div class="demo-item">
          <switch-button
            @switch="changeSize"
            :disabled="disabled"
            :checked="large"
            :large="large"
          >
          </switch-button>
        </div>
      </div>
      <div class="demo-subset bg-primary">
        <div class="demo-item">
          <submit-button
            @submit="load"
            :loading="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-bulb"></i>
            click me
          </submit-button>
        </div>
        <div class="demo-item">
          <regular-button
            @click="disable"
            :active="loading"
            :disabled="disabled"
            :large="large"
          >
            <i class="bx bxs-cheese"></i>
            <label>click me &#9660;</label>
          </regular-button>
        </div>
        <div class="demo-item">
          <switch-button
            @switch="changeSize"
            :disabled="disabled"
            :checked="large"
            :large="large"
          >
          </switch-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServeDev",
  data() {
    return {
      loading: false,
      disabled: false,
      large: false,
    };
  },

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 5000);
    },

    disable() {
      this.disabled = true;
      setTimeout(() => (this.disabled = false), 5000);
    },

    changeSize(value: boolean) {
      console.log(value);
      this.large = value;
    },
  },

  mounted() {
    setTimeout(() => (this.large = true), 1000);
  },
});
</script>

<style lang="scss">
@import "fibonacci-styles";

* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
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
}

.demo-set {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  &.light {
    @extend .theme-light;
  }

  &.dark {
    @extend .theme-dark;
  }

  .demo-subset {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;

    &.bg-primary {
      background-color: var(--color-bg-primary) !important;
    }

    &.bg-secondary {
      background-color: var(--color-bg-secondary) !important;
    }
  }
}

.demo-item {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
