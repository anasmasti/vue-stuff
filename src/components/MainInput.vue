<template>
    <input type="text" v-model="inputValue" @change="getInputValue">
</template>
<script>
import { ref, watch } from 'vue';

export default {
    name: 'MainInput',
    props: ['isSended'],
    setup(props, context) {
        let inputValue = ref("")

        watch((props.isSended, () => {
            if (props.isSended) {
                inputValue.value = ""
            }
        }))

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