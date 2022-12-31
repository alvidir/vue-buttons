import { App } from "vue";
import RegularButton from "./RegularButton.vue";
import SubmitButton from "./SubmitButton.vue";
import SwitchButton from "./SwitchButton.vue";

const REGULAR_BUTTON_TAG = "regular-button";
const SUBMIT_BUTTON_TAG = "submit-button";
const SWITCH_BUTTON_TAG = "switch-button";

function include(app: App): App {
  return app
    .component(REGULAR_BUTTON_TAG, RegularButton)
    .component(SUBMIT_BUTTON_TAG, SubmitButton)
    .component(SWITCH_BUTTON_TAG, SwitchButton);
}

export default {
  RegularButton,
  SubmitButton,
  SwitchButton,
};

export { include, REGULAR_BUTTON_TAG, SUBMIT_BUTTON_TAG, SWITCH_BUTTON_TAG };
