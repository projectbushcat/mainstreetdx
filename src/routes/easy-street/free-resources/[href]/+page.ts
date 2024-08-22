import { AllResources, type FreeResource } from "$lib/data/EasyStreet";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = (event) => {
  const href = event.params.href;
  let resource: FreeResource | undefined = AllResources.find((r) => r.href === href);

  if (resource) {
    return {
      greeting: `hey there, snoop. we left our proompts visible for you. enjoy :)`,
      bg: resource.surface,
      href,
      resource
    };
  } else {
    error(404);
  }
};
