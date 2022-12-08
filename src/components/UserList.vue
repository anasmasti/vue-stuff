<template>
	<h1>User List</h1>
	<div v-for="user in users" :key="user.id" id="card">
		<h4><strong v-text="user.name"></strong></h4>
		<p><small v-text="user.email"></small></p>
	</div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import fetchUsers from '../services/users/fetchUsers'
import refactorData from '../services/utils/refactorData'

export default {
	setup() {
		let users = reactive([])

		// Get users and refactor data
		function getUsers() {
			fetchUsers().then((data) => users.push(...refactorData(data)))
		}

		// Get users data at component mounting
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

<style scoped>
#card {
	background: rgb(36, 36, 36);
	margin: 8px;
	padding: 16px;
	text-align: center;
	border-radius: 12px;
	color: #ecd1ff !important;
}

#card>h4 {
	font-weight: 900;
}

h1 {
	font-weight: 900;
	font-size: 40px;
}
</style>