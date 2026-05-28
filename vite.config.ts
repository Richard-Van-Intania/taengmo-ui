import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    dts({
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),

      name: "TaengmoUI",

      fileName: "index",

      formats: ["es"],
    },

    cssCodeSplit: false,

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
