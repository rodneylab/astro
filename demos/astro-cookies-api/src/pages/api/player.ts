import type { APIRoute } from "astro";

const siteUrl = import.meta.env.PUBLIC_SITE_URL;

export const POST: APIRoute = async function POST({
  cookies,
  redirect,
  request,
}) {
  try {
    const { url: requestUrl } = request;
    const { searchParams } = new URL(requestUrl);
    const startTime = searchParams.get("startTime");
    console.log({ startTime });

    cookies.set("start-time", startTime, { path: "/" });

    return new Response("", { status: 200 });
  } catch (error: unknown) {
    console.error(`Error in player api route: ${error as string}`);
    return redirect(`${siteUrl}/`);
  }
};
