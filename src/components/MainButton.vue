<template>
	<button type="submit">{{ title }}</button>
</template>

<script>
export default {
	name: 'MainButton',
	props: ['title']
}
</script>

<style scoped>
button {
	background: rgb(31, 31, 31);
	color: #cc84ff;
	padding: 14px;
	border-radius: 20px;
	font-weight: bold;
	cursor: pointer;
	font-size: 15px;
}

button:hover {
	background: rgb(56, 56, 56);
}
</style>