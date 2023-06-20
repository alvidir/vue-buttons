import { App } from "vue";
import RegularButton from "./RegularButton.vue";
import SubmitButton from "./SubmitButton.vue";
import SwitchButton from "./SwitchButton.vue";
import CheckButton from "./CheckButton.vue";

function include(app: App): App {
  return app
    .component("regular-button", RegularButton)
    .component("submit-button", SubmitButton)
    .component("switch-button", SwitchButton)
    .component("check-button", CheckButton);
}

export default include;
export { RegularButton, SubmitButton, SwitchButton, CheckButton };
