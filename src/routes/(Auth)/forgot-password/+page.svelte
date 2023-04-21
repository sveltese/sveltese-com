<script lang="ts">
	import Logo from '$lib/ui/Logo.svelte'
</script>

<div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
	<div>
		<a href="/" class="flex items-center justify-center">
			<Logo />
		</a>
	</div>
	<div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
		<!---->
		<form>
			<div>
				<label class="block font-medium text-sm text-gray-700" for="email"><span>Email</span></label
				><input
					class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
					id="email"
					type="email"
					required=""
					autofocus=""
					autocomplete="username"
				/>
				<div class="mt-2" style="display: none;"><p class="text-sm text-red-600" /></div>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				/>
			</div>
			<div class="mt-4">
				<label class="block font-medium text-sm text-gray-700" for="password"
					><span>Password</span></label
				><input
					class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
					id="password"
					type="password"
					required=""
					autocomplete="current-password"
				/>
				<div class="mt-2" style="display: none;"><p class="text-sm text-red-600" /></div>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				/>
			</div>
			<div class="block mt-4">
				<label class="flex items-center"
					><input
						type="checkbox"
						class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
						name="remember"
					/><span class="ml-2 text-sm text-gray-600">Remember me</span></label
				>
			</div>
			<div class="flex items-center justify-end mt-4">
				<a
					class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					href="https://jetstream.test/forgot-password"
				>
					Forgot your password?
				</a><button
					type="submit"
					class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4"
				>
					Log in
				</button>
			</div>
		</form>
	</div>
</div>
