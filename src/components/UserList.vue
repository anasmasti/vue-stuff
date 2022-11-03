<template>
	<h1>User Lsit</h1>
	<template v-for="user in users" :key="user.id">
		<h4><strong v-text="user.name"></strong></h4>
		<p v-text="user.email"></p>
	</template>
</template>

<script>
import { onMounted, reactive } from 'vue'
import fetchUsers from '../services/users/fetchUsers'
export default {
	setup() {
		let users = reactive([])
		// let data = [{ id: 1, name: 'Anas' }, { id: 2, name: 'Mohammed' }, { id: 1, name: 'Kamal' }]

		function getUsers() {
			fetchUsers().then((data) => users.push(...data))
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