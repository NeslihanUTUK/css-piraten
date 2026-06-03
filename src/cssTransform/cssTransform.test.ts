import { transform } from "lightningcss";
import { it, describe, expect } from "vitest";
import { Buffer } from "node:buffer";
import { cssTransform } from "./cssTransform";

describe("cssTransform", () => {
  it("should unify css with class prefixes ", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
        .utrecht-foo {
          height: 12px;
          width: 12px;
        }
        .amsterdam-foo {
          width: 24px;
        }
      `),
      visitor: cssTransform.visitor,
    });

    expect(res.code.toString()).toBe(`.nlds-foo{width:24px;height:12px}`);
  });

  it("should unify css with pseudo class prefixes", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
        .utrecht-foo:has(.utrecht-bar) {
          width: 12px;
        }
      `),
      visitor: cssTransform.visitor,
    });

    expect(res.code.toString()).toBe(`.nlds-foo:has(.nlds-bar){width:12px}`);
  });

  it("should unify css with variable prefixes", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
        .utrecht-foo {
          width: var(--utrecht-foo);
        }
      `),
      visitor: cssTransform.visitor,
    });

    expect(res.code.toString()).toBe(`.nlds-foo{width:var(--nlds-foo)}`);
  });

  it("should unify css with temp variable prefixes", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
        .utrecht-foo {
          width: var(--_utrecht-foo);
        }
      `),
      visitor: cssTransform.visitor,
    });

    expect(res.code.toString()).toBe(`.nlds-foo{width:var(--_nlds-foo)}`);
  });

  it.only("should unify css with keyframe prefixes", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
        @keyframes utrecht-foo {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `),
      visitor: cssTransform.visitor,
    });

    expect(res.code.toString()).toBe(
      `@keyframes nlds-foo{0%{width:0}to{width:100%}}`,
    );
  });
});
