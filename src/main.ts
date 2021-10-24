import SubmitButton from './SubmitButton.vue'

export default {
    install(Vue: any, options: any) {
        Vue.component("submit-button", SubmitButton);
    }
};

// for debugging
import { createApp } from 'vue'
import Demo from "./demo.vue";

createApp(Demo).mount('#app')