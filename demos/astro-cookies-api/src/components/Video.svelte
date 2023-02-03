<script lang="ts">
	export let videoId = import.meta.env.PUBLIC_MUX_PLAYBACK_ID as string;
	export let title = 'Raindrops in Super Slow Motion';
	export let startTime = '0';

	const siteUrl = import.meta.env.PUBLIC_SITE_URL;

	let playerElement: HTMLMediaElement;

	async function handlePause() {
		const currentTime = Math.floor(playerElement.currentTime);
		fetch(`${siteUrl}/api/player?startTime=${currentTime}`, {
			method: 'POST',
		});
	}
</script>

<svelte:head><script src="https://cdn.jsdelivr.net/npm/@mux/mux-player"></script></svelte:head>
<figure>
	<mux-player
		bind:this={playerElement}
		playback-id={videoId}
		stream-type="on-demand"
		{title}
		disable-cookies
		start-time={startTime}
		on:timeupdate={console.log(Math.floor(playerElement.currentTime))}
		on:pause={handlePause}
	/>
	<figcaption>
		{title}. Credit: <a href="https://www.videvo.net/profile/Beachfront">Beachfront</a>
	</figcaption>
</figure>

<style>
	mux-player {
		display: flex;
		max-width: var(--max-width-full);
		aspect-ratio: 16 / 9;
	}
</style>
