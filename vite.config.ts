import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    cssCodeSplit: true,
    // Drop the auto-emitted <link rel="modulepreload"> tags. They burn
    // ~70 KB of bandwidth in parallel with the prerendered HTML on simulated
    // slow 4G, pushing FCP/LCP above the green thresholds. Hydration kicks
    // in slightly later, but the first paint is from the SSR markup so the
    // perceived speed is unchanged.
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) return "router";
            if (id.includes("react")) return "react";
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
