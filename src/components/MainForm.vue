<template>
	<form action="" @submit.prevent="sendData()">
		<MainInput placeholder="Name" @getInputValue="hundleNameInputValue" />
		<MainInput placeholder="Age" @getInputValue="hundleAgeInputValue" />
		<MainInput placeholder="County" @getInputValue="hundleCountryInputValue" />
		<MainButton title="Send" />
	</form>
</template>

<script>
import { ref } from 'vue'
import MainButton from './MainButton.vue'
import MainInput from './MainInput.vue'

export default {
	name: 'MainForm',

	components: {
		MainButton,
		MainInput
	},
	setup() {
		let inputNameValue = ref("")
		let inputAgeValue = ref("")
		let inputCountryValue = ref("")

		function hundleNameInputValue(value) {
			inputNameValue.value = value
		}
		function hundleAgeInputValue(value) {
			inputAgeValue.value = value
		}
		function hundleCountryInputValue(value) {
			inputCountryValue.value = value
		}

		function sendData() {
			console.log(inputNameValue.value, inputAgeValue.value, inputCountryValue.value);
		}

		return {
			hundleNameInputValue,
			hundleAgeInputValue,
			hundleCountryInputValue,
			sendData
		}
	}
}
</script>