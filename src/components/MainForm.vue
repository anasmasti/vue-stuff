<template>
	<form @submit.prevent="sendData()">
		<MainInput v-for="input in inputs" :key="input.id" :placeholder="input.placeholder"
			@getInputValue="input.valueHandler" :isSended="isSended" />
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
	setup(_, context) {
		// Init inputs refs
		let inputNameValue = ref("")
		let inputAgeValue = ref("")
		let inputCountryValue = ref("")
		let isSended = ref(false)

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
			context.emit('sendData', { name: inputNameValue.value, age: inputAgeValue.value, country: inputCountryValue.value })
			isSended.value = true

			setTimeout(() => {
				isSended.value = false
			}, 100);
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
			inputs,
			isSended
		}
	}
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 18px;
	background: #f6e9ff;
	border-radius: 12px;
}
</style>