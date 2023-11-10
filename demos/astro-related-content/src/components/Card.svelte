<section class="container">
	<div class="content">
		<slot />
	</div>
</section>

<style>
	.container {
		display: flex;
		width: var(--max-width-full);
	}
	.content {
		width: 80%;
		border: var(--spacing-px-2) solid var(--color-theme-1);
		background-color: var(--color-theme-3);
		border-radius: var(--spacing-3);
		margin-block: var(--spacing-6);
		margin-inline: auto;
		padding-block: var(--spacing-4);
		padding-inline: var(--spacing-4);
	}
</style>
