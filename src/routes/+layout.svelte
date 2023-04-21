<script lang="ts">
	import '../app.postcss'
	import { APP_NAME } from '$lib/config'
</script>

<svelte:head>
	<title>{APP_NAME}</title>
</svelte:head>

<slot />
