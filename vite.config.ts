import { defineConfig } from "vite";
import { cssTransform } from "./src/cssTransform/cssTransform";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: cssTransform,
  },
  build: {
    cssMinify: "lightningcss",
  },
});
