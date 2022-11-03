<template>
	<form action="" @submit.prevent="sendData()">
		<MainInput v-for="input in inputs" :key="input.id" :placeholder="input.placeholder"
			@getInputValue="input.valueHandler" />

		<MainButton title="Send" />
	</form>
</template>

<script>
import { ref } from 'vue'
import MainButton from './MainButton.vue';
import MainInput from './MainInput.vue';

export default {
	name: 'MainForm',
	components: {
		MainButton,
		MainInput
	},
	setup() {
		// Init inputs refs
		let inputNameValue = ref("")
		let inputAgeValue = ref("")
		let inputCountryValue = ref("")
		
		// Hundel input events to get values
		function hundleNameInputValue(value) {
			inputNameValue.value = value
		}
		function hundleAgeInputValue(value) {
			inputAgeValue.value = value
		}
		function hundleCountryInputValue(value) {
			inputCountryValue.value = value
		}

		// Send data on submit
		function sendData() {
			console.log(inputNameValue.value, inputAgeValue.value, inputCountryValue.value);
		}

		// Init inputs 
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