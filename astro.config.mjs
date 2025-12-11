// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
    vite: {
      plugins: [tailwindcss()],
    },
    site: "https://fayda-studio.vercel.app",
    integrations:[
      sitemap()
    ]
});
