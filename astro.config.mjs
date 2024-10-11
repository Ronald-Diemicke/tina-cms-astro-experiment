import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tina from "astro-tina";
import sitemap from '@astrojs/sitemap';


export default defineConfig({
    integrations: [tina(), react(), sitemap()],
});