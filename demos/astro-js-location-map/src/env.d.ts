/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_MAPBOX_ACCESS_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
