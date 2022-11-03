<template>
    <input type="text" v-model="inputValue" @change="getInputValue">
    <p v-text="inputValue"></p>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MainInput',
    setup(_, context) {
        let inputValue = ref("")
        function getInputValue() {
            console.log(inputValue.value);
            context.emit("getInputValue", inputValue.value)
        }

        return {
            getInputValue,
            inputValue
        }
    }
}
</script>