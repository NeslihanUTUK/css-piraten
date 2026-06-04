import { describe, expect, it } from "vitest";
import {
  findClassNameRegex,
  jsxPrefixTransform,
  replacePrefixes,
} from "./jsxPrefixTransform";

describe("jsxPrefixTransform", () => {
  it("should transform classname prefixes to nlds-", () => {
    const input = `
                <div className="utrecht-button ams-card rhc-header basis-footer">
                    <span className="utrecht-text">Hello World</span>
                </div>`;

    const expectedOutput = `
                <div className="nlds-button nlds-card nlds-header nlds-footer">
                    <span className="nlds-text">Hello World</span>
                </div>`;

    const output = jsxPrefixTransform(input);

    expect(output).toBe(expectedOutput);
  });
});

describe("findClassNameRegex", () => {
  it("should find all className attributes", () => {
    const input = `
                <div className="utrecht-button ams-card rhc-header basis-footer">
                    <span className="utrecht-text">Hello World</span>
                </div>`;

    const matches = Array.from(input.matchAll(findClassNameRegex));
    expect(matches.length).toBe(2);
    expect(matches[0][1]).toBe(
      "utrecht-button ams-card rhc-header basis-footer",
    );
    expect(matches[1][1]).toBe("utrecht-text");
  });

  it("should find build className attributes", () => {
    const input = `function App() {
        return /* @__PURE__ */ _jsxs(PageBody, {
                className: "rhc-page-content__container rhc-theme",
                children: [`;

    const matches = Array.from(input.matchAll(findClassNameRegex));
    expect(matches.length).toBe(1);
    expect(matches[0][1]).toBe("rhc-page-content__container rhc-theme");
  });
  it("should find className attributes inside a function", () => {
    const input = `w_(
      w_(
        {
          className: j(
            \`nl-paragraph\`,
            E({}, \`nl-paragraph--lead\`, i === \`lead\`),
            r,
          ),
          ref: t,
        },
        a,
      ),
      {},
      {
        children:
          i === \`lead\`
            ? (0, O.jsx)(\`b\`, { className: \`nl-paragraph__lead\`, children: n })
            : n,
      },
    ),`;

    const matches = Array.from(input.matchAll(findClassNameRegex));
    expect(matches.length).toBe(3);
    expect(matches[0][1]).toBe("nl-paragraph");
    expect(matches[1][1]).toBe("nl-paragraph--lead");
    expect(matches[2][1]).toBe("nl-paragraph__lead");
  });
});

describe("replace class prefixes", () => {
  it("should replace all className prefixes", () => {
    const input = "utrecht-button ams-card rhc-header basis-footer";
    const expectedOutput = "nlds-button nlds-card nlds-header nlds-footer";

    const output = replacePrefixes(input);

    expect(output).toBe(expectedOutput);
  });
});
