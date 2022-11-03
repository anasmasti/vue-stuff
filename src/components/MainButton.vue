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
	background: rgb(36, 36, 36);
	color: #ecd1ff;
	padding: 14px;
	border-radius: 12px;
	font-weight: 900;
	cursor: pointer;
	font-size: 15px;
}

button:hover {
	background: rgb(56, 56, 56);
}
</style>