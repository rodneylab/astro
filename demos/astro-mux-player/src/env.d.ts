/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_MUX_PLAYBACK_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
