// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://qqbbgisme.github.io",
  base: "/PwC_Internship_Journey",
  vite: {
    plugins: [tailwindcss()],
  },
});
