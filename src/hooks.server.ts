import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/favicon.ico") redirect(302, "/favicon.svg");
  return await resolve(event);
};
