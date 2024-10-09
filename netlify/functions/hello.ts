import type { Config, Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  console.log("hello world");
  return new Response("Hello World");
};

export const config: Config = {
  path: "/*",
  preferStatic: true,
};
