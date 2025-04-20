import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: true, // xatolikni ekraning o‘zida ko‘rsatadi
    },
  },
});
