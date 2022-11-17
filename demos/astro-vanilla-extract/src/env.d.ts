/// <reference types="astro/client" />

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		fetchpriority?: 'auto' | 'high' | 'low';
	}
}

declare module '*.jpg?w=608';
declare module '*.jpg?w=1216;608;312&format=avif&srcset';
declare module '*.jpg?w=1216;608;312&format=webp&srcset';
declare module '*.jpg?w=1216;608;312&srcset';
