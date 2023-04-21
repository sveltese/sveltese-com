<script lang="ts">
	import { APP_NAME } from '$lib/config'
</script>

<body class="bg-gray-100">
	<div class="wrapper">
		<nav class="absolute top-0 right-0 pt-4 pr-4">
			<a href="/login" class="text-gray-600 hover:text-gray-800 font-medium mr-4">Login</a>
			<a href="/register" class="text-gray-600 hover:text-gray-800 font-medium mr-4">Register</a>
		</nav>
		<div class="mx-auto sm:mt-64 my-8 content">
			<div class="flex justify-center items-center my-8">
				<img src="logo.png" alt="Logo" class="w-32 mr-4" />
				<!-- <h1 class="text-3xl font-bold">{APP_NAME}</h1> -->
			</div>
			<div class="grid sm:grid-cols-2 grid-rows-2 gap-6">
				<div class="bg-white shadow-md rounded-lg px-6 py-8">
					<div class="w-full mb-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold mb-2">Start Coding Fast</h2>
					<p class="text-gray-700">Use this template in GitHub</p>
				</div>
				<div class="bg-white shadow-md rounded-lg px-6 py-8">
					<div class="w-full mb-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold mb-2">Authentication Built In</h2>
					<p class="text-gray-700">
						Everything you need to start building your app without rebuilding the basics.
					</p>
				</div>
				<div class="bg-white shadow-md rounded-lg px-6 py-8">
					<div class="w-full mb-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold mb-2">Environment Management</h2>
					<p class="text-gray-700">
						Use .env files to control production and development in a predicatble way.
					</p>
				</div>
				<div class="bg-white shadow-md rounded-lg px-6 py-8">
					<div class="w-full mb-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold mb-2">Stack</h2>
					<p class="text-gray-700">Initial database migrations using Prisma and xod.</p>
				</div>
			</div>
		</div>
		<footer class="text-center text-gray-600 text-sm mt-auto">
			&copy; 2023 {APP_NAME}. All rights reserved.
		</footer>
	</div>
</body>

<style>
	body {
		min-height: 100vh;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.content {
		flex-grow: 1;
	}
</style>
