import { defineConfig } from "vite";
import { cssTransform } from "./src/cssTransform/cssTransform";
import { vitePrefixTransformPlugin } from "./src/viteTransform/vitePrefixTransformPlugin";

export default defineConfig({
  plugins: [vitePrefixTransformPlugin()],
  css: {
    transformer: "lightningcss",
    lightningcss: cssTransform,
  },
  build: {
    cssMinify: "lightningcss",
  },
});
