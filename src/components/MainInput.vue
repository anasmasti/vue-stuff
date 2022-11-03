<template>
    <input type="text" v-model="inputValue" @change="getInputValue">
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MainInput',
    setup(_, context) {
        let inputValue = ref("")

        function getInputValue() {
            context.emit("getInputValue", inputValue.value)
        }

        return {
            getInputValue,
            inputValue
        }
    }
}
</script>