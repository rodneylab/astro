<script>
	let altColours = false;
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
		/>
	</div>
	<button
		class={`button${altColours ? ' button-alt' : ''}`}
		on:click={() => {
			altColours = !altColours;
		}}><span class="screen-reader-text">Toggle colours</span></button
	>
</section>

<style lang="scss">
	@import '../styles/variables';

	.container {
		display: flex;
		flex-direction: column;
		background: hsl($colour-brand-hue $colour-brand-saturation $colour-brand-luminance);
		align-items: center;
		width: 100%;
		padding: $spacing-8 $spacing-0;
		color: hsl($colour-dark-text-hue $colour-dark-text-saturation $colour-dark-text-luminance);
	}

	.container-alt {
		background: hsl($colour-secondary-hue $colour-secondary-saturation $colour-secondary-luminance);

		color: hsl($colour-light-text-hue $colour-light-text-saturation $colour-light-text-luminance);
	}

	.button {
		background: hsl($colour-secondary-hue $colour-secondary-saturation $colour-secondary-luminance);
	}

	.button-alt {
		background: hsl($colour-brand-hue $colour-brand-saturation $colour-brand-luminance);
	}
</style>
