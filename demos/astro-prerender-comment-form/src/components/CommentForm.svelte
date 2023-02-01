<script lang="ts">
	const siteUrl = import.meta.env.PUBLIC_SITE_URL;
	const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<form action={`${siteUrl}/api/message`} method="post">
	<label for="name" class="screen-reader-text">Name</label>
	<input id="name" name="name" type="text" required placeholder="Your Name" title="Name" />
	<label for="email" class="screen-reader-text">Email</label>
	<input
		id="email"
		name="email"
		type="text"
		required
		placeholder="river@example.com"
		title="Email"
	/>
	<label for="email" class="screen-reader-text">Comment</label>
	<textarea id="comment" name="comment" required placeholder="Your comment…" rows="5" />
	<button type="submit">Submit</button>
	<div class="cf-turnstile" data-sitekey={turnstileSiteKey} data-size="compact" />
</form>

<style>
	button {
		all: unset;
		cursor: pointer;
		background-color: var(--colour-light);
		color: var(--colour-brand);
		padding: var(--spacing-2);
		margin-bottom: var(--spacing-6);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
		text-align: center;
	}

	button:focus {
		outline: var(--spacing-px-2) solid var(--colour-alt);
	}

	button:focus,
	button:hover {
		background-color: var(--colour-light-alpha-90);
	}

	textarea {
		resize: none;
	}

	button,
	input,
	textarea {
		border-radius: var(--spacing-1);
	}

	input,
	textarea {
		text-indent: var(--spacing-2);
		line-height: 1.75;
		margin-bottom: var(--spacing-4);
		border-radius: var(--spacing-1);
		border-style: none;
		font-size: var(--font-size-2);
	}

	.cf-turnstile {
		margin-left: auto;
	}
</style>
