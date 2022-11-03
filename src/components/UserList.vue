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
		// let data = [{ id: 1, name: 'Anas' }, { id: 2, name: 'Mohammed' }, { id: 1, name: 'Kamal' }]

		function getUsers() {
			fetchUsers().then((data) => users.push(...refactorData(data)))
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

<style scoped>
#card {
	background: rgb(43, 43, 43);
	margin: 8px;
	padding: 16px;
	text-align: center;
	border-radius: 15px;
	color: #ecd1ff !important;
}

h1 {
	font-weight: bold;
	font-size: 40px;
}
</style>