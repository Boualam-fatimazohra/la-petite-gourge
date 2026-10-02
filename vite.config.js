import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" : le site marche sur GitHub Pages (sous-dossier), Netlify, Vercel…
export default defineConfig({ plugins: [react()], base: "./" });
