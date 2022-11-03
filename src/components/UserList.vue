<template>
	<h1>User Lsit</h1>
	<template v-for="user in users" :key="user.id">
		<p v-text="user.name"></p>
	</template>
</template>

<script>
import { onMounted, reactive } from 'vue'
export default {
	setup() {
		let users = reactive([])
		let data = [{ id: 1, name: 'Anas' }, { id: 2, name: 'Mohammed' }, { id: 1, name: 'Kamal' }]

		function getUsers() {
			users.push(...data)
		}

		onMounted(() => {
			getUsers()
		})

		return {
			users,
			getUsers
		}
	}
}
</script>

<style>

</style>