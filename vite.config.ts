import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],

  server: {
    port: 5175,
    open: true,
    host: "0.0.0.0",
    allowedHosts: ["localhost:*", "leisured-merlyn-showily.ngrok-free.dev"],
  },
});
