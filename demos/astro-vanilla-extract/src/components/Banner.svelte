<script lang="ts">
	import bannerSrcsetAvif from '~assets/newsletter-banner.jpg?w=1216;608;312&format=avif&srcset';
	import bannerSrcsetWebp from '~assets/newsletter-banner.jpg?w=1216;608;312&format=webp&srcset';
	import bannerSrcset from '~assets/newsletter-banner.jpg?w=1216;608;312&srcset';
	import bannerSrc from '~assets/newsletter-banner.jpg?w=608';

	const width = 608;
	const height = 342;
	const sizes = `(max-width: 360px) 312px, (max-width: 414px) 366px, ${width}`;
</script>

<picture>
	<source {sizes} srcset={bannerSrcsetAvif} type="image/avif" {width} {height} />
	<source {sizes} srcset={bannerSrcsetWebp} type="image/webp" {width} {height} />
	<source {sizes} srcset={bannerSrcset} type="image/jpeg" {width} {height} />
	<img
		alt="desk with laptop computer and zen mood"
		loading="eager"
		fetchpriority="high"
		decoding="async"
		{width}
		{height}
		src={bannerSrc}
	/>
</picture>
