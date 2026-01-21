<script lang="ts">
	export let page = 0
	export let rowCount = 0
	export let limit = 0
	export let offset = 0

	let maxPage = 0

	$: maxPage = Math.ceil(rowCount / limit)

	$: offset = limit * page

	const onPrevClick = () => {
		if (page > 0) {
			page = page - 1
		}
	}

	const onNextClick = () => {
		if (page < maxPage - 1) {
			page = page + 1
		}
	}
</script>

<div class="flex items-center justify-between">
	<div class="flex items-center gap-2">
		<div>
			Total number: {rowCount}
		</div>

		<div>
			shown: {limit + offset <= rowCount ? limit : rowCount % limit}
		</div>
	</div>

	<div class="flex items-center justify-center gap-4">
		<div class="flex items-center justify-center gap-2">
			Page:
			{page + 1}
		</div>
		<div class="flex items-center justify-center gap-2">
			<button
				on:click={() => (page = 0)}
				class="w-[30px] h-[30px] hover:text-blue-500 flex items-center justify-center"
			>
				<span class="material-icons-outlined"> keyboard_double_arrow_left </span>
			</button>
			<button
				on:click={() => onPrevClick()}
				class="w-[30px] h-[30px] hover:text-blue-500 flex items-center justify-center"
			>
				<span class="material-icons-outlined"> keyboard_arrow_left </span>
			</button>
			<button on:click={() => (page = 0)} class="page-button" class:active={page === 0}> 1 </button>
			{#if maxPage > 1}
				<button on:click={() => (page = 1)} class="page-button" class:active={page === 1}>
					2
				</button>
			{/if}
			{#if maxPage > 2}
				<button on:click={() => (page = 2)} class="page-button" class:active={page === 2}>
					3
				</button>
			{/if}
			{#if maxPage > 3}
				<button on:click={() => (page = 3)} class="page-button" class:active={page === 3}>
					4
				</button>
			{/if}
			{#if maxPage > 5}
				<div class="p-1">...</div>
				<button
					on:click={() => (page = maxPage - 1)}
					class="page-button"
					class:active={page === maxPage - 1}
				>
					{maxPage}
				</button>
			{/if}

			<button
				on:click={() => onNextClick()}
				class="w-[30px] h-[30px] hover:text-blue-500 flex items-center justify-center"
			>
				<span class="material-icons-outlined"> keyboard_arrow_right </span>
			</button>
			<button
				on:click={() => (page = maxPage - 1)}
				class="w-[30px] h-[30px] hover:text-blue-500 flex items-center justify-center"
			>
				<span class="material-icons-outlined"> keyboard_double_arrow_right </span>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.page-button {
		@apply w-[30px] h-[30px] flex items-center justify-center hover:text-blue-500;
	}

	.page-button.active {
		@apply bg-blue-500 text-white rounded-xl;
	}
</style>
