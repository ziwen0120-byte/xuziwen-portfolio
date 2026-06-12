import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "cinematic-portfolio/src"),
    },
  },
  build: {
    outDir: "cinematic-portfolio/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "cinematic-portfolio/index.html"),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: false,
  },
});
