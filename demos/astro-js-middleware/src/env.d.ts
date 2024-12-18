/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly LOGTAIL_SOURCE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      timestamp: string;
    }
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}
