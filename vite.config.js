import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), eslint],
=======
  plugins: [react(), eslint()],
  server: {
    hmr: {
      overlay: false,
    },
  },
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
});
