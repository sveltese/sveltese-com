<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	const user = data.user
</script>

Dashboard
{user.email}
