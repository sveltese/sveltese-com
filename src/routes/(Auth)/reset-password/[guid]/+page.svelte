<script lang="ts">
	import Logo from '$lib/shared/Logo.svelte'
	export let data
	const { email } = data
</script>

<div class="mx-auto sm:mt-64 my-8 content">
	<div class="flex justify-center items-center my-8">
		<Logo />
	</div>
</div>
<!-- w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg -->
<div class="card w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg px-6 py-4">
	<form>
		<div>
			<label class="block tracking-wide text-black text-sm mb-2" for="email"> Email </label>
			<input
				class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
				id="email"
				type="email"
				value={email}
			/>
			<div class="mt-2">
				<p class="text-sm text-red-600" style="display: none;" />
			</div>
		</div>

		<div>
			<label class="block tracking-wide text-black text-sm mb-2" for="password"> Password </label>
			<input
				class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
				id="password"
				type="password"
			/>
			<div class="mt-2">
				<p class="text-sm text-red-600" style="display: none;" />
			</div>
		</div>
		<div>
			<label class="block tracking-wide text-black text-sm mb-2" for="confirm-password">
				Confirm Password
			</label>
			<input
				class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
				id="confirm-password"
				type="password"
			/>
			<div class="mt-2">
				<p class="text-sm text-red-600" style="display: none;" />
			</div>
		</div>

		<div class="flex items-center justify-end mt-4">
			<button
				type="submit"
				class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4"
			>
				Reset Password
			</button>
		</div>
	</form>
</div>
