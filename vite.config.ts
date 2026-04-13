import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
    plugins: [react()],
    base,
    server: {
        proxy: {
            "/api": {
                target: "https://dummyjson.com",
                changeOrigin: true,
                secure: true,
                rewrite: (proxyPath) => proxyPath.replace(/^\/api/, ""),
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
