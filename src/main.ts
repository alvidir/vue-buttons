import { App } from "vue";
import RegularButton from "./RegularButton.vue";
import SubmitButton from "./SubmitButton.vue";
import SwitchButton from "./SwitchButton.vue";

function include(app: App): App {
  return app
    .component("regular-button", RegularButton)
    .component("submit-button", SubmitButton)
    .component("switch-button", SwitchButton);
}

export default include;
export { RegularButton, SubmitButton, SwitchButton };
