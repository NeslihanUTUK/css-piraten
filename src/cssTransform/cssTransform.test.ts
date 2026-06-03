import { transform } from "lightningcss";
import { it, describe, expect } from "vitest";
import { Buffer } from "node:buffer";

describe("cssTransform", () => {
  it("should transform css with custom visitor", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
    .foo {
      width: 12px;
    }
  `),
      visitor: {
        Length(length) {
          return {
            unit: length.unit,
            value: length.value * 2,
          };
        },
      },
    });
    expect(res.code.toString()).toBe(`.foo{width:24px}`);
  });

  it("should unify css with class prefixes ", () => {
    const res = transform({
      filename: "test.css",
      minify: true,
      code: Buffer.from(`
    .utrecht-foo {
      width: 12px;
    }
    .amsterdam-foo {
      width: 24px;
    }
  `),
      visitor: {
        Selector(selector) {
          return selector.map((component) => {
            if (component.type !== "class") {
              return component;
            }

            return {
              ...component,
              name: component.name.replace(/^(utrecht|amsterdam)-/, "nlds-"),
            };
          });
        },
      },
    });
    expect(res.code.toString()).toBe(`.nlds-foo{width:24px}`);
  });
});
