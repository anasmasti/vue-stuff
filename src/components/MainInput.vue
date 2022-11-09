<template>
    <input type="text" v-model="inputValue" @change="getInputValue">
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
    name: 'MainInput',
    props: ['isSended'],
    setup(props, context) {
        let inputValue = ref("")

        // Observe props to empty inputs after sending data
        watchEffect((props.isSended, () => {
            if (props.isSended) {
                inputValue.value = ""
            }
        }))

        // Send event to the parent
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

<style scoped>
input {
    border-radius: 12px;
    padding: 10px;
    border: none;
    background: #efd8ff;
    border: 1px solid #d69cff;
}

input::placeholder {
    color: #d190ff;
    font-weight: 700;
}
</style>