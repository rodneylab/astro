<script>
	let altColours = $state(false);
</script>

<section class={`container${altColours ? ' container-alt' : ''}`}>
	<h2>Svelte Component</h2>
	<div class="video-container">
		<iframe
			title="Trying Svelte for the Third Time"
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/xgER1OutVvU"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
	<button
		class={`button${altColours ? ' button-alt' : ''}`}
		onclick={() => {
			altColours = !altColours;
		}}><span class="screen-reader-text">Toggle colours</span></button
	>
</section>

<style lang="scss">
@use '../styles/variables';

	.container {
		display: flex;
		flex-direction: column;
		background: hsl(variables.$colour-brand-hue variables.$colour-brand-saturation variables.$colour-brand-luminance);
		align-items: center;
		width: 100%;
		padding: variables.$spacing-8 variables.$spacing-0;
		color: hsl(variables.$colour-dark-text-hue variables.$colour-dark-text-saturation variables.$colour-dark-text-luminance);
	}

	.container-alt {
		background: hsl(variables.$colour-secondary-hue variables.$colour-secondary-saturation variables.$colour-secondary-luminance);

		color: hsl(variables.$colour-light-text-hue variables.$colour-light-text-saturation variables.$colour-light-text-luminance);
	}

	.button {
		background: hsl(variables.$colour-secondary-hue variables.$colour-secondary-saturation variables.$colour-secondary-luminance);
	}

	.button-alt {
		background: hsl(variables.$colour-brand-hue variables.$colour-brand-saturation variables.$colour-brand-luminance);
	}
</style>
