import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function spaFallback() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const index = resolve("dist/index.html");
      if (existsSync(index)) copyFileSync(index, resolve("dist/404.html"));
    },
  };
}

export default defineConfig({
  // En GitHub Pages se compila con VITE_BASE=/LUWING-WEB/.
  // En local queda "/" para que el servidor de desarrollo funcione en la raíz.
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss(), spaFallback()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "es2022",
  },
});
