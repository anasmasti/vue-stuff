<template>
	<form action="" @submit="sendData()">
		<MainInput @getInputValue="hundleInputValue()" />
		<MainButton title="Send" />

		{{inputValue}}
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
		let inputValue = ref("")
		function hundleInputValue(value) {
			inputValue.value = value
			console.log('value', value);
		}

		function sendData() {

		}
		return {
			hundleInputValue,
			sendData
		}
	}
}
</script>