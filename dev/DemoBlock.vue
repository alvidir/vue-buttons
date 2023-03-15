<template>
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
      @click="onRegularButtonClick"
      :active="active"
      :disabled="disabled"
      :large="large"
    >
      <i class="bx bxs-cheese"></i>
      <label>click me &#9660;</label>
    </regular-button>
  </div>
  <div class="demo-item">
    <switch-button
      @switch="onSwitchButtonClick"
      :disabled="disabled"
      :checked="!disabled"
      :large="large"
    >
    </switch-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = ref(false);
const disabled = ref(false);
const active = ref(false);
const large = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 5000);
};

const onRegularButtonClick = () => {
  active.value = !active.value;
};

const onSwitchButtonClick = () => {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 3000);
};

onMounted(() => {
  setTimeout(() => (large.value = true), 1000);
});
</script>

<style lang="scss">
@import "fibonacci-styles";

.demo-item {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
