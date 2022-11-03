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

<style scoped>
input {
    border-radius: 12px;
    padding: 10px;
    border: none;
    background: #ecd1ff;
    border: 1px solid #cc84ff;
}
input::placeholder {
    color: #cc84ff;
    font-weight: bold;
}
</style>