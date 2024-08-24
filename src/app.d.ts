// See https://kit.svelte.dev/docs/types#app

import type { ColorName } from "$lib/data/ColorName";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      bg: ColorName;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
