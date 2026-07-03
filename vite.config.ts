import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Vercel waits for the Node process to exit after build. Some plugins
    // leave timers/handles open, which causes deployments to hang forever.
    // https://vercel.com/kb/guide/fixing-deployments-that-hang-after-the-build-step-succeeds
    {
      name: "force-exit-after-build",
      apply: "build",
      closeBundle() {
        setTimeout(() => process.exit(0), 0);
      },
    },
  ],
  build: {
    chunkSizeWarningLimit: 700,
    watch: null,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
