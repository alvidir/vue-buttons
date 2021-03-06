import RegularButton from './RegularButton.vue'
import SubmitButton from './SubmitButton.vue'
import SwitchButton from './SwitchButton.vue'

const REGULAR_BUTTON_TAG = "regular-button"
const SUBMIT_BUTTON_TAG = "submit-button"
const SWITCH_BUTTON_TAG = "switch-button"

export default {
    RegularButton,
    SubmitButton,
    SwitchButton,
}

export function include(app: any): any {
    app.component(REGULAR_BUTTON_TAG, RegularButton)
       .component(SUBMIT_BUTTON_TAG, SubmitButton)
       .component(SWITCH_BUTTON_TAG, SwitchButton)
}