<template>
	<form action="" @submit.prevent="sendData()">
		<MainInput v-for="input in inputs" :key="input.id" :placeholder="input.placeholder"
			@getInputValue="input.valueHandler" />

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

		let inputs = ref([
			{
				id: 1,
				placeholder: 'Name',
				valueHandler: hundleNameInputValue
			},
			{
				id: 2,
				placeholder: 'Age',
				valueHandler: hundleAgeInputValue
			},
			{
				id: 3,
				placeholder: 'Country',
				valueHandler: hundleCountryInputValue
			}
		])

		return {
			hundleNameInputValue,
			hundleAgeInputValue,
			hundleCountryInputValue,
			sendData,
			inputs
		}
	}
}
</script>