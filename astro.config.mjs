import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://y-boost.com",
  base: "/",
  integrations: [icon(), tailwind()],
});
