import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/todo-list/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["todo-list-sktwith-20260528b.loca.lt"]
  }
});
