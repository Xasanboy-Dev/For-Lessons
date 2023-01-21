<script lang="ts">
	import axios from "axios";
	let allUsers: any;
	axios.get("http://localhost:7070/users").then((res) => {
		console.log(res.data);
	});
	let name: string;
	let lastname: string;
	let email: string;
	let password: string;
	function register() {
		if (
			name !== undefined &&
			lastname !== undefined &&
			email !== undefined &&
			password !== undefined
		) {
			let user = { name, lastname, email, password };
			axios
				.post("http://localhost:7070/register", { user })
				.then((res) => {
					console.log(res.data.message);
				});
		}
	}
</script>

<div class="container">
	<div class="form">
		<form>
			<h3>Register</h3>
			<input type="email" bind:value={email} placeholder="Email" />
			<input
				type="password"
				bind:value={password}
				placeholder="Password"
			/>
			<input type="text" bind:value={name} placeholder="Name" />
			<input type="text" bind:value={lastname} placeholder="Lastname" />
			<div class="div">
				<button type="submit" on:click={() => register()}
					>Registration</button
				>
			</div>
		</form>
	</div>
	<div class="content">
		<h3>Users table</h3>
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Email</th>
					<th>Password</th>
					<th>Name</th>
					<th>Surname</th>
				</tr>
			</thead>
			<tbody>
				{#if allUsers !== undefined}
					{#each allUsers as user}
						{console.log(user)}
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 50px;
	}
	.form {
		width: 300px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.content {
		width: 100%;
	}
	th,
	td {
		border: 2px solid black;
		padding: 5px 10px;
	}
	.div {
		display: flex;
		justify-content: center;
	}
</style>
