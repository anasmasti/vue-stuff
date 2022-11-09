<template>
 <p v-put-color:blue>404 {{ params.id }}</p>	
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

let { params } = useRoute()

onMounted(() => {
	console.log(params)
})
</script>

<style>

</style>