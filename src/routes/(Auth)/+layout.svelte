<script lang="ts">
	import Footer from '$lib/ui/Footer.svelte'
	import Nav from '$lib/ui/Nav.svelte'
	import '../../app.postcss'
	import { APP_NAME } from '$lib/config'
</script>

<svelte:head>
	<title>{APP_NAME}</title>
</svelte:head>

<div class="mx-auto">
	<slot />
</div>

<style>
</style>
