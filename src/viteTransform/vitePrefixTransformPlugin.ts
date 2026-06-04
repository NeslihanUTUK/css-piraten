import type { Plugin } from "vite";
import { jsxPrefixTransform } from "./jsxPrefixTransform";

export function vitePrefixTransformPlugin(): Plugin {
  return {
    name: "vite-prefix-transform",
    transform(code, id) {
      if (!/\.(?:jsx|tsx)$/.test(id) || id.includes("node_modules")) {
        return null;
      }

      const nextCode = jsxPrefixTransform(code);

      if (nextCode === code) {
        return null;
      }

      return { code: nextCode, map: null };
    },
  };
}
