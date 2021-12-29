import RegularButton from './RegularButton.vue'
import SubmitButton from './SubmitButton.vue'
import SwitchButton from './SwitchButton.vue'
import ButtonSet from './ButtonSet.vue'
import { defineCustomElement } from "vue"

const REGULAR_BUTTON_TAG = "regular-button"
const SUBMIT_BUTTON_TAG = "submit-button"
const SWITCH_BUTTON_TAG = "switch-button"
const BUTTON_SET_TAG = "button-set"

export default {
    RegularButton,
    SubmitButton,
    SwitchButton,
    ButtonSet
}

export function include(app: any): any {
    app.component(REGULAR_BUTTON_TAG, RegularButton)
       .component(SUBMIT_BUTTON_TAG, SubmitButton)
       .component(SWITCH_BUTTON_TAG, SwitchButton)
       .component(BUTTON_SET_TAG, ButtonSet)
}